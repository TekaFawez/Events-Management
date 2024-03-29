import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { EventService } from 'src/app/core/https/events.service';
import { TakedPlaceService } from 'src/app/core/https/taked-place.service';

import { EventModel } from 'src/app/core/models/event.model';
import { TakePlaceModels } from 'src/app/core/models/take-place.model';
// import { ActivatedRoute } from '@angular/router';
// import { EventService } from 'src/app/core/https/events.service';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit , OnChanges {
  endSubs$: Subject<any> = new Subject();
event!: EventModel;
place!:TakePlaceModels;
  // event!:EventModel
  eventForm!: FormGroup;
  currentUserId?: string;
  editmode=true;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private formBuilder: FormBuilder,
   private takePlaceService:TakedPlaceService,
   private dialogRef:MatDialogRef<PlaceFormComponent>,
   private router: Router,
    private eventsService:EventService,
    private messageService: MessageService
   ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

    throw new Error('Method not implemented.');

  }

  ngOnInit(): void {

    this.eventForm = this.formBuilder.group({//formbuilder service use and send to formControlName
      id: ['', Validators.required],
      name: ['', Validators.required],

      place: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],

      nbPlace:['',Validators.required],
      event_ID:['',Validators.required],

    });
    if(this.data){
      this.eventsForm['id'].setValue(this.data.id)

      this.eventsForm['event_ID'].setValue(this.data.id)
      this.eventsForm['name'].setValue(this.data.name)
      this.eventsForm['place'].setValue(this.data.place)
      this.eventsForm['price'].setValue(this.data.price),
      this.eventsForm['date'].setValue(this.data.date)

    }
  }



savee(){
  if(this.eventForm.invalid){
    return
  }
  const event : EventModel= {//send this object to the service
    place: this.eventsForm['place'].value,
    id: this.eventsForm['id'].value,
    name: this.eventsForm['name'].value,
    date: this.eventsForm['date'].value,
    price: this.eventsForm['price'].value,
  }

  const place :TakePlaceModels={
    nbPlace: this.eventsForm['nbPlace'].value,
    event_ID: this.eventsForm['event_ID'].value,


  }
  if(place.nbPlace!>event.place! ){
    alert("nombres des places insuffisantes ")
    this.dialogRef.close()
  return;
  }
  this.creatPlace(place,event)
  console.log(event.place)
  if(event.place&&place.nbPlace){
    event.place=event.place-place.nbPlace;

  }


event.id=event.id
event.name=event.name
event.price=event.price
event.date=event.date
place.event_ID=event.id



  this.updateEvent(event)
  // this.dialogRef.close()


  this.router.navigate(['event-user']);
  this.eventsService.getAllEvents().subscribe();
}
private creatPlace(place:TakePlaceModels,event:EventModel){


  this.takePlaceService.postPlace(place).subscribe (response=>{
    this.messageService.add({
      severity:'success',
       summary:'success ',
       detail:'place  is added '
      });
console.log(this.messageService)


  },
  (error)=>{
    console.log(error);
  }
  )



}

updateEvent(evnt:any){

  this.eventsService.updatePlaceEvent(evnt,this.data.id).subscribe(()=>{



    this.router.navigate(['event-user']);

  },
  (error)=>{
    console.log(error);
  }
  )


}


  get eventsForm() {
    return this.eventForm.controls;
  }

}
