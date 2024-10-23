import { Component } from '@angular/core';
import { PdfService } from 'src/app/service/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {


  pdf: PdfService

  rooms = []

  constructor(pdf: PdfService) {
    this.pdf = pdf
  }




  data = {
    "department": "Department of Information and Communication Technology",
    "semester": "First Year First Semester",
    "session": "2022-2023",
    "subjects": [
      {
        "subjectName": "Differential and Integral Calculus",
        "subjectCode": "MATH-101",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      },
      {
        "subjectName": "ICT Fundamental",
        "subjectCode": "ICT-103",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 66.66666666666666,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 66.66666666666666,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 66.66666666666666,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 100,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 33.33333333333333,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 66.66666666666666,
            "remarks": ""
          }
        ]
      },
      {
        "subjectName": "Structured Programming",
        "subjectCode": "ICT-105",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 100,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 85.71428571428571,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 71.42857142857143,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 85.71428571428571,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 71.42857142857143,
            "remarks": ""
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 71.42857142857143,
            "remarks": ""
          }
        ]
      },
      {
        "subjectName": "Structured Programming Sessional",
        "subjectCode": "ICT-106",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      },
      {
        "subjectName": "Technical and Communicative English",
        "subjectCode": "ENG-107",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      },
      {
        "subjectName": "Technical and Communicative English Sessional",
        "subjectCode": "ENG-108",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      },
      {
        "subjectName": "Basic Electrical Engineering",
        "subjectCode": "ICT-109",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      },
      {
        "subjectName": "Basic Electrical Engineering Sessional",
        "subjectCode": "ICT-110",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      },
      {
        "subjectName": "Physics",
        "subjectCode": "PHY-111",
        "students": [
          {
            "studentUniqueId": "12209005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309001",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309002",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309003",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309004",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          },
          {
            "studentUniqueId": "12309005",
            "attendancePercentage": 0,
            "remarks": "Below 40%"
          }
        ]
      }
    ]
  }







  generatePdf() {
    this.pdf.attendancePercentage(this.data);
  }

}
