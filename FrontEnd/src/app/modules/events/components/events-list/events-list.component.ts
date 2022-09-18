import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EventService } from 'src/app/core/https/events.service';
import { EventModel } from 'src/app/core/models/event.model';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events : EventModel[]=[];

  constructor(private eventsService:EventService,
     private router:Router,    private messageService:MessageService,
     private confirmationService: ConfirmationService,

    ) {

  }


  ngOnInit(): void {
    this.getEvents()


  }
  getEvents(){
    this.eventsService.getAllEvents().subscribe((eventlist)=>{
     console.log(eventlist)
     this.events=eventlist;
    })

  }
  updateEvent(eventid?: string) {
    this.router.navigateByUrl(`add-event/${eventid}`)

  }
  deletEvent(eventid: any) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Event?',
      header: 'Delete User',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {


    this.eventsService.deleteEvent(eventid).subscribe(()=>{
     this.getEvents()
     this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Event is deleted!'
    });
  },
  () => {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Event is not deleted!'
    });
  }
);
}
});

}
}
