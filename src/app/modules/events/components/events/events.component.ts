import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/https/events.service';
import { EventModel } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events : EventModel[]=[];

  constructor(private eventsService:EventService) { }

  ngOnInit(): void {
    this.getEvents()

  }
  getEvents(){
    this.eventsService.getAllEvents().subscribe((res)=>{
     console.log(res)
     this.events=res;
    })

  }
}
