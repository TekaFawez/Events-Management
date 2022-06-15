import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({//formbuilder service use and send to formControlName
      name: ['', Validators.required],
      email: ['', Validators.required],
      object: ['', Validators.required],
      msg: ['', [Validators.required]],
    });
  }

}
