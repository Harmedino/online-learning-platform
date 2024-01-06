import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CoursePageComponent } from './course-page/course-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"courses", component: CoursePageComponent}
];
