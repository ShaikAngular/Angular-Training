import { Component, OnInit } from '@angular/core';
import {TestService} from './services/test.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title : String = 'demo1';

  constructor( private service: TestService){

  }
  ngOnInit(): void {
   this.test();
  }
  
  test(){
    console.log("output", this.service.add(2,7));
    
  }
}
