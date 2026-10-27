import { Component } from '@angular/core';
import { footerLinks, profile, socialLinks } from '../portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly profile = profile;
  readonly links = footerLinks;
  readonly socials = socialLinks;
  readonly currentYear = new Date().getFullYear();
}
