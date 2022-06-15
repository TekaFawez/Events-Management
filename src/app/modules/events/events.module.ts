import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './components/add-list/add-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
;import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {MatSortModule} from '@angular/material/sort';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    EventsComponent,


  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
ReactiveFormsModule,
MatTableModule,
MatPaginatorModule,
MatFormFieldModule,
MatInputModule,

MatSortModule



  ]
})
export class EventsModule { }
