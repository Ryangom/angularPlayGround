import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {


  constructor() { }

  ngOnInit(): void { }


  generatePDF(contentId: string): void {
    const element = document.getElementById(contentId);

    // if (element) {
    //   html2canvas(element).then(canvas => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF('l', 'mm', [594, 420]); // A2+ size in mm (landscape)
    //     pdf.addImage(imgData, 'PNG', 0, 0, 594, 420);
    //     pdf.save('A2plus-size.pdf');
    //   });
    // }

    if (element) {
      html2canvas(element).then(canvas => {
        const pdf = new jsPDF('l', 'mm', [594, 420]); // A2+ size in mm (landscape)

        // Draw image first
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 594, 420);

        // Draw text separately to maintain vector quality
        const headers = element.querySelectorAll('h1, h2, h4, h6, p, th, td');
        headers.forEach((header: Element) => {
          const rect = header.getBoundingClientRect();
          pdf.text(header.textContent || '', rect.left * 0.264583, rect.top * 0.264583); // Convert pixels to mm (1 px = 0.264583 mm)
        });

        pdf.save('A2plus-size.pdf');
      });
    }



  }


  downloadPDF() {
    this.generatePDF('contentToConvert');
  }


}
