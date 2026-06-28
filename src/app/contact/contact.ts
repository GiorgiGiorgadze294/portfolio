import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  socialLinks = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      url: 'https://www.facebook.com/profile.php?id=61569873867530'
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/GiorgiGiorgadze294'
    },
  ];

  contactInfo = {
    phone: '+995 599-396-381',
    email: 'webmaker897@gmail.com',
    location: 'Tbilisi, Georgia'
  };
}