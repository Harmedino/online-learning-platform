import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  activeTab: 'monthly' | 'yearly' = 'monthly';

  setActiveTab(tab: 'monthly' | 'yearly'): string {
    return this.activeTab = tab;
  }
}
