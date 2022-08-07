import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsModule } from './events/events.module';
import { AttendeesModule } from './attendees/attendees.module';
import { HomeModule } from './home/home.module';
import {MatSortModule} from '@angular/material/sort';
// import {MatPaginatorModule} from '@angular/material/paginator';
import { EventsComponent } from './events/components/events/events.component';
import { MatTableModule } from '@angular/material/table';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';





@NgModule({
  declarations: [],
  imports: [
    HomeModule,

    AttendeesModule,
    EventsModule,
    CommonModule,
    MatSortModule,
    MatTableModule,
    AccordionModule,
    ToastModule



  ],
  entryComponents: [EventsComponent],
  providers: [MessageService]

})
export class ModulesModule { }
