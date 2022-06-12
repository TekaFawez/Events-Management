import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaintenanceErrorComponent } from './maintenance-error/maintenance-error.component';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';
import { SidemenueComponent } from './admin-page/admin-page/sidemenue/sidemenue.component';
import { AdminHeaderComponent } from './admin-page/admin-page/admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './admin-page/admin-page/users/add-user/add-user.component';
import { UsersListComponent } from './admin-page/admin-page/users/users-list/users-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [

    NotFoundComponent,
    UsersListComponent,
    AddUserComponent,
    LoginComponent,
    RegisterComponent,
    MaintenanceErrorComponent,
    AdminPageComponent,
    SidemenueComponent,
    AdminHeaderComponent,
    ContactUsComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
ReactiveFormsModule,


  ]
})
export class PagesModule { }
