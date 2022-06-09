import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EventService } from 'src/app/core/https/events.service';
import { EventModel } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events : EventModel[]=[];

  constructor(private eventsService:EventService, private route:Router ) {

  }


  ngOnInit(): void {
    this.getEvents()


  }
  getEvents(){
    this.eventsService.getAllEvents().subscribe((res)=>{
     console.log(res)
     this.events=res;
    })

  }
  updateEvent(eventid?: string) {
    this.route.navigateByUrl(`add-event/${eventid}`)

  }
  deletEvent(eventid: any) {

    this.eventsService.deleteEvent(eventid).subscribe(()=>{
     this.getEvents()
     })


  }


}
