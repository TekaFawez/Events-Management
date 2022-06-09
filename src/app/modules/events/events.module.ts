import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './components/add-list/add-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';

export const routes: Routes = [
  {
     path: '',
     component: EventsComponent
  },
//   {
//     path: '',
//     component: AddListComponent,
//  }
]

@NgModule({
  declarations: [
    EventsListComponent,
    AddListComponent,
    EventsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
ReactiveFormsModule,
  ]
})
export class EventsModule { }
