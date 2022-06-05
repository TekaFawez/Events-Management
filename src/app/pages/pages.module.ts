import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaintenanceErrorComponent } from './maintenance-error/maintenance-error.component';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MaintenanceErrorComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class PagesModule { }
