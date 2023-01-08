import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Company } from '../utils/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  add(a,b){
    return a+b;
  }

  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('token', 'Bearer sdjhvehfdvberfvnl')

  

  getCompanyDetails(): Observable<Company>{
    return this.http.get<Company>('/assets/company.json');
  }

  getPersonalDetails(){
    return this.http.get('/assets/100k.json');
  }
}
