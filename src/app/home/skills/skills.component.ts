import { Component } from '@angular/core';
import { skills } from '../portfolio.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly skills = skills;
}
