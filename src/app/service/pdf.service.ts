import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PageSize } from 'pdfmake/interfaces';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }


  gradeSheetReport(data: any): void {
    console.log(data);
    let students = data.students;



    const generateHeader = (data: any) => {
      return {
        columns: [
          {
            width: 330,
            margin: [0, 1, 30, 0],
            table: {
              body: [
                [
                  {
                    text: 'Marks Range',
                    style: 'header'
                  },

                  {
                    text: 'Letter Grade',
                    style: 'header',
                    colSpan: 2
                  },
                  {},
                  {
                    text: 'Letter Grade',
                    style: 'header',
                  },

                ],
                ['80%', 'A+', '(A Plus)', '4.0'],
                ['75% to Less than 80%', 'A', '(A regular)', '3.75'],
                ['70% to Less than 75%', 'A+', '(A Minus)', '3.5'],
                ['65% to Less than 70%', 'A+', '(B Plus)', '3.25'],
                ['60% to Less than 65%', 'A+', '(B regular)', '3.0'],
              ],

            }
          },
          {
            alignment: "center",
            stack: [
              {
                alignment: "center",
                margin: [1800, 0, 0, 0],
                columns: [
                  // logo
                  {
                    width: 100,
                    alignment: 'center',
                    image: 'data:image/png;base64,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',

                  },
                  {
                    width: 400,
                    alignment: "center",
                    stack: [

                      {
                        text: `Comilla University`,
                        margin: [0, 0, 0, 0],
                        fontSize: 39,
                      },
                      {
                        text: `Comilla`,
                        margin: [0, 0, 0, 10],
                        fontSize: 24,

                      },
                      {
                        text: 'Examination Result Tabulation',
                        fontSize: 25,
                        background: '#00000',
                        color: 'white',
                      }
                    ]
                  },
                ]
              },
              {
                // text: "________Year ____________ Semister Final Examination of___________________________________________   20 ________",
                text: ` ${data.semesterName} Final Examination of ${data.batchName} ${data.examSession} Department: \n ${data.departmentName} Session: ${data.session} \n Semester CH: ${data.semesterCredit}`,
                alignment: "center",
                bold: true,
                fontSize: 18,
                margin: [150, 20, 30, 0],
              },
              // {
              //   text: "Department:_________________________________________ Session:_______________ Semester CH:___________________",
              //   fontSize: 18,
              //   margin: [350, 20, 30, 0],
              // }
            ]
          },
          {
            margin: [0, 1, 0, 0],
            alignment: "right",
            width: 330,
            table: {
              body: [
                [
                  {
                    text: 'Marks Range',
                    style: 'header'
                  },

                  {
                    text: 'Letter Grade',
                    style: 'header',
                    colSpan: 2
                  },
                  {},
                  {
                    text: 'Letter Grade',
                    style: 'header',
                  },

                ],
                ['80%', 'A+', '(A Plus)', '4.0'],
                ['75% to Less than 80%', 'A', '(A regular)', '3.75'],
                ['70% to Less than 75%', 'A+', '(A Minus)', '3.5'],
                ['65% to Less than 70%', 'A+', '(B Plus)', '3.25'],
                ['60% to Less than 65%', 'A+', '(B regular)', '3.0'],
              ],

            }
          },

        ]
      }
    }

    const generateTable = (data: any) => {
      return {
        margin: [0, 30, 0, 0],
        table: {
          margin: [200, 0, 0, 0],
          // widths: ['auto', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            // head
            [
              { text: 'Reg./ID', rowSpan: 3, margin: [0, 20, 0, 0] },
              { text: 'Name Of Student', rowSpan: 3, margin: [0, 20, 0, 0] },
              // { text: 'Marks Grade ',},


              // Subjects              
              ...students[0].subjects.flatMap((subject: { subjectCode: any; subjectCredit: any; subjectName: any; }) => [
                // {},
                {
                  colSpan: 5,
                  alignment: "center",
                  stack: [
                    { text: `Course Code: ${subject.subjectCode}`, bold: true },
                    { text: `CH. ${subject.subjectCredit}`, bold: true },
                    { text: `Title: ${subject.subjectName} `, bold: true },
                  ]
                },
                {}, {}, {}, {}, // Empty cells to align with subjects
              ]),
              // end subjects

              // ECH GPA Remarks
              { text: 'ECH', rowSpan: 3, alignment: "center", bold: true },
              { text: 'Semister GPA', rowSpan: 3, alignment: "center", bold: true },
              { text: 'Remarks', rowSpan: 3, alignment: "center", bold: true },

            ],

            // 	row

            [
              { text: '' },
              { text: '' },



              // Each Subject
              ...students[0].subjects.flatMap(() => [
                // Empty cells to align with subjects
                { text: 'Before Final \n (out of 40%)', rowSpan: 2, alignment: "center", },
                { text: 'Final Exam\n (out of 60%)', rowSpan: 2, alignment: "center", },
                { text: 'Total Marks\n 100%', rowSpan: 2, alignment: "center", },
                { text: 'LG ', rowSpan: 2 },
                { text: 'GP', rowSpan: 2 },
              ]),

              //  ECH GPA Remarks
              {},
              {},
              {},

            ],
            [
              { text: '' },
              { text: '' },

              // Subjects
              ...students[0].subjects.flatMap(() => [
                // Empty cells to align with subjects
                { text: `` },
                { text: `` },
                { text: `` },
                { text: `` },
                { text: `` },
              ]),
              // ECH GPA Remarks
              {},
              {},
              {},

            ],

            //  student

            ...students.map((student: any, index: number) => [
              { text: `${index + 1}` },
              { text: `${student.studentName}` },

              // Subjects
              ...students[index].subjects.flatMap((subject: { beforeFinalMarks: any; finalMarks: any; totalMarks: any; letterGrade: any; gpa: any; }) => [
                // Empty cells to align with subjects
                { text: `${subject.beforeFinalMarks}` },
                { text: `${subject.finalMarks}` },
                { text: `${subject.totalMarks}` },
                { text: `${subject.letterGrade}` },
                { text: `${subject.gpa}` },
              ]),

              // ECH GPA Remarks
              { text: `${student.totalCredit}` },
              { text: `${student.semesterGpa}` },
              { text: `${student.remarks}` },
            ]),

            // Example
            // [
            //   { text: '1' },
            //   { text: 'Jonas Ryan Gomes' },



            //   // Subjects
            //   ...students[0].subjects.flatMap(subject => [
            //     // Empty cells to align with subjects
            //     { text: '10' },
            //     { text: '30' },
            //     { text: '6' },
            //     { text: '9' },
            //     { text: '89' },
            //   ]),

            //   // ECH GPA Remarks
            //   { text: '34' },
            //   { text: '34' },
            //   { text: '34' },
            // ],



          ]
        },
        style: 'table'
      }
    }



    const docDefinition: any = {
      pageSize: '2A0',

      pageOrientation: 'landscape',
      content: [
        // table

        generateHeader(data),
        generateTable(data),
        {

          columns: [
            { text: 'GP=', bold: true, alignment: "left", width: 25 },
            { text: 'Grade Point,', width: 70 },

            { text: 'LG=', bold: true, width: 25 },
            { text: 'Letter Grade,', width: 70 },

            { text: 'SGPA=', bold: true, width: 40 },
            { text: 'Semester Grade Point Average,', width: 165 },

            { text: 'CH=', bold: true, width: 25 },
            { text: 'Credit Hour,', width: 65 },

            { text: 'ECH=', bold: true, width: 30 },
            { text: 'Earned Credit Hours,', },

          ]

        },




        {
          columns: [
            {
              table: {
                widths: [1000, '*',],
                body: [
                  [
                    { text: 'Tabulators & Scrutinizer', bold: true, alignment: "center", },
                  ],
                  [
                    {
                      stack: [

                        { text: '01. Name__', alignment: "left", margin: [0, 20, 0, 20], },
                        { text: '02. Name__', alignment: "left", margin: [0, 20, 0, 20], },
                      ]
                    }
                  ],
                ]
              }
            },
            {
              table: {
                widths: [1000, '*',],
                body: [
                  [
                    { text: 'Signature & Date', bold: true, alignment: "center", },
                  ],
                  [
                    {
                      stack: [

                        { text: '01. Name__', alignment: "left", margin: [0, 20, 0, 20], },
                        { text: '02. Name__', alignment: "left", margin: [0, 20, 0, 20], },
                      ]
                    }
                  ],
                ]
              }
            },
            {
              table: {
                widths: [1000, '*',],
                body: [
                  [
                    { text: 'Chairman of Examination Commitee', bold: true, alignment: "center", },
                  ],
                  [
                    {
                      stack: [

                        { text: '01. Name__', alignment: "left", margin: [0, 20, 0, 20], },
                        { text: '02. Name__', alignment: "left", margin: [0, 20, 0, 20], },
                      ]
                    }
                  ],
                ]
              }
            },
          ]
        },
      ],
      styles: {
        table: {
          fontSize: 18,  // set the font size for the entire table
          // add more styling as needed
        }
      }


    };

    pdfMake
      .createPdf(docDefinition)
      .open();
  }



  test(data: any) {
    console.log(data);

    let arr = [1, 2, 3, 4, 5, 7, 7, 9];




    const docDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      content: [
        {
          table: {
            body: [
              [

                // data.students.flatMap((student: any) => [

                //   student.subjects.flatMap((subject: any) => [

                //     { text: subject.subjectCode },
                //     { text: subject.subjectName },
                //     { text: subject.subjectCredit },
                //   ])
                // ]),

                data.students[0].subjects.flatMap((subject: any) => [
                  { text: subject.subjectCode },
                ])
              ]
            ]
          }
        }
      ]


    };

    pdfMake
      .createPdf(docDefinition)
      .open();
  }

}
