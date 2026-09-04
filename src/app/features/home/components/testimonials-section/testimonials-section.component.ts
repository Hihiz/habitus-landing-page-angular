import { Component, input } from '@angular/core';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TestimonialCard } from '../../models/testimonial-card';

@Component({
  imports: [TestimonialCardComponent],
  selector: 'app-testimonials-section',
  styleUrl: './testimonials-section.component.scss',
  templateUrl: './testimonials-section.component.html',
})
export class TestimonialsSectionComponent {
  testimonialCards = input.required<TestimonialCard[]>();
}
