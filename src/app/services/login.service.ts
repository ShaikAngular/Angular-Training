import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';
import { Login } from '../utils/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getDetials(){
    return this.http.get<Login>('/Login-Details').pipe(
      tap(response=>console.log('response-->', response))
    )
  }
}
