import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './components/add-list/add-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  // {
  //    path: '',
  //    component: EventsListComponent
  // },
//   {
//     path: '',
//     component: AddListComponent,
//  }
]

@NgModule({
  declarations: [
    EventsListComponent,
    AddListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
ReactiveFormsModule,
  ]
})
export class EventsModule { }
