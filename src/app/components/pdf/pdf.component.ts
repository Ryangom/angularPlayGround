import { PayrollButexService } from './../../service/payroll-butex.service';
import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PdfService } from 'src/app/service/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {

  courses = [
    {
      name: 'Polymers',
      code: 'TEX 183-0723',
      type: 'Theory',
      credits: '3 Credits',
      marks: {
        continuous: 60,
        term: 90,
        total: 150,
        partA: 'part-a',
        partB: 'part-b'
      }
    },
    {
      name: 'Polymers',
      code: 'TEX 183-0723',
      type: 'Theory',
      credits: '3 Credits',
      marks: {
        continuous: 60,
        term: 90,
        total: 150,
        partA: 'part-a',
        partB: 'part-b'
      }
    },
    // Add more courses as needed
  ];






  data = {
    "yearOfStudy": "2022-2023",
    "year": 2024,
    "semester": "First Year First Semester",
    "department": "Department of Information and Communication Technology",
    "teacher": "Md. Tofael Ahmed",
    "subjectCode": "ICT-103",
    "subjectName": "ICT Fundamental",
    "studentDTOS": [
      {
        "studentName": "MD. SARWAR ISLAM",
        "studentUniqueId": "12209005",
        "totalClass": 3,
        "percentage": 66.66666666666666,
        "attendanceDTOS": [
          {
            "attendanceDate": "2024-06-08T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-15T18:00:00.000+00:00",
            "present": true
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },
          {
            "attendanceDate": "2024-06-22T18:00:00.000+00:00",
            "present": false
          },


        ]
      },

    ]
  }
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
    this.pdf.test(this.data)
  }



  pdf: PdfService

  constructor(pdf: PdfService, private payrollButexService: PayrollButexService) {
    this.pdf = pdf
  }

  generatePdf() {
    // this.pdf.gradeSheetReport(this.data.payload);
    // this.pdf.test(this.data.payload);

    this.payrollButexService.protounPotro();

  }



}
