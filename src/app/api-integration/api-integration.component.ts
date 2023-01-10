import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable, tap } from 'rxjs';
import { TestService } from '../services/test.service';
import { Company } from '../utils/company';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 25;
  tableSizes: any = [3, 6, 9, 12];

  employeeList;
  personList;
  DOB = new Date();
  salary = 23456;
  filterArr=[];
  constructor(private service: TestService) { }

  ngOnInit(): void {
   // console.log('api',this.service.getCompanyDetails().subscribe());
    this.companyDetails();
    this.personDetails();
    this.companyDetails1();
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

  companyDetails1():void{
    const observable2$:any = this.service.getCompanyDetails()
    .pipe(
     // tap(x=>console.log(x)),
      
       //filter((person)=>person.age>30)
      map((res:any)=>res.filter(data=>data.age>=50))
    ).subscribe(
      (result1:Company)=>{
        console.log('result filter-->', result1);
        //this.employeeList = result;
        // this.filterArr=[...this.filterArr,result1];
        // console.log(' this.filterArr$',  this.filterArr);
      }
    );
    console.log('observable2$', observable2$);
    

    // observable2$.subscribe(
    //   (result1:Company)=>{
    //     console.log('result filter-->', result1);
    //     //this.employeeList = result;
    //   }
    // );
  }

  personDetails(): void{
    this.service.getPersonalDetails().subscribe(
      result1=>{
        console.log('personal details', result1);
        this.personList = result1;
      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    //this.companyDetails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    //this.companyDetails();
  }

}
