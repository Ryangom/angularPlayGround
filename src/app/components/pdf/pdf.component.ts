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
    this.pdf.tabelTesting()
  }



  pdf: PdfService

  constructor(pdf: PdfService, private payrollButexService: PayrollButexService) {
    this.pdf = pdf
  }


  new = {
    "department": "Department of Mathematics",
    "session": "2017-2018",
    "semesterResultDTOS": [
      {
        "department": "Department of Mathematics",
        "semester": "First Year First Semester",
        "semesterId": 1,
        "session": "2017-2018",
        "creditOfSemester": 18.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "Md Assadujzzaman Miraj",
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "semesterCredits": 0.0,
            "gpandCR": 0.0
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 2.96,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              }
            ],
            "semesterCredits": 15.0,
            "gpandCR": 6.75
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.92,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 12.0
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.25,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "Kazi Sakib",
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "semesterCredits": 0.0,
            "gpandCR": 0.0
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 3.13,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "Abida Sultana",
            "sgpa": 3.58,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 2.83,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 8.25
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 2.92,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 2.33,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              }
            ],
            "semesterCredits": 15.0,
            "gpandCR": 6.75
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 3.17,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 8.25
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.21,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.38,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 3.13,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 2.54,
            "subjects": [
              {
                "subjectId": 540,
                "subjectName": "Fundamentals of Mathematics",
                "subjectCode": "MTH 111",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 541,
                "subjectName": "Differential Calculus",
                "subjectCode": "MTH 112",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 542,
                "subjectName": "Geometry of Two Dimensions",
                "subjectCode": "MTH 113",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 543,
                "subjectName": "Basic Algebra",
                "subjectCode": "MTH 114",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 544,
                "subjectName": "Computer Fundamentals",
                "subjectCode": "CSE 115",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 545,
                "subjectName": "Introductory Statistics",
                "subjectCode": "STA 116",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 6.0
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "First Year Second Semester",
        "semesterId": 2,
        "session": "2017-2018",
        "creditOfSemester": 17.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 2.53,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.79,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.41,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 2.97,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "Abida Sultana",
            "sgpa": 3.19,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 2.71,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 3.24,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 2.56,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.0
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 2.99,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.0,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.0
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.5,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 3.1,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 3.06,
            "subjects": [
              {
                "subjectId": 546,
                "subjectName": "Vector Analysis",
                "subjectCode": "MTH 121",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 547,
                "subjectName": "Integral Calculus ",
                "subjectCode": "MTH 122",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 548,
                "subjectName": "Geometry of Three Dimensions",
                "subjectCode": "MTH 123",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 549,
                "subjectName": "Fundamental of Physics",
                "subjectCode": "PHY 124",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 550,
                "subjectName": "Theory of Statistics",
                "subjectCode": "STA 125",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 551,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 129",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "Second Year First Semester",
        "semesterId": 3,
        "session": "2017-2018",
        "creditOfSemester": 18.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 2.5,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.75,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 11.25
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.13,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 3.17,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "Abida Sultana",
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "semesterCredits": 0.0,
            "gpandCR": 0.0
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 2.54,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 8.25
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 2.88,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 1.58,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "semesterCredits": 15.0,
            "gpandCR": 0.0
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 2.42,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 8.25
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.33,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.5,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 2.42,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 8.25
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 2.5,
            "subjects": [
              {
                "subjectId": 552,
                "subjectName": "Real Analysis I",
                "subjectCode": "MTH 211",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 553,
                "subjectName": "Calculus of Several Variables",
                "subjectCode": "MTH 212",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 554,
                "subjectName": "Linear Algebra I",
                "subjectCode": "MTH 213",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 555,
                "subjectName": "Ordinary Differential Equations I ",
                "subjectCode": "MTH 214",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 556,
                "subjectName": "Programming with C and C ++",
                "subjectCode": "CSE 215",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 557,
                "subjectName": "Modern Physics",
                "subjectCode": "PHY 216",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 7.5
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "Second Year Second Semester",
        "semesterId": 4,
        "session": "2017-2018",
        "creditOfSemester": 17.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 2.71,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.5
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.71,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.43,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 3.29,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.0
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 2.68,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.0
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 3.21,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.0
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 3.21,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.0
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 2.99,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.0
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.37,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.5,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 3.04,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.0
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 2.99,
            "subjects": [
              {
                "subjectId": 558,
                "subjectName": "Real Analysis II ",
                "subjectCode": "MTH 221",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 559,
                "subjectName": "Programming with FORTRAN",
                "subjectCode": "MTH 222",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 560,
                "subjectName": "Linear Algebra II ",
                "subjectCode": "MTH 223",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 561,
                "subjectName": "Ordinary Differential Equations II",
                "subjectCode": "MTH 224",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 562,
                "subjectName": "Math Lab I : Basic Concept on MATHEMATICA",
                "subjectCode": "MTH 225",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 563,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 229",
                "numberOfCredits": 2.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 5.0
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "Third Year First Semester",
        "semesterId": 5,
        "session": "2017-2018",
        "creditOfSemester": 18.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 2.63,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.75,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.25,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 3.38,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 2.79,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 3.17,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 2.38,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 15.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 2.92,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.38,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 11.25
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.17,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 11.25
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 2.88,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 3.13,
            "subjects": [
              {
                "subjectId": 564,
                "subjectName": "Complex Analysis I",
                "subjectCode": "MTH 311",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 565,
                "subjectName": "Abstract Algebra ",
                "subjectCode": "MTH 312",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 566,
                "subjectName": "Mathematical Methods",
                "subjectCode": "MTH 313",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 567,
                "subjectName": "Numerical Analysis I ",
                "subjectCode": "MTH 314",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 568,
                "subjectName": "Partial Differential Equations",
                "subjectCode": "MTH 315",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 569,
                "subjectName": "Discrete Mathematics",
                "subjectCode": "MTH 316",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "Third Year Second Semester",
        "semesterId": 6,
        "session": "2017-2018",
        "creditOfSemester": 17.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 3.91,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 4.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 8.0
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.93,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.57,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 3.59,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 1.99,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 14.0,
            "gpandCR": 6.0
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 3.16,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 3.4,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.0
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 3.47,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.46,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.91,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 3.04,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.0
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 2.78,
            "subjects": [
              {
                "subjectId": 570,
                "subjectName": "Complex Analysis II",
                "subjectCode": "MTH 321",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 571,
                "subjectName": "Introduction to Rings and Fields",
                "subjectCode": "MTH 322",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 572,
                "subjectName": "Linear Programming ",
                "subjectCode": "MTH 323",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 573,
                "subjectName": "Numerical Analysis II ",
                "subjectCode": "MTH 324",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 574,
                "subjectName": "Math Lab II: Numerical Analysis with MATHEMATICA",
                "subjectCode": "MTH 325",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 575,
                "subjectName": "Comprehensive Viva ",
                "subjectCode": "MTH 329",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 17.0,
            "gpandCR": 6.0
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "Fourth Year First Semester",
        "semesterId": 7,
        "session": "2017-2018",
        "creditOfSemester": 18.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "sgpa": 2.29,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.0
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 6.75
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "sgpa": 3.71,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 11.25
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "sgpa": 3.5,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "sgpa": 3.67,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 11.25
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "sgpa": 3.13,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "sgpa": 3.42,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "sgpa": 3.21,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.75
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "sgpa": 3.08,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "sgpa": 3.38,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "sgpa": 3.67,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "sgpa": 3.17,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 10.5
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "sgpa": 3.29,
            "subjects": [
              {
                "subjectId": 576,
                "subjectName": "Fundamentals of Topology.",
                "subjectCode": "MTH 411",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 577,
                "subjectName": "Fuzzy Mathematics",
                "subjectCode": "MTH 412",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 578,
                "subjectName": "Mechanics I",
                "subjectCode": "MTH 413",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 579,
                "subjectName": "Theory of Numbers",
                "subjectCode": "MTH 414",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 580,
                "subjectName": "Hydrodynamics",
                "subjectCode": "MTH 415",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 581,
                "subjectName": "Differential Geometry",
                "subjectCode": "MTH 416",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              }
            ],
            "semesterCredits": 18.0,
            "gpandCR": 9.0
          }
        ]
      },
      {
        "department": "Department of Mathematics",
        "semester": "Fourth Year Second Semester",
        "semesterId": 8,
        "session": "2017-2018",
        "creditOfSemester": 17.0,
        "students": [
          {
            "studentUniqueId": "111804033",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804001",
            "studentName": "MD. Mazharul Islam",
            "totalCredits": 137.0,
            "sgpa": 2.91,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.25
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.75
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "cgpa": 2.76,
            "semesterCredits": 17.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804002",
            "studentName": "Shahidul Islam",
            "totalCredits": 143.0,
            "sgpa": 3.75,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "cgpa": 3.79,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804003",
            "studentName": "Sadia Ahmed Akhi",
            "totalCredits": 143.0,
            "sgpa": 3.68,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "cgpa": 3.4,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804004",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804005",
            "studentName": "Mst. Muslima Akther",
            "totalCredits": 143.0,
            "sgpa": 3.8,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "cgpa": 3.38,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804006",
            "studentName": "",
            "totalCredits": 0.0,
            "sgpa": 0.0,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 0.0
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 0.0
              }
            ],
            "cgpa": 0.0,
            "semesterCredits": 0.0,
            "remarks": "",
            "remarksForIntegratedReport": ""
          },
          {
            "studentUniqueId": "11804007",
            "studentName": "Md. Mayin Uddin",
            "totalCredits": 140.0,
            "sgpa": 3.4,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "cgpa": 2.83,
            "semesterCredits": 20.0,
            "remarks": "Passed with F in MTH 323",
            "remarksForIntegratedReport": "Withheld with F in MTH 323",
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804008",
            "studentName": "Umma Romana ",
            "totalCredits": 143.0,
            "sgpa": 3.66,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "cgpa": 3.21,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804009",
            "studentName": "Tanjim Al Banna",
            "totalCredits": 134.0,
            "sgpa": 3.54,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "cgpa": 2.97,
            "semesterCredits": 20.0,
            "remarks": "Passed with F in MTH 211, MTH 312, MTH 113, PHY 216",
            "remarksForIntegratedReport": "Withheld with F in MTH 211, MTH 312, MTH 113, PHY 216",
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804010",
            "studentName": "Md. Khairul Islam",
            "totalCredits": 143.0,
            "sgpa": 3.39,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 2.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "cgpa": 3.05,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 7.0
          },
          {
            "studentUniqueId": "11804011",
            "studentName": "Fariha Farjana Noon",
            "totalCredits": 143.0,
            "sgpa": 3.7,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "cgpa": 3.36,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804012",
            "studentName": "Mst. Fahima Akter",
            "totalCredits": 143.0,
            "sgpa": 3.38,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.75
              }
            ],
            "cgpa": 3.49,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 7.5
          },
          {
            "studentUniqueId": "11804013",
            "studentName": "Md. Joy Hossain",
            "totalCredits": 143.0,
            "sgpa": 3.55,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.25
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.25
              }
            ],
            "cgpa": 3.05,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 6.5
          },
          {
            "studentUniqueId": "11804014",
            "studentName": "Shariful Islam",
            "totalCredits": 143.0,
            "sgpa": 3.58,
            "subjects": [
              {
                "subjectId": 582,
                "subjectName": "Functional Analysis",
                "subjectCode": "MTH 421",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.0
              },
              {
                "subjectId": 583,
                "subjectName": "Tensor Analysis ",
                "subjectCode": "MTH 422",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 584,
                "subjectName": "Mechanics II",
                "subjectCode": "MTH 423",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 586,
                "subjectName": "Mathematical Modeling in Biology ",
                "subjectCode": "MTH 425",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.75
              },
              {
                "subjectId": 588,
                "subjectName": "Honours Project",
                "subjectCode": "MTH 427",
                "numberOfCredits": 3.0,
                "subjectGpa": 4.0
              },
              {
                "subjectId": 589,
                "subjectName": "Math Lab III : Numerical Analysis with FORTAN ",
                "subjectCode": "MTH 428",
                "numberOfCredits": 3.0,
                "subjectGpa": 3.5
              },
              {
                "subjectId": 591,
                "subjectName": "Comprehensive Viva",
                "subjectCode": "MTH 429",
                "numberOfCredits": 2.0,
                "subjectGpa": 3.5
              }
            ],
            "cgpa": 2.99,
            "semesterCredits": 20.0,
            "remarks": "Passed",
            "remarksForIntegratedReport": "Passed",
            "gpandCR": 7.0
          }
        ]
      }
    ]
  }



  generatePdf() {
    // this.pdf.gradeSheetReport(this.data.payload);
    // this.pdf.test(this.data.payload);

    // this.payrollButexService.test(this.new);

    this.pdf.tabelTesting();

  }



}
