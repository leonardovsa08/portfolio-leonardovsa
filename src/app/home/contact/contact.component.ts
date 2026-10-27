import { Component } from '@angular/core';
import { profile } from '../portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly profile = profile;
}
