import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricingpageComponent } from './pricingpage/pricingpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "courses", component: CoursePageComponent },
  { path: "about-us", component: AboutUsComponent },
  {path:'pricing', component: PricingpageComponent}
];
