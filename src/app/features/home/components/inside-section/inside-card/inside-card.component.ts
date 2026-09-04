import { Component, input } from '@angular/core';
import { InsideItem } from '../../../models/inside-item';

@Component({
  imports: [],
  selector: 'app-inside-card',
  styleUrl: './inside-card.component.scss',
  templateUrl: './inside-card.component.html',
})
export class InsideCardComponent {
   card = input.required<InsideItem>();
}
