import { Component } from '@angular/core';
import { profile } from '../portfolio.data';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  readonly profile = profile;
}
