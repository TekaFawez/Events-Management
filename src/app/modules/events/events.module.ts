import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
     path: '',
     component: EventsListComponent
  }
]

@NgModule({
  declarations: [
    EventsListComponent
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class EventsModule { }
