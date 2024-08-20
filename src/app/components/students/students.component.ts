import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  programOutcomes = [
    { programOutcomeTemplateId: 1, name: 'PLO1' },
    { programOutcomeTemplateId: 2, name: 'PLO2' },
    { programOutcomeTemplateId: 3, name: 'PLO3' }
  ];

  courseOutcome = [
    { id: 1, name: 'CLO1' },
    { id: 2, name: 'CLO2' },
    { id: 3, name: 'CLO2' },
  ];

  // Object to store selected values
  selectedValues: { [programId: number]: { [courseId: number]: string } } = {};

  // Method to handle form submission
  onSubmit() {
    // Transform selectedValues into the required structure
    const transformedData = this.programOutcomes.map(program => {
      return {
        programOutcomeTemplateId: program.programOutcomeTemplateId,
        name: program.name,
        courseOutComes: this.courseOutcome.map(course => {
          return {
            courseOutcomeChildTemplate: course.id,
            correlation: this.selectedValues[program.programOutcomeTemplateId]?.[course.id] || null
          };
        }).filter(courseOutcome => courseOutcome.correlation !== null)
      };
    });

    console.log('Transformed Data:', transformedData);
    // Send transformedData to the server
    // this.myService.sendData(transformedData).subscribe(response => { ... });
  }

  // Method to update the selected value
  updateSelection(programId: number, courseId: number, event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      if (!this.selectedValues[programId]) {
        this.selectedValues[programId] = {};
      }
      this.selectedValues[programId][courseId] = target.value;
    }
  }
}
