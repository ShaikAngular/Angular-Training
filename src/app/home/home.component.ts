import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  demoForm:FormGroup;
  result;
  constructor(private fb: FormBuilder, private service: TestService) { 
    this.demoForm = this.fb.group({
      firstNumber:[''],
      secondNumber:['']
    })
   }

  ngOnInit(): void {
  }

  total(){
    ///console.log("form data", this.demoForm.value.firstNumber, this.demoForm.value.secondNumber);
    //console.log("type of", typeof(this.demoForm.value.firstNumber));
    if(this.demoForm && this.demoForm.value && this.demoForm.value.firstNumber && this.demoForm.value.secondNumber){
      this.result = this.service.add(this.demoForm.value.firstNumber, this.demoForm.value.secondNumber);
      console.log("result is--->", this.result);
    }
    
  }



}
