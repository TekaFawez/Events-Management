import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsModule } from './events/events.module';
import { AttendeesModule } from './attendees/attendees.module';



@NgModule({
  declarations: [],
  imports: [
    AttendeesModule,
    EventsModule,
    CommonModule
  ]
})
export class ModulesModule { }
