import { Component, input } from '@angular/core';
import { WhyCardItem } from '../../models/why-card-item';
import { WhyCardComponent } from "./why-card/why-card.component";

@Component({
  imports: [WhyCardComponent],
  selector: 'app-why-section',
  styleUrl: './why-section.component.scss',
  templateUrl: './why-section.component.html',
})
export class WhySectionComponent {
  cardWhy = input.required<WhyCardItem[]>();
}
