import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from '../home/navigationbar/navigationbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CourseHeroComponent } from '../coursePage/course-hero/course-hero.component';
import { CurriculumComponent } from '../coursePage/curriculum/curriculum.component';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule,
    NavigationbarComponent,
    FooterComponent,
    CourseHeroComponent,
  CurriculumComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

}
