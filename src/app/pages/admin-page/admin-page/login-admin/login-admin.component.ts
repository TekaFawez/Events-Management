import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/https/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

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


      },

    );
    this.router.navigate(['admin']);

  }
  get loginForm() {
    return this.loginFormGroup.controls;
  }

}
