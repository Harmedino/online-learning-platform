import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../home/footer/footer.component';
import { NavigationbarComponent } from '../home/navigationbar/navigationbar.component';

@Component({
  selector: 'app-pricingpage',
  standalone: true,
  imports: [CommonModule,
    FooterComponent,
  NavigationbarComponent],
  templateUrl: './pricingpage.component.html',
  styleUrl: './pricingpage.component.css'
})
export class PricingpageComponent {

}
