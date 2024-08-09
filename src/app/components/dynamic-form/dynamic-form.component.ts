import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
export interface FormField {
  key: string;
  label: string;
  type: string;
  validators?: any[];
  value?: any;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {

  form: FormGroup;

  // Simulating fetching existing data
  existingData = {
    modules: [
      {
        "id": 1,
        "module": "Module 1",
        "lectures": [
          {
            "id": 1,
            "lecture": "Lecture one",
            "description": "Course Learning Outcome 1"
          },
          {
            "id": 1,
            "lecture": "Lecture two",
            "description": "Course Learning Outcome 2"
          }
        ]
      },
      {
        "id": 1,
        "module": "Module 2",
        "lectures": [
          {
            "id": 1,
            "lecture": "Lecture three",
            "description": "Course Learning Outcome 1"
          },
          {
            "id": 1,
            "lecture": "Lecture four",
            "description": "Course Learning Outcome 2"
          }
        ]
      }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      modules: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.prefillForm(this.existingData);
  }

  // Function to create a new module FormGroup with a lectures FormArray
  createModule(moduleData?: any): FormGroup {
    return this.fb.group({
      id: [moduleData?.id || null],
      module: [moduleData?.module || ''],
      lectures: this.fb.array(
        moduleData?.lectures?.map((lecture: any) => this.createLecture(lecture)) || [this.createLecture()]
      )
    });
  }

  // Function to create a new lecture FormGroup with a description field
  createLecture(lectureData?: any): FormGroup {
    return this.fb.group({
      id: [lectureData?.id || null],
      lecture: [lectureData?.lecture || ''],
      description: [lectureData?.description || '']
    });
  }

  // Getter for modules FormArray
  get modules(): FormArray {
    return this.form.get('modules') as FormArray;
  }

  // Function to add a new module to the FormArray
  addModule(moduleData?: any) {
    this.modules.push(this.createModule(moduleData));
  }

  // Function to remove a module from the FormArray
  removeModule(index: number) {
    this.modules.removeAt(index);
  }

  // Function to add a new lecture to a specific module's lectures FormArray
  addLecture(moduleIndex: number, lectureData?: any) {
    const lectures = this.getLectures(moduleIndex);
    lectures.push(this.createLecture(lectureData));
  }

  // Function to remove a lecture from a specific module's lectures FormArray
  removeLecture(moduleIndex: number, lectureIndex: number) {
    const lectures = this.getLectures(moduleIndex);
    lectures.removeAt(lectureIndex);
  }

  // Getter for a module's lectures FormArray
  getLectures(moduleIndex: number): FormArray {
    return this.modules.at(moduleIndex).get('lectures') as FormArray;
  }

  // Function to prefill the form with existing data
  prefillForm(data: any) {
    data.modules.forEach((module: any) => {
      this.addModule(module);
    });
  }

  // Function to handle form submission
  onSubmit() {
    console.log(this.form.value);
    // Perform the update operation here (e.g., send the updated data to a server)
  }
}
