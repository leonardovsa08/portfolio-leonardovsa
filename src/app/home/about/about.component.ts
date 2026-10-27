import { Component } from '@angular/core';
import { aboutMoments } from '../portfolio.data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly moments = aboutMoments;
}
