import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // data: any = [
  //   {
  //     courseOutcomes: [{ id: 1, name: 'CO1', value: 1 }, { id: 2, name: 'CO2', value: 2 }, { id: 3, name: 'CO3', value: 3 }],
  //     programOutcomes: [{ id: 1, name: 'PO1' }],
  //   },
  //   {
  //     courseOutcomes: [{ id: 1, name: 'CO1', value: 1 }, { id: 2, name: 'CO2', value: 2 }, { id: 3, name: 'CO3', value: 3 }],
  //     programOutcomes: [{ id: 2, name: 'PO2' }],
  //   },
  // ];

  data = [
    {
      courseOutcomes: [{ id: 1, name: 'CO1', value: 1 }, { id: 2, name: 'CO2', value: 2 }, { id: 3, name: 'CO3', value: 3 }],
      programOutcomes: [{ id: 1, name: 'PO1' }],
    },
    {
      courseOutcomes: [{ id: 1, name: 'CO1', value: 1 }, { id: 2, name: 'CO2', value: 2 }, { id: 3, name: 'CO3', value: 3 }],
      programOutcomes: [{ id: 2, name: 'PO2' }],
    },
  ];
  onSubmit() {
    console.log(this.data);
    // You can process the data here or send it to a server
  }


}
