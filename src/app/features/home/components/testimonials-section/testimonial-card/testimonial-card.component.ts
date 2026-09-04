import { Component, input } from '@angular/core';
import { TestimonialCard } from '../../../models/testimonial-card';

@Component({
  imports: [],
  selector: 'app-testimonial-card',
  styleUrl: './testimonial-card.component.scss',
  templateUrl: './testimonial-card.component.html',
})
export class TestimonialCardComponent {
  cardTestimonial = input.required<TestimonialCard>();
}
