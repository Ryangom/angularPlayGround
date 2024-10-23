import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      feedback: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      console.log('Form Submitted:', {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        ...this.thirdFormGroup.value,
      });
    }
  }
  currentStep: number = 1;
  nextStep() {
    if (this.currentStep === 1 && this.firstFormGroup.valid) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.secondFormGroup.valid) {
      this.currentStep++;
    }
  }

}
