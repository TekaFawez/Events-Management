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



@NgModule({
  declarations: [

    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MaintenanceErrorComponent,
    AdminPageComponent,
    SidemenueComponent,
    AdminHeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class PagesModule { }
