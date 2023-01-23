import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field-generation',
  templateUrl: './dynamic-field-generation.component.html',
  styleUrls: ['./dynamic-field-generation.component.scss']
})
export class DynamicFieldGenerationComponent implements OnInit {
  SimpleForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.SimpleForm = new FormGroup({
      'hobbies': new FormArray([])
    });

    this.SimpleForm.setValue({
      'hobbies':[]
    });

    
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.SimpleForm.get('hobbies')).push(control);
  }

}
