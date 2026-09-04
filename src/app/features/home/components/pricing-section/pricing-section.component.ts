import { Component, input } from '@angular/core';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { PricingCard } from '../../models/pricing-card';

@Component({
  imports: [PricingCardComponent],
  selector: 'app-pricing-section',
  styleUrl: './pricing-section.component.scss',
  templateUrl: './pricing-section.component.html',
})
export class PricingSectionComponent {
  pricingCards = input.required<PricingCard[]>();
}
