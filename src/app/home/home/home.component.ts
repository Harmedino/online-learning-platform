import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from '../navigationbar/navigationbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
