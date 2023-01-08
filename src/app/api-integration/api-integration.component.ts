import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Company } from '../utils/company';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  employeeList;
  personList;
  DOB = new Date();
  salary = 23456;
  constructor(private service: TestService) { }

  ngOnInit(): void {
   // console.log('api',this.service.getCompanyDetails().subscribe());
    this.companyDetails();
    this.personDetails();
   
  }

  companyDetails(): void{
    const observable1$ = this.service.getCompanyDetails().subscribe(
      result=>{
        console.log('result-->', result);
        this.employeeList = result;
      }
    );
    
    console.log('observable1$', observable1$);
  }

  personDetails(): void{
    this.service.getPersonalDetails().subscribe(
      result1=>{
        console.log('personal details', result1);
        this.personList = result1;
      }
    );

  }

}
