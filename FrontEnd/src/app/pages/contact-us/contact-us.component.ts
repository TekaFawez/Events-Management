import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/https/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!:FormGroup
  constructor(private formBuilder: FormBuilder, private contactServ: ContactService,) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({//formbuilder service use and send to formControlName
      name: ['', Validators.required],
      emailHost: ["tekafawez@gmail.com", Validators.required],

      email: ['', Validators.required],
      sujet: ['', Validators.required],
      message: ['', [Validators.required]],
    });
  }
  sendMail() {
    this.contactServ.sendMail(this.contactForm.value).subscribe((res) => {

      this.contactForm.setValue({
        email: "",
        name: "",
        emailHost: "tekafawez@gmail.com",
        message: "",
        sujet: "",
      });
    });
  }

}
