import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/https/user.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users : UserModel[]=[];
  constructor(private userService:UserService,
    private router:Router

    ) { }

  ngOnInit(): void {
    this.getUsers()

  }
  getUsers(){
    this.userService.getAllUsers().subscribe((res)=>{
     console.log(res)
     this.users=res;
    })

  }
  updateUser(eventid: any) {

    this.router.navigateByUrl(`add-user/${eventid}`)
  }
  deleteUser(eventid:any){


    this.userService.deleteUser(eventid).subscribe(()=>{
      this.getUsers()
      })
  }

  }
