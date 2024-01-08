import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit {

  currentRoute: string | undefined;
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.url.subscribe(segments => {
      // Extract the current route
      this.currentRoute = segments.join('/pricing');
      console.log(this.currentRoute);

    });
  }

  activeTab: 'monthly' | 'yearly' = 'monthly';

  setActiveTab(tab: 'monthly' | 'yearly'): string {
    return this.activeTab = tab;
  }
}
