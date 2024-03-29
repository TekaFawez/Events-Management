// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventService } from './core/https/events.service';
import { LayoutsModule } from './layouts/layouts.module';
import { ModulesModule } from './modules/modules.module';

import { PagesModule } from './pages/pages.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PlaceFormComponent } from './pages/place-form/place-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { JwtInterceptor } from './core/https/jwt.interceptor';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { MessageService } from 'primeng/api';

import { ToastModule } from 'primeng/toast';
import { BorderCaderDirective } from './border-cader.directive';







//import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceFormComponent,
    // BorderCaderDirective,




  ],
  imports: [
    RoutesModule,
    CoreModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    LayoutsModule,
    ModulesModule,
    PagesModule,
    SharedModule,
    BrowserModule,
    AccordionModule,


    ToastModule,

    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,



//     FormsModule,
// ReactiveFormsModule,
FormsModule,
ReactiveFormsModule,
HttpClientModule,



  ],
  exports:[LayoutsModule],
  providers: [EventService, MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],


})
export class AppModule { }
