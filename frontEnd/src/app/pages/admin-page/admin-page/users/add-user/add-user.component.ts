import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

import { UserService } from 'src/app/core/https/user.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  newuser= new UserModel();
  isSubmitted=false;
  editmode=false;
  currentUserId?: string;
  constructor(private usersService:UserService,private router:Router , private formBuilder: FormBuilder,
    private route: ActivatedRoute ,    private messageService: MessageService,    private location: Location,

    ) //activateRoute to know there are parametre in url or not
    { }

  ngOnInit(): void {
    this._checkEditMode();

    this.userForm = this.formBuilder.group({//formbuilder service use and send to formControlName

      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isAdmin: [false],

    });
  }
  onSubmit(){
    this.isSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }
    const user : UserModel= {



      id: this.currentUserId,
      name: this.usersForm['name'].value,
      email: this.usersForm['email'].value,
      password:this.usersForm['password'].value,
      isAdmin: this.usersForm['isAdmin'].value,


    }
    if(this.editmode){
      this.updateUser(user)

    }else { this.creatUser(user)

    }
  }

  creatUser(user:UserModel){
    this.usersService.postUser(user).subscribe(()=>{

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User ${user.name} is created!`
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'User is not created!'
      });
    }
    )


  }
  updateUser(user:UserModel){

    this.usersService.updateUser(user).subscribe(()=>{

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User is updated!'
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'User is not updated!'
      });
    }
    )


  }

  private _checkEditMode() { //if there /add-user:id then we are in editmod
    this.route.params.subscribe((params) => {
      if (params['id'])//this ['id'] from routes when we clic on update
       {
        this.editmode = true;

        this.currentUserId = params['id'];
        this.usersService.getUser(params['id']).subscribe((user) => {
          this.usersForm['name'].setValue(user.name);
          this.usersForm['email'].setValue(user.email);
          this.usersForm['isAdmin'].setValue(user.isAdmin);
          this.usersForm['password'].setValidators([]);
          this.usersForm['password'].updateValueAndValidity();

        });
      }
    });
  }

  get usersForm() {
    return this.userForm.controls;
  }
}
