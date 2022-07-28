import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsModule } from './events/events.module';
import { AttendeesModule } from './attendees/attendees.module';
import { HomeModule } from './home/home.module';
import {MatSortModule} from '@angular/material/sort';
// import {MatPaginatorModule} from '@angular/material/paginator';
import { EventsComponent } from './events/components/events/events.component';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [],
  imports: [
    HomeModule,

    AttendeesModule,
    EventsModule,
    CommonModule,
    MatSortModule,
    MatTableModule



  ],
  entryComponents: [EventsComponent]
})
export class ModulesModule { }
