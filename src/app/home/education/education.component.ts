import { Component } from '@angular/core';
import { education } from '../portfolio.data';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  readonly items = education;
}
