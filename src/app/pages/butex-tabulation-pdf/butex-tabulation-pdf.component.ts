import { Component } from '@angular/core';

@Component({
  selector: 'app-butex-tabulation-pdf',
  templateUrl: './butex-tabulation-pdf.component.html',
  styleUrls: ['./butex-tabulation-pdf.component.css']
})
export class ButexTabulationPDFComponent {


  subjects = [
    {
      mainName: "Physics",
      subjects: [
        {
          subjectCode: "PHY 101",
          type: "Theory",
          subjectCredit: "3",
          subjectName: "Physics - I"
        },
        {
          subjectCode: "PHY 102",
          type: "Lab",
          subjectCredit: "3",
          subjectName: "Physics - II"
        }
      ]
    },
    {
      mainName: "Chemistry",
      subjects: [
        {
          subjectCode: "PHY 101",
          type: "Theory",
          subjectCredit: "3",
          subjectName: "Physics - I"
        },
      ]
    },
    {
      mainName: "Physics",
      subjects: [
        {
          subjectCode: "PHY 101",
          type: "Theory",
          subjectCredit: "3",
          subjectName: "Physics - I"
        },
        {
          subjectCode: "PHY 102",
          type: "Lab",
          subjectCredit: "3",
          subjectName: "Physics - II"
        }
      ]
    },
  ]

}
