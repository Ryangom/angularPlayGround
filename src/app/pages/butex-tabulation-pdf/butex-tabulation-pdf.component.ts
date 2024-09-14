import { Component } from '@angular/core';

@Component({
  selector: 'app-butex-tabulation-pdf',
  templateUrl: './butex-tabulation-pdf.component.html',
  styleUrls: ['./butex-tabulation-pdf.component.css']
})
export class ButexTabulationPDFComponent {


  subjects: any = [
    {
      "mainSubjectName": "Chemistry-1",
      "partialSubjects": [
        {
          "subjectId": 13,
          "subjectName": "Chemistry-1",
          "subjectCode": "CHEM 101",
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 13,
            "subjectCode": "CHEM 101",
            "subjectOBECode": "CHEM 101-0531",
            "subjectName": "Chemistry-1",
            "subjectCredit": 3,
            "beforeFinalMarks": 49,
            "finalMarks": "78.0",
            "totalMarks": "127.0",
            "letterGrade": "A+",
            "gpa": "4.0",
            "partAMarks": 39,
            "partBMarks": 39,
            "theory": true,
            "lab": false
          }
        },
        {
          "subjectId": 14,
          "subjectName": "Chemistry-I Lab",
          "subjectCode": "CHEM 102",
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 14,
            "subjectCode": "CHEM 102",
            "subjectOBECode": "CHEM 102-0531",
            "subjectName": "Chemistry-I Lab",
            "subjectCredit": 1,
            "beforeFinalMarks": 38.5,
            "finalMarks": "38.0",
            "totalMarks": "77.0",
            "letterGrade": "A",
            "gpa": "3.75",
            "theory": false,
            "lab": true
          }
        }
      ]
    },
    {
      "mainSubjectName": "Physics-1",
      "partialSubjects": [
        {
          "subjectId": 9,
          "subjectName": "Physics-1",
          "subjectCode": "PHY 101",
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 9,
            "subjectCode": "PHY 101",
            "subjectOBECode": "PHY 101-0533",
            "subjectName": "Physics-1",
            "subjectCredit": 3,
            "beforeFinalMarks": 46,
            "finalMarks": "77.0",
            "totalMarks": "123.0",
            "letterGrade": "A+",
            "gpa": "4.0",
            "partAMarks": 36,
            "partBMarks": 41,
            "theory": true,
            "lab": false
          }
        },
        {
          "subjectId": 11,
          "subjectName": "Physics -I Lab",
          "subjectCode": "PHY 102",
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 11,
            "subjectCode": "PHY 102",
            "subjectOBECode": "PHY 102-0533",
            "subjectName": "Physics -I Lab",
            "subjectCredit": 1,
            "beforeFinalMarks": 53.5,
            "finalMarks": "34.0",
            "totalMarks": "88.0",
            "letterGrade": "A+",
            "gpa": "4.0",
            "theory": false,
            "lab": true
          }
        }
      ]
    },
    {
      "mainSubjectName": "Mathematics-1",
      "subjectId": 12,
      "subjectCode": "MATH 101",
      "partialSubjects": [],
      "finalSubjectTabulationSheetDTO": {
        "subjectId": 12,
        "subjectCode": "MATH 101",
        "subjectOBECode": "MATH 101-0541",
        "subjectName": "Mathematics-1",
        "subjectCredit": 3,
        "beforeFinalMarks": 50,
        "finalMarks": "78.0",
        "totalMarks": "128.0",
        "letterGrade": "A+",
        "gpa": "4.0",
        "partAMarks": 39,
        "partBMarks": 39,
        "theory": true,
        "lab": false
      }
    }

  ]

  students: any = [
    {
      "studentUniqueId": "23010101001",
      "studentName": " SAIFUR RAHMAN PALASH",
      "totalCredit": 18,
      "semesterGpa": "3.78",
      "remarks": "Passed",
      "subjects": [
        {
          "subjectId": 13,
          "subjectCode": "CHEM 101",
          "subjectOBECode": "CHEM 101-0531",
          "subjectName": "Chemistry-1",
          "subjectCredit": 3,
          "beforeFinalMarks": 45,
          "finalMarks": "70.0",
          "totalMarks": "115.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "partAMarks": 35,
          "partBMarks": 35,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 12,
          "subjectCode": "MATH 101",
          "subjectOBECode": "MATH 101-0541",
          "subjectName": "Mathematics-1",
          "subjectCredit": 3,
          "beforeFinalMarks": 43,
          "finalMarks": "70.0",
          "totalMarks": "113.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "partAMarks": 35,
          "partBMarks": 35,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 9,
          "subjectCode": "PHY 101",
          "subjectOBECode": "PHY 101-0533",
          "subjectName": "Physics-1",
          "subjectCredit": 3,
          "beforeFinalMarks": 52,
          "finalMarks": "84.0",
          "totalMarks": "136.0",
          "letterGrade": "A+",
          "gpa": "4.0",
          "partAMarks": 44,
          "partBMarks": 40,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 20,
          "subjectCode": "ENG 101",
          "subjectOBECode": "ENG 101-0231",
          "subjectName": "Business and Communicative English",
          "subjectCredit": 2,
          "beforeFinalMarks": 27,
          "finalMarks": "49.0",
          "totalMarks": "76.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "partAMarks": 26,
          "partBMarks": 23,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 30,
          "subjectCode": "YE 101",
          "subjectOBECode": "YE 101-0723",
          "subjectName": "Natural Textile Fibres",
          "subjectCredit": 3,
          "beforeFinalMarks": 48,
          "finalMarks": "70.0",
          "totalMarks": "118.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "partAMarks": 35,
          "partBMarks": 35,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 14,
          "subjectCode": "CHEM 102",
          "subjectOBECode": "CHEM 102-0531",
          "subjectName": "Chemistry-I Lab",
          "subjectCredit": 1,
          "beforeFinalMarks": 35.5,
          "finalMarks": "30.0",
          "totalMarks": "66.0",
          "letterGrade": "B+",
          "gpa": "3.25",
          "theory": false,
          "lab": true
        },
        {
          "subjectId": 21,
          "subjectCode": "ENG 102",
          "subjectOBECode": "ENG 102-0231",
          "subjectName": "Business and Communicative English Lab",
          "subjectCredit": 1,
          "beforeFinalMarks": 46.5,
          "finalMarks": "26.0",
          "totalMarks": "73.0",
          "letterGrade": "A-",
          "gpa": "3.5",
          "theory": false,
          "lab": true
        },
        {
          "subjectId": 11,
          "subjectCode": "PHY 102",
          "subjectOBECode": "PHY 102-0533",
          "subjectName": "Physics -I Lab",
          "subjectCredit": 1,
          "beforeFinalMarks": 51.5,
          "finalMarks": "28.0",
          "totalMarks": "80.0",
          "letterGrade": "A+",
          "gpa": "4.0",
          "theory": false,
          "lab": true
        },
        {
          "subjectId": 6,
          "subjectCode": "IPE 104",
          "subjectName": "Engineering Drawing (Practical)",
          "subjectCredit": 1,
          "beforeFinalMarks": 49.5,
          "finalMarks": "35.0",
          "totalMarks": "85.0",
          "letterGrade": "A+",
          "gpa": "4.0",
          "theory": false,
          "lab": true
        }
      ],
      "viva": {},
      "thesis": {},
      "project": {},
      "internship": {},
      "industryAttachment": {},
      "ciGiOfThisTerm": 68,
      "semesterTotalCredit": 18,
      "totalCreditsTakenUpToImmediatePastTerm": 0,
      "totalCreditsTakenUpToThisTerm": 18,
      "totalCreditsEarnedUpToImmediatePastTerm": 0,
      "creditsEarnedFromRetakeSubjectsInThisTerm": 0,
      "creditsEarnedFromRegularSubjectsInThisTerm": 18,
      "totalCreditsEarnedUpToThisTerm": 18,
      "totalMarksEarnedUpToImmediatePastTerm": 0,
      "marksEarnedFromRetakeSubjectsInThisTerm": 0,
      "marksEarnedFromRegularSubjectsInThisTerm": 862,
      "totalMarksEarnedUpToThisTerm": 862,
      "ciGiUpToImmediatePastTerm": 0,
      "ciGiOfRetakeSubject": 0,
      "ciGiUpToThisTerm": 68,
      "appearedCourses": [
        {
          "id": 6,
          "subjectCode": "IPE 104",
          "name": "Engineering Drawing (Practical)",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        },
        {
          "id": 20,
          "subjectCode": "ENG 101",
          "subjectOBECode": "ENG 101-0231",
          "name": "Business and Communicative English",
          "numberOfCredits": 2,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100,
          "labSubjectId": 21
        },
        {
          "id": 13,
          "subjectCode": "CHEM 101",
          "subjectOBECode": "CHEM 101-0531",
          "name": "Chemistry-1",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150,
          "labSubjectId": 14
        },
        {
          "id": 9,
          "subjectCode": "PHY 101",
          "subjectOBECode": "PHY 101-0533",
          "name": "Physics-1",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150,
          "labSubjectId": 11
        },
        {
          "id": 12,
          "subjectCode": "MATH 101",
          "subjectOBECode": "MATH 101-0541",
          "name": "Mathematics-1",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150
        },
        {
          "id": 30,
          "subjectCode": "YE 101",
          "subjectOBECode": "YE 101-0723",
          "name": "Natural Textile Fibres",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150
        },
        {
          "id": 21,
          "subjectCode": "ENG 102",
          "subjectOBECode": "ENG 102-0231",
          "name": "Business and Communicative English Lab",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        },
        {
          "id": 14,
          "subjectCode": "CHEM 102",
          "subjectOBECode": "CHEM 102-0531",
          "name": "Chemistry-I Lab",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        },
        {
          "id": 11,
          "subjectCode": "PHY 102",
          "subjectOBECode": "PHY 102-0533",
          "name": "Physics -I Lab",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        }
      ],
      "firstAdmissionYear": "2023",
      "accumulatedSubjects": [
        {
          "mainSubjectName": "Chemistry-1",
          "partialSubjects": [
            {
              "subjectId": 13,
              "subjectName": "Chemistry-1",
              "subjectCode": "CHEM 101",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 13,
                "subjectCode": "CHEM 101",
                "subjectOBECode": "CHEM 101-0531",
                "subjectName": "Chemistry-1",
                "subjectCredit": 3,
                "beforeFinalMarks": 49,
                "finalMarks": "78.0",
                "totalMarks": "127.0",
                "letterGrade": "A+",
                "gpa": "4.0",
                "partAMarks": 39,
                "partBMarks": 39,
                "theory": true,
                "lab": false
              }
            },
            {
              "subjectId": 14,
              "subjectName": "Chemistry-I Lab",
              "subjectCode": "CHEM 102",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 14,
                "subjectCode": "CHEM 102",
                "subjectOBECode": "CHEM 102-0531",
                "subjectName": "Chemistry-I Lab",
                "subjectCredit": 1,
                "beforeFinalMarks": 38.5,
                "finalMarks": "38.0",
                "totalMarks": "77.0",
                "letterGrade": "A",
                "gpa": "3.75",
                "theory": false,
                "lab": true
              }
            }
          ]
        },
        {
          "mainSubjectName": "Mathematics-1",
          "subjectId": 12,
          "subjectCode": "MATH 101",
          "partialSubjects": [],
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 12,
            "subjectCode": "MATH 101",
            "subjectOBECode": "MATH 101-0541",
            "subjectName": "Mathematics-1",
            "subjectCredit": 3,
            "beforeFinalMarks": 50,
            "finalMarks": "78.0",
            "totalMarks": "128.0",
            "letterGrade": "A+",
            "gpa": "4.0",
            "partAMarks": 39,
            "partBMarks": 39,
            "theory": true,
            "lab": false
          }
        },
        {
          "mainSubjectName": "Physics-1",
          "partialSubjects": [
            {
              "subjectId": 9,
              "subjectName": "Physics-1",
              "subjectCode": "PHY 101",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 9,
                "subjectCode": "PHY 101",
                "subjectOBECode": "PHY 101-0533",
                "subjectName": "Physics-1",
                "subjectCredit": 3,
                "beforeFinalMarks": 46,
                "finalMarks": "77.0",
                "totalMarks": "123.0",
                "letterGrade": "A+",
                "gpa": "4.0",
                "partAMarks": 36,
                "partBMarks": 41,
                "theory": true,
                "lab": false
              }
            },
            {
              "subjectId": 11,
              "subjectName": "Physics -I Lab",
              "subjectCode": "PHY 102",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 11,
                "subjectCode": "PHY 102",
                "subjectOBECode": "PHY 102-0533",
                "subjectName": "Physics -I Lab",
                "subjectCredit": 1,
                "beforeFinalMarks": 53.5,
                "finalMarks": "34.0",
                "totalMarks": "88.0",
                "letterGrade": "A+",
                "gpa": "4.0",
                "theory": false,
                "lab": true
              }
            }
          ]
        },
        {
          "mainSubjectName": "Business and Communicative English",
          "partialSubjects": [
            {
              "subjectId": 20,
              "subjectName": "Business and Communicative English",
              "subjectCode": "ENG 101",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 20,
                "subjectCode": "ENG 101",
                "subjectOBECode": "ENG 101-0231",
                "subjectName": "Business and Communicative English",
                "subjectCredit": 2,
                "beforeFinalMarks": 26,
                "finalMarks": "42.0",
                "totalMarks": "68.0",
                "letterGrade": "B+",
                "gpa": "3.25",
                "partAMarks": 18,
                "partBMarks": 24,
                "theory": true,
                "lab": false
              }
            },
            {
              "subjectId": 21,
              "subjectName": "Business and Communicative English Lab",
              "subjectCode": "ENG 102",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 21,
                "subjectCode": "ENG 102",
                "subjectOBECode": "ENG 102-0231",
                "subjectName": "Business and Communicative English Lab",
                "subjectCredit": 1,
                "beforeFinalMarks": 34.5,
                "finalMarks": "22.0",
                "totalMarks": "57.0",
                "letterGrade": "B-",
                "gpa": "2.75",
                "theory": false,
                "lab": true
              }
            }
          ]
        },
        {
          "mainSubjectName": "Natural Textile Fibres",
          "subjectId": 30,
          "subjectCode": "YE 101",
          "partialSubjects": [],
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 30,
            "subjectCode": "YE 101",
            "subjectOBECode": "YE 101-0723",
            "subjectName": "Natural Textile Fibres",
            "subjectCredit": 3,
            "beforeFinalMarks": 30,
            "finalMarks": "78.0",
            "totalMarks": "108.0",
            "letterGrade": "A-",
            "gpa": "3.5",
            "partAMarks": 39,
            "partBMarks": 39,
            "theory": true,
            "lab": false
          }
        }
      ]
    },
    {
      "studentUniqueId": "23010101002",
      "studentName": "MD. RAHAT HOWLADER",
      "totalCredit": 18,
      "semesterGpa": "3.74",
      "remarks": "Passed",
      "subjects": [
        {
          "subjectId": 13,
          "subjectCode": "CHEM 101",
          "subjectOBECode": "CHEM 101-0531",
          "subjectName": "Chemistry-1",
          "subjectCredit": 3,
          "beforeFinalMarks": 45,
          "finalMarks": "72.0",
          "totalMarks": "117.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "partAMarks": 36,
          "partBMarks": 36,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 12,
          "subjectCode": "MATH 101",
          "subjectOBECode": "MATH 101-0541",
          "subjectName": "Mathematics-1",
          "subjectCredit": 3,
          "beforeFinalMarks": 40,
          "finalMarks": "72.0",
          "totalMarks": "112.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "partAMarks": 36,
          "partBMarks": 36,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 9,
          "subjectCode": "PHY 101",
          "subjectOBECode": "PHY 101-0533",
          "subjectName": "Physics-1",
          "subjectCredit": 3,
          "beforeFinalMarks": 51,
          "finalMarks": "77.0",
          "totalMarks": "128.0",
          "letterGrade": "A+",
          "gpa": "4.0",
          "partAMarks": 38,
          "partBMarks": 39,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 20,
          "subjectCode": "ENG 101",
          "subjectOBECode": "ENG 101-0231",
          "subjectName": "Business and Communicative English",
          "subjectCredit": 2,
          "beforeFinalMarks": 27,
          "finalMarks": "47.0",
          "totalMarks": "74.0",
          "letterGrade": "A-",
          "gpa": "3.5",
          "partAMarks": 24,
          "partBMarks": 23,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 30,
          "subjectCode": "YE 101",
          "subjectOBECode": "YE 101-0723",
          "subjectName": "Natural Textile Fibres",
          "subjectCredit": 3,
          "beforeFinalMarks": 36,
          "finalMarks": "72.0",
          "totalMarks": "108.0",
          "letterGrade": "A-",
          "gpa": "3.5",
          "partAMarks": 36,
          "partBMarks": 36,
          "theory": true,
          "lab": false
        },
        {
          "subjectId": 14,
          "subjectCode": "CHEM 102",
          "subjectOBECode": "CHEM 102-0531",
          "subjectName": "Chemistry-I Lab",
          "subjectCredit": 1,
          "beforeFinalMarks": 37.5,
          "finalMarks": "32.0",
          "totalMarks": "70.0",
          "letterGrade": "A-",
          "gpa": "3.5",
          "theory": false,
          "lab": true
        },
        {
          "subjectId": 21,
          "subjectCode": "ENG 102",
          "subjectOBECode": "ENG 102-0231",
          "subjectName": "Business and Communicative English Lab",
          "subjectCredit": 1,
          "beforeFinalMarks": 45.5,
          "finalMarks": "29.0",
          "totalMarks": "75.0",
          "letterGrade": "A",
          "gpa": "3.75",
          "theory": false,
          "lab": true
        },
        {
          "subjectId": 11,
          "subjectCode": "PHY 102",
          "subjectOBECode": "PHY 102-0533",
          "subjectName": "Physics -I Lab",
          "subjectCredit": 1,
          "beforeFinalMarks": 51.5,
          "finalMarks": "35.0",
          "totalMarks": "87.0",
          "letterGrade": "A+",
          "gpa": "4.0",
          "theory": false,
          "lab": true
        },
        {
          "subjectId": 6,
          "subjectCode": "IPE 104",
          "subjectName": "Engineering Drawing (Practical)",
          "subjectCredit": 1,
          "beforeFinalMarks": 50.5,
          "finalMarks": "36.0",
          "totalMarks": "87.0",
          "letterGrade": "A+",
          "gpa": "4.0",
          "theory": false,
          "lab": true
        }
      ],
      "viva": {},
      "thesis": {},
      "project": {},
      "internship": {},
      "industryAttachment": {},
      "ciGiOfThisTerm": 67.25,
      "semesterTotalCredit": 18,
      "totalCreditsTakenUpToImmediatePastTerm": 0,
      "totalCreditsTakenUpToThisTerm": 18,
      "totalCreditsEarnedUpToImmediatePastTerm": 0,
      "creditsEarnedFromRetakeSubjectsInThisTerm": 0,
      "creditsEarnedFromRegularSubjectsInThisTerm": 18,
      "totalCreditsEarnedUpToThisTerm": 18,
      "totalMarksEarnedUpToImmediatePastTerm": 0,
      "marksEarnedFromRetakeSubjectsInThisTerm": 0,
      "marksEarnedFromRegularSubjectsInThisTerm": 858,
      "totalMarksEarnedUpToThisTerm": 858,
      "ciGiUpToImmediatePastTerm": 0,
      "ciGiOfRetakeSubject": 0,
      "ciGiUpToThisTerm": 67.25,
      "appearedCourses": [
        {
          "id": 6,
          "subjectCode": "IPE 104",
          "name": "Engineering Drawing (Practical)",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        },
        {
          "id": 20,
          "subjectCode": "ENG 101",
          "subjectOBECode": "ENG 101-0231",
          "name": "Business and Communicative English",
          "numberOfCredits": 2,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100,
          "labSubjectId": 21
        },
        {
          "id": 13,
          "subjectCode": "CHEM 101",
          "subjectOBECode": "CHEM 101-0531",
          "name": "Chemistry-1",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150,
          "labSubjectId": 14
        },
        {
          "id": 9,
          "subjectCode": "PHY 101",
          "subjectOBECode": "PHY 101-0533",
          "name": "Physics-1",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150,
          "labSubjectId": 11
        },
        {
          "id": 12,
          "subjectCode": "MATH 101",
          "subjectOBECode": "MATH 101-0541",
          "name": "Mathematics-1",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150
        },
        {
          "id": 30,
          "subjectCode": "YE 101",
          "subjectOBECode": "YE 101-0723",
          "name": "Natural Textile Fibres",
          "numberOfCredits": 3,
          "theory": true,
          "lab": false,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 150
        },
        {
          "id": 21,
          "subjectCode": "ENG 102",
          "subjectOBECode": "ENG 102-0231",
          "name": "Business and Communicative English Lab",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        },
        {
          "id": 14,
          "subjectCode": "CHEM 102",
          "subjectOBECode": "CHEM 102-0531",
          "name": "Chemistry-I Lab",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        },
        {
          "id": 11,
          "subjectCode": "PHY 102",
          "subjectOBECode": "PHY 102-0533",
          "name": "Physics -I Lab",
          "numberOfCredits": 1,
          "theory": false,
          "lab": true,
          "project": false,
          "thesis": false,
          "internship": false,
          "industryAttachment": false,
          "viva": false,
          "fullMarks": 100
        }
      ],
      "firstAdmissionYear": "2023",
      "accumulatedSubjects": [
        {
          "mainSubjectName": "Chemistry-1",
          "partialSubjects": [
            {
              "subjectId": 13,
              "subjectName": "Chemistry-1",
              "subjectCode": "CHEM 101",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 13,
                "subjectCode": "CHEM 101",
                "subjectOBECode": "CHEM 101-0531",
                "subjectName": "Chemistry-1",
                "subjectCredit": 3,
                "beforeFinalMarks": 49,
                "finalMarks": "78.0",
                "totalMarks": "127.0",
                "letterGrade": "A+",
                "gpa": "4.0",
                "partAMarks": 39,
                "partBMarks": 39,
                "theory": true,
                "lab": false
              }
            },
            {
              "subjectId": 14,
              "subjectName": "Chemistry-I Lab",
              "subjectCode": "CHEM 102",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 14,
                "subjectCode": "CHEM 102",
                "subjectOBECode": "CHEM 102-0531",
                "subjectName": "Chemistry-I Lab",
                "subjectCredit": 1,
                "beforeFinalMarks": 38.5,
                "finalMarks": "38.0",
                "totalMarks": "77.0",
                "letterGrade": "A",
                "gpa": "3.75",
                "theory": false,
                "lab": true
              }
            }
          ]
        },
        {
          "mainSubjectName": "Mathematics-1",
          "subjectId": 12,
          "subjectCode": "MATH 101",
          "partialSubjects": [],
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 12,
            "subjectCode": "MATH 101",
            "subjectOBECode": "MATH 101-0541",
            "subjectName": "Mathematics-1",
            "subjectCredit": 3,
            "beforeFinalMarks": 50,
            "finalMarks": "78.0",
            "totalMarks": "128.0",
            "letterGrade": "A+",
            "gpa": "4.0",
            "partAMarks": 39,
            "partBMarks": 39,
            "theory": true,
            "lab": false
          }
        },
        {
          "mainSubjectName": "Physics-1",
          "partialSubjects": [
            {
              "subjectId": 9,
              "subjectName": "Physics-1",
              "subjectCode": "PHY 101",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 9,
                "subjectCode": "PHY 101",
                "subjectOBECode": "PHY 101-0533",
                "subjectName": "Physics-1",
                "subjectCredit": 3,
                "beforeFinalMarks": 46,
                "finalMarks": "77.0",
                "totalMarks": "123.0",
                "letterGrade": "A+",
                "gpa": "4.0",
                "partAMarks": 36,
                "partBMarks": 41,
                "theory": true,
                "lab": false
              }
            },
            {
              "subjectId": 11,
              "subjectName": "Physics -I Lab",
              "subjectCode": "PHY 102",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 11,
                "subjectCode": "PHY 102",
                "subjectOBECode": "PHY 102-0533",
                "subjectName": "Physics -I Lab",
                "subjectCredit": 1,
                "beforeFinalMarks": 53.5,
                "finalMarks": "34.0",
                "totalMarks": "88.0",
                "letterGrade": "A+",
                "gpa": "4.0",
                "theory": false,
                "lab": true
              }
            }
          ]
        },
        {
          "mainSubjectName": "Business and Communicative English",
          "partialSubjects": [
            {
              "subjectId": 20,
              "subjectName": "Business and Communicative English",
              "subjectCode": "ENG 101",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 20,
                "subjectCode": "ENG 101",
                "subjectOBECode": "ENG 101-0231",
                "subjectName": "Business and Communicative English",
                "subjectCredit": 2,
                "beforeFinalMarks": 26,
                "finalMarks": "42.0",
                "totalMarks": "68.0",
                "letterGrade": "B+",
                "gpa": "3.25",
                "partAMarks": 18,
                "partBMarks": 24,
                "theory": true,
                "lab": false
              }
            },
            {
              "subjectId": 21,
              "subjectName": "Business and Communicative English Lab",
              "subjectCode": "ENG 102",
              "finalSubjectTabulationSheetDTO": {
                "subjectId": 21,
                "subjectCode": "ENG 102",
                "subjectOBECode": "ENG 102-0231",
                "subjectName": "Business and Communicative English Lab",
                "subjectCredit": 1,
                "beforeFinalMarks": 34.5,
                "finalMarks": "22.0",
                "totalMarks": "57.0",
                "letterGrade": "B-",
                "gpa": "2.75",
                "theory": false,
                "lab": true
              }
            }
          ]
        },
        {
          "mainSubjectName": "Natural Textile Fibres",
          "subjectId": 30,
          "subjectCode": "YE 101",
          "partialSubjects": [],
          "finalSubjectTabulationSheetDTO": {
            "subjectId": 30,
            "subjectCode": "YE 101",
            "subjectOBECode": "YE 101-0723",
            "subjectName": "Natural Textile Fibres",
            "subjectCredit": 3,
            "beforeFinalMarks": 30,
            "finalMarks": "78.0",
            "totalMarks": "108.0",
            "letterGrade": "A-",
            "gpa": "3.5",
            "partAMarks": 39,
            "partBMarks": 39,
            "theory": true,
            "lab": false
          }
        }
      ]
    },
  ]

}
