import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from '../navigationbar/navigationbar.component';
import { HeropageComponent } from '../heropage/heropage.component';
import { OurCoursesComponent } from '../our-courses/our-courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationbarComponent, HeropageComponent, OurCoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
