import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  result;
  constructor(private service: TestService) { }

  ngOnInit(): void {
  }
   
  total(a,b){
    console.log("a,b", a.value,b.value);
    console.log("sum is:",parseInt(a.value) + parseInt(b.value))
   this.result = this.service.add(parseInt(a.value) , parseInt(b.value));

   console.log("result is-->", this.result);
  }
}
