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
  data: any = {
    status: "OK",
    payload: {
      semesterName: "Second Year First Semester",
      semesterCredit: 19,
      departmentName: "Department of Information and Communication Technology",
      batchName: "ICT-2022",
      examSession: "2021-2022",
      session: "2021-2022",
      tabulationSheetGenerate: false,
      students: [
        {
          studentUniqueId: "12109050",
          studentName: "Re-Add",
          totalCredit: 0,
          semesterGpa: "0.00",
          remarks: "Submitted",
          subjects: [
            {
              subjectCode: "MATH-301",
              subjectName: "Differential Equation",
              subjectCredit: 3,
              beforeFinalMarks: 38,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-303",
              subjectName: "Object Oriented Programming ",
              subjectCredit: 3,
              beforeFinalMarks: 32,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-304",
              subjectName: "Object Oriented Programming Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 30,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ECO-305",
              subjectName: "Economics",
              subjectCredit: 2,
              beforeFinalMarks: 16,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-307",
              subjectName: "Algorithm Design",
              subjectCredit: 3,
              beforeFinalMarks: 37,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-308",
              subjectName: "Algorithm Design Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 35,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-309",
              subjectName: "Numerical Analysis",
              subjectCredit: 3,
              beforeFinalMarks: 39,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-310",
              subjectName: "Numerical Analysis Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 38,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ACC-311",
              subjectName: "Financial and Managerial Accounting",
              subjectCredit: 2,
              beforeFinalMarks: 17,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            }
          ],
          viva: {},
          thesis: {},
          project: {},
          internship: {},
          industryAttachment: {}
        },
        {
          studentUniqueId: "12209002",
          studentName: "SAUDHA HUQUE SHOILEE",
          totalCredit: 0,
          semesterGpa: "0.00",
          remarks: "Submitted",
          subjects: [
            {
              subjectCode: "MATH-301",
              subjectName: "Differential Equation",
              subjectCredit: 3,
              beforeFinalMarks: 29,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-303",
              subjectName: "Object Oriented Programming ",
              subjectCredit: 3,
              beforeFinalMarks: 29,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-304",
              subjectName: "Object Oriented Programming Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 29,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ECO-305",
              subjectName: "Economics",
              subjectCredit: 2,
              beforeFinalMarks: 14,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-307",
              subjectName: "Algorithm Design",
              subjectCredit: 3,
              beforeFinalMarks: 32,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-308",
              subjectName: "Algorithm Design Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 32,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-309",
              subjectName: "Numerical Analysis",
              subjectCredit: 3,
              beforeFinalMarks: 32.5,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-310",
              subjectName: "Numerical Analysis Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 32,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ACC-311",
              subjectName: "Financial and Managerial Accounting",
              subjectCredit: 2,
              beforeFinalMarks: 17,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            }
          ],
          viva: {},
          thesis: {},
          project: {},
          internship: {},
          industryAttachment: {}
        },
        {
          studentUniqueId: "12209003",
          studentName: "SUPARNA DEBNATH TONNI",
          totalCredit: 0,
          semesterGpa: "0.00",
          remarks: "Submitted",
          subjects: [
            {
              subjectCode: "MATH-301",
              subjectName: "Differential Equation",
              subjectCredit: 3,
              beforeFinalMarks: 27,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-303",
              subjectName: "Object Oriented Programming ",
              subjectCredit: 3,
              beforeFinalMarks: 28,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-304",
              subjectName: "Object Oriented Programming Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 22,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ECO-305",
              subjectName: "Economics",
              subjectCredit: 2,
              beforeFinalMarks: 16,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-307",
              subjectName: "Algorithm Design",
              subjectCredit: 3,
              beforeFinalMarks: 30,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-308",
              subjectName: "Algorithm Design Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 28,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-309",
              subjectName: "Numerical Analysis",
              subjectCredit: 3,
              beforeFinalMarks: 26.5,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-310",
              subjectName: "Numerical Analysis Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 25,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ACC-311",
              subjectName: "Financial and Managerial Accounting",
              subjectCredit: 2,
              beforeFinalMarks: 15,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            }
          ],
          viva: {},
          thesis: {},
          project: {},
          internship: {},
          industryAttachment: {}
        },
        {
          studentUniqueId: "12209004",
          studentName: "MD. DIPTO RAHMAN",
          totalCredit: 0,
          semesterGpa: "0.00",
          remarks: "Submitted",
          subjects: [
            {
              subjectCode: "MATH-301",
              subjectName: "Differential Equation",
              subjectCredit: 3,
              beforeFinalMarks: 29,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-303",
              subjectName: "Object Oriented Programming ",
              subjectCredit: 3,
              beforeFinalMarks: 30,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-304",
              subjectName: "Object Oriented Programming Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 26,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ECO-305",
              subjectName: "Economics",
              subjectCredit: 2,
              beforeFinalMarks: 15,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-307",
              subjectName: "Algorithm Design",
              subjectCredit: 3,
              beforeFinalMarks: 28,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-308",
              subjectName: "Algorithm Design Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 23,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-309",
              subjectName: "Numerical Analysis",
              subjectCredit: 3,
              beforeFinalMarks: 23,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ICT-310",
              subjectName: "Numerical Analysis Sessional",
              subjectCredit: 1,
              beforeFinalMarks: 23,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            },
            {
              subjectCode: "ACC-311",
              subjectName: "Financial and Managerial Accounting",
              subjectCredit: 2,
              beforeFinalMarks: 15,
              finalMarks: "0.00",
              totalMarks: "Submitted",
              letterGrade: "Submitted",
              gpa: "Submitted"
            }
          ],
          viva: {},
          thesis: {},
          project: {},
          internship: {},
          industryAttachment: {}
        }
      ]
    }
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
    this.generatePDF('contentToConvert');
  }



  pdf: PdfService

  constructor(pdf: PdfService) {
    this.pdf = pdf
  }

  generatePdf() {
    this.pdf.gradeSheetReport(this.data.payload);
    // this.pdf.test(this.data.payload);
  }



}
