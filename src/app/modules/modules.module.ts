import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsModule } from './events/events.module';
import { AttendeesModule } from './attendees/attendees.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule,

    AttendeesModule,
    EventsModule,
    CommonModule
  ]
})
export class ModulesModule { }
