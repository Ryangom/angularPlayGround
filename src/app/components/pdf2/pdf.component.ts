import { Component } from '@angular/core';
import { PdfService } from 'src/app/service/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {


  pdf: PdfService

  constructor(pdf: PdfService) {
    this.pdf = pdf
  }

  generatePdf() {
    this.pdf.gradeSheetReport();
  }

}
