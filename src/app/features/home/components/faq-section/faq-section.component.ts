import { Component, signal } from '@angular/core';
import { AccordeonItem } from '../../models/accordeon-item';

@Component({
  imports: [],
  selector: 'app-faq-section',
  styleUrl: './faq-section.component.scss',
  templateUrl: './faq-section.component.html',
})
export class FaqSectionComponent {
  activeQuestionIndex = signal<number | null>(-1);

  toggleQuestion(index: number) {
    this.activeQuestionIndex.update((current) => (current === index ? null : index));
  }

  isOpen(index: number) {
    return this.activeQuestionIndex() === index;
  }

  accordionItems: AccordeonItem[] = [
    {
      id: 1,
      title: 'What do I get with Premium?',
      description:
        'You get full access to all exclusive courses, daily personalized workouts, advanced analytics tracking, offline mode, and 24/7 priority customer support with fitness experts.',
      cardTheme: 'orange',
    },
    {
      id: 2,
      title: 'What happens if I miss a day?',
      description:
        'Don’t worry! Your streak is protected for up to 48 hours. You can easily resume your journey tomorrow without losing any progress, or use a Streak Freeze if you have one active in your profile settings.',
      cardTheme: 'lightPurple',
    },
    {
      id: 3,
      title: 'What do I get with Premium?',
      description:
        'Premium unlocks unlimited access to our entire library. This includes over 500+ video lessons, downloadable materials, interactive quizzes, direct mentor feedback, and an ad-free experience across all of your synchronized devices.',
      cardTheme: 'pink',
    },
    {
      id: 4,
      title: 'What happens if I miss a day?',
      description:
        'Nothing bad happens. The system automatically adjusts your schedule. However, to maximize your results, we highly recommend staying consistent and trying to complete at least a short 5-minute session every day.',
      cardTheme: 'lightBlue',
    },
  ];
}
