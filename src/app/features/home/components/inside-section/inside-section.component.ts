import { Component, input } from '@angular/core';
import { InsideCardComponent } from './inside-card/inside-card.component';
import { InsideItem } from '../../models/inside-item';

@Component({
  imports: [InsideCardComponent],
  selector: 'app-inside-section',
  styleUrl: './inside-section.component.scss',
  templateUrl: './inside-section.component.html',
})
export class InsideSectionComponent {
  cards = input.required<InsideItem[]>();
}
