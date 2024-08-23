import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  // userForm: FormGroup = this.fb.group({

  // })


  // courseOutcomes = [
  //   { id: 1, name: 'CO1' },
  //   { id: 2, name: 'CO2' },
  //   { id: 3, name: 'CO3' }
  // ];

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.userForm = this.fb.group({
  //     users: this.fb.array([this.createUser()])
  //   });
  // }

  // get users(): FormArray {
  //   return this.userForm.get('users') as FormArray;
  // }

  // createUser(): FormGroup {
  //   return this.fb.group({
  //     courseOutcomeTemplateId: ['', Validators.required]
  //   });
  // }

  // addUser(): void {
  //   this.users.push(this.createUser());
  // }

  // removeUser(index: number): void {
  //   this.users.removeAt(index);
  // }

  // onSubmit(): void {
  //   console.log(this.userForm.value);
  //   // Handle form submission logic here
  // }

  userForm: FormGroup = this.fb.group({})


  exampleData = [
    {
      courseOutcomeTemplateId: 1,
      programOutcomeTemplateId: 2,
      knowledgeProfileId: 3,
      complexEngineeringProblemId: 1,
      complexEngineeringActivityId: 2,
      taxonomyId: 1,
      subDomainId: 1
    },
    //   {
    //     "courseOutcomeTemplateId": 1,
    //     "programOutcomeTemplateId": 4,
    //     "knowledgeProfileId": 1,
    //     "complexEngineeringProblemId": 1,
    //     "complexEngineeringActivityId": 1,
    //     "taxonomyId": 1,
    //     "subDomainTaxonomyId": 1
    // },
  ];

  courseOutcomes = [
    { id: 1, name: 'CO1' },
    { id: 2, name: 'CO2' },
    { id: 3, name: 'CO3' }
  ];

  programOutcomes = [
    { id: 1, name: 'PO1' },
    { id: 2, name: 'PO2' },
    { id: 3, name: 'PO3' }
  ];

  knowledgeProfiles = [
    { id: 1, name: 'KP1' },
    { id: 2, name: 'KP2' },
    { id: 3, name: 'KP3' }
  ];

  complexEngineeringProblems = [
    { id: 1, name: 'CEP1' },
    { id: 2, name: 'CEP2' },
    { id: 3, name: 'CEP3' }
  ];

  complexEngineeringActivities = [
    { id: 1, name: 'CEA1' },
    { id: 2, name: 'CEA2' },
    { id: 3, name: 'CEA3' }
  ];

  bloomDomains = [
    { id: 1, name: 'BD1' },
    { id: 2, name: 'BD2' },
    { id: 3, name: 'BD3' }
  ];

  subDomains = [
    { id: 1, name: 'SD1' },
    { id: 2, name: 'SD2' },
    { id: 3, name: 'SD3' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      users: this.fb.array([this.createUser()])
    });


    this.prefillForm(this.exampleData);
  }


  prefillForm(data: any[]): void {
    // Clear existing form array
    while (this.users.length) {
      this.users.removeAt(0);
    }

    // Add new rows based on the data
    data.forEach(item => {
      this.users.push(this.fb.group({
        courseOutcomeTemplateId: [item.courseOutcomeTemplateId, Validators.required],
        programOutcomeTemplateId: [item.programOutcomeTemplateId, Validators.required],
        knowledgeProfileId: [item.knowledgeProfileId, Validators.required],
        complexEngineeringProblemId: [item.complexEngineeringProblemId, Validators.required],
        complexEngineeringActivityId: [item.complexEngineeringActivityId, Validators.required],
        taxonomyId: [item.taxonomyId, Validators.required],
        subDomainId: [item.subDomainId, Validators.required]
      }));
    });
  }




  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  createUser(): FormGroup {
    return this.fb.group({
      courseOutcomeTemplateId: ['', Validators.required],
      programOutcomeTemplateId: ['', Validators.required],
      knowledgeProfileId: ['', Validators.required],
      complexEngineeringProblemId: ['', Validators.required],
      complexEngineeringActivityId: ['', Validators.required],
      taxonomyId: ['', Validators.required],
      subDomainId: ['', Validators.required]
    });
  }

  addUser(): void {
    this.users.push(this.createUser());
  }

  removeUser(index: number): void {
    this.users.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.userForm.value);
    // Handle form submission logic here
  }
}
