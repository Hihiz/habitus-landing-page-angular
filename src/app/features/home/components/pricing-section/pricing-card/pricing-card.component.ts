import { Component, input } from '@angular/core';
import { PricingCard } from '../../../models/pricing-card';

@Component({
  imports: [],
  selector: 'app-pricing-card',
  styleUrl: './pricing-card.component.scss',
  templateUrl: './pricing-card.component.html',
})
export class PricingCardComponent {
  pricingCard = input.required<PricingCard>();
}
