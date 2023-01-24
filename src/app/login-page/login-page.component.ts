import { Component, OnInit, VERSION  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { Login } from '../utils/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  apiResponse : any;
  apiUsername;
  apiPassword;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getDetials().pipe(
      
    ).subscribe(
      (response:any)=>{
      console.log('from ts',response)
      const a = response.map(
        b=>b.username
      );

      const p = response.map(
        b1=>b1.password
      );
      this.apiUsername = a;
      this.apiPassword = p;
      console.log(a,p)
      this.apiResponse =response
      console.log('API Response', this.apiResponse);
      }
    );

    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required,
        Validators.pattern(
          "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
        )
      ]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    
    //console.log(this.loginForm.value);
    this.submitted = true;
    // this.loginForm.valid
    if(this.apiUsername.includes(this.loginForm.value.username) && this.apiPassword.includes(this.loginForm.value.password) ){
      console.log('success',this.loginForm.value);
      // localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
       this.router.navigate(["/about"]);
    } else{
      window.alert("credentials not matched")
    }

    // if ( this.loginForm.value.username==this.apiUsername && this.loginForm.value.password==this.apiPassword ) {
    //   console.log('success',this.loginForm.value);
    //   localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
    //   this.router.navigate(["/about"]);
    // } else{
    //   window.alert("credentials not matched")
    // }
  }
}
