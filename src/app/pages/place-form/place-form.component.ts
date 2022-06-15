import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventModel } from 'src/app/core/models/event.model';
// import { ActivatedRoute } from '@angular/router';
// import { EventService } from 'src/app/core/https/events.service';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit {
  eventForm!: FormGroup;
  currentUserId?: string;
  editmode=true;
  nbPlace?:number

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private formBuilder: FormBuilder,
  //  private dialogRef:MatDialogRef<PlaceFormComponent>,
  //  private route: ActivatedRoute,
  //  private eventsService:EventService
   ) { }

  ngOnInit(): void {

    this.eventForm = this.formBuilder.group({//formbuilder service use and send to formControlName
      name: ['', Validators.required],

      place: ['', Validators.required],
      nbPlace: ['', Validators.required]
    });
    if(this.data){
      this.eventForm.controls['name'].setValue(this.data.name)
      this.eventForm.controls['place'].setValue(this.data.place)
    }
  }
  takePlace(){
    const evnt : EventModel= {


      place: this.eventsForm['place'].value}


  }

  get eventsForm() {
    return this.eventForm.controls;
  }

}
