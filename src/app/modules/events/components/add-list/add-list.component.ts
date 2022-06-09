import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/core/https/events.service';
import { EventModel } from 'src/app/core/models/event.model';
// import { EventsModule } from '../../events.module';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  eventForm!: FormGroup;
 newEvent= new EventModel();
 isSubmitted=false;
 editmode=false;
 currentUserId?: string;

  constructor(private eventsService:EventService,private router:Router , private formBuilder: FormBuilder,
    private route: ActivatedRoute ) //activateRoute to know there are parametre in url or not
     { }

  ngOnInit(): void {
    this._checkEditMode();


    this.eventForm = this.formBuilder.group({//formbuilder service use and send to formControlName
      id: ['', Validators.required],
      name: ['', Validators.required],
      place: ['', Validators.required]
    });
  }


  onSubmit(){
    this.isSubmitted = true;
    if (this.eventForm.invalid) {
      return;
    }
    const evnt : EventModel= {

      id: this.eventsForm['id'].value,
      name : this.eventsForm['name'].value,
      place: this.eventsForm['place'].value

    }
    if(this.editmode){
      this.updateEvent(evnt)

    }else { this.creatEvent(evnt)

    }
  }
    creatEvent(evnt:EventModel){
    this.eventsService.postEvent(evnt).subscribe(()=>{

      this.router.navigate(['admin/events']);

    },
    (error)=>{
      console.log(error);
    }
    )


  }
  updateEvent(evnt:EventModel){

    this.eventsService.updateEvent(evnt).subscribe(()=>{

      this.router.navigate(['admin/events']);

    },
    (error)=>{
      console.log(error);
    }
    )


  }



  private _checkEditMode() { //if there add-event and / id then we are in editmod
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;

        this.currentUserId = params['id'];
        this.eventsService.getEvent(params['id']).subscribe((event) => {
          this.eventsForm['id'].setValue(event.id)
          // this.eventsForm['id'].setValue(event.id);
          this.eventsForm['name'].setValue(event.name);
          this.eventsForm['place'].setValue(event.place);

        });
      }
    });
  }

  get eventsForm() {
    return this.eventForm.controls;
  }

}
