import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { AboutComponent } from "./about/about.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BannerComponent, AboutComponent, EducationComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
