import { Component, input } from '@angular/core';
import { WhyCardItem } from '../../../models/why-card-item';

@Component({
  imports: [],
  selector: 'app-why-card',
  styleUrl: './why-card.component.scss',
  templateUrl: './why-card.component.html',
})
export class WhyCardComponent {
  cardWhy = input.required<WhyCardItem>();
}
