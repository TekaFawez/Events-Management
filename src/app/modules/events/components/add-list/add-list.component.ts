import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  eventForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  addEvent(){

  }

}
