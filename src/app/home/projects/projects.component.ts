import { Component } from '@angular/core';
import { projectGroups } from '../portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly groups = projectGroups;
}
