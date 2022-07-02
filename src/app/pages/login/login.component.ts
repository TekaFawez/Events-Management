import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/https/auth.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted = false;
  authError = false;


  authMessage = 'Email or Password are wrong';
  constructor(private formBuilder: FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this._initForm();
  }


  private _initForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit(){

    this.isSubmitted = true;
    if(this.loginFormGroup.invalid) return;

    this.auth.login( this.loginForm['email'].value,this.loginForm['password'].value).subscribe(
      (user)=>{
        console.log(user)
        this.authError = false;
        localStorage.setItem("role","user")
        this.router.navigate(['/event-user']);



      },
      (error: HttpErrorResponse) => {
        this.authError = true;
        if (error.status !== 400) {
          this.authMessage = 'Error in the Server, please try again later!';
        }
      }

      );


  }
  get loginForm() {
    return this.loginFormGroup.controls;
  }

}
