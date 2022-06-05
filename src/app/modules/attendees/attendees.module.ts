import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesListComponent } from './components/attendees-list/attendees-list.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
     path: '',
     component: AttendeesListComponent
  }
]

@NgModule({
  declarations: [    
    AttendeesListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AttendeesModule { }
