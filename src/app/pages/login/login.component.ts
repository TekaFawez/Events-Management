import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder,) { }

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
  }
  get loginForm() {
    return this.loginFormGroup.controls;
  }

}
