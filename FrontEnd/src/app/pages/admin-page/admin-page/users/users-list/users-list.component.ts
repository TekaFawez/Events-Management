import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
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
,    private messageService: MessageService,
private confirmationService: ConfirmationService,
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
    this.confirmationService.confirm({
      message: 'Do you want to Delete this User?',
      header: 'Delete User',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {


    this.userService.deleteUser(eventid).subscribe(()=>{
      this.getUsers()
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User is deleted!'
      });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'User is not deleted!'
      });
    }
  );
}
});
}


  }
