import { Component } from '@angular/core';
import { experiences } from '../portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly experiences = experiences;
}
