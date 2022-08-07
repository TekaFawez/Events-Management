import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

export const routes: Routes = [
  {
     path: '',
     component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AccordionModule,
    ToastModule
  ]
})
export class HomeModule { }
