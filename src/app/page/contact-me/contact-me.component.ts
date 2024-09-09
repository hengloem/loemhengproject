import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '@app/core/services/contact.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactData = { name: '', email: '', subject: '', message: '' };
  responseMessage: string;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.sendContactForm(this.contactData).subscribe(
      response => {
        this.responseMessage = 'Email sent successfully!';
      },
      error => {
        this.responseMessage = 'Failed to send email.';
      }
    );
  }
}
