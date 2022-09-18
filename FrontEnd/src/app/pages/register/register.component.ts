import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/https/user.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm!:FormGroup
  newuser= new UserModel();
  isSubmitted=false;
  editmode=false;
  currentUserId?: string;
  constructor(private usersService:UserService,private router:Router , private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({//formbuilder service use and send to formControlName
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }
    const user : UserModel= {



      // id: this.usersForm['id'].value,
      name: this.usersForm['name'].value,
      email: this.usersForm['email'].value,
      password:this.usersForm['password'].value,

    }
    this.creatUser(user)

  }
  creatUser(user:UserModel){
    this.usersService.postUser(user).subscribe(()=>{

      this.router.navigate(['/login']);

    },
    (error)=>{
      console.log(error);
    }
    )


  }






  get usersForm() {
    return this.userForm.controls;
  }

}
