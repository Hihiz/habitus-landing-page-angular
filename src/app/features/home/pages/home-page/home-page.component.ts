import { Component } from '@angular/core';
import { InsideItem } from '../../models/inside-item';
import { PricingCard } from '../../models/pricing-card';
import { TestimonialCard } from '../../models/testimonial-card';
import { WhyCardItem } from '../../models/why-card-item';
import { WhySectionComponent } from "../../components/why-section/why-section.component";
import { SocialProofSectionComponent } from "../../components/social-proof-section/social-proof-section.component";
import { InsideSectionComponent } from "../../components/inside-section/inside-section.component";
import { CtaSectionComponent } from "../../components/cta-section/cta-section.component";
import { PricingSectionComponent } from "../../components/pricing-section/pricing-section.component";
import { FaqSectionComponent } from "../../components/faq-section/faq-section.component";
import { TestimonialsSectionComponent } from "../../components/testimonials-section/testimonials-section.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";

@Component({
  imports: [WhySectionComponent, SocialProofSectionComponent, InsideSectionComponent, CtaSectionComponent, PricingSectionComponent, FaqSectionComponent, TestimonialsSectionComponent, HeroSectionComponent],
  selector: 'app-home-page',
  styleUrl: './home-page.component.scss',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  cardWhy: WhyCardItem[] = [
    {
      id: 1,
      iconSrc: '/img/why/notify.svg',
      iconAlt: '',
      title: 'Smart Reminders',
      description: 'Never miss a habit again. Set daily notifications or let the app suggest the best time.',
    },
    {
      id: 2,
      iconSrc: '/img/why/analytics.svg',
      iconAlt: '',
      title: 'Progress Analytics',
      description: 'See your growth with weekly reports, streaks, and visual heatmaps.',
    },
    {
      id: 3,
      iconSrc: '/img/why/tracking.svg',
      iconAlt: '',
      title: 'Streak Tracking',
      description: 'Stay motivated by building unbreakable streaks and unlocking milestones.',
    },
  ];

  cards: InsideItem[] = [
    {
      id: 1,
      iconSrc: '/img/inside/Dashboard.png',
      iconAlt: '',
      innerIconSrc: 'img/inside/Rectangle-light-purple.svg',
      innerIconAlt: '',
      width: 171,
      height: 370,
    },
    {
      id: 2,
      iconSrc: '/img/inside/Habit-tracker.png',
      iconAlt: '',
      innerIconSrc: 'img/inside/Rectangle-orange.svg',
      innerIconAlt: '',
      width: 171,
      height: 370,
    },
    {
      id: 3,
      iconSrc: '/img/inside/Settings.png',
      iconAlt: '',
      innerIconSrc: 'img/inside/Rectangle-dark.svg',
      innerIconAlt: '',
      width: 171,
      height: 370,
    },
    {
      id: 4,
      iconSrc: '/img/inside/Goals.png',
      iconAlt: '',
      innerIconSrc: 'img/inside/Rectangle-light-blue.svg',
      innerIconAlt: '',
      width: 171,
      height: 370,
    },
  ];

  testimonialCards: TestimonialCard[] = [
    {
      id: 1,
      iconSrc: '/img/testimonials/img1.png',
      iconAlt: '',
      name: 'Sarah T.',
      position: 'Writer',
      description: `
        "I've finally stayed consistent with journaling for 90 days. This app made it effortless."
        `,
    },

    {
      id: 2,
      iconSrc: '/img/testimonials/img2.png',
      iconAlt: '',
      name: 'James K.',
      position: 'Software Engineer',
      description: `
       "Seeing my progress visually keeps me motivated every day. The reminders are just perfect!"
        `,
    },
    {
      id: 3,
      iconSrc: '/img/testimonials/img3.png',
      iconAlt: '',
      name: 'Priya R.',
      position: 'Wellness Coach',
      description: `
       "I've tried several habit trackers, but this one is the only one I actually stuck with."
        `,
    },
  ];

  pricingCards: PricingCard[] = [
    {
      id: 1,
      title: 'Free',
      description: 'Perfect to get started',
      price: '$0',
      items: [
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Track unlimited habits',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Daily reminders',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Streaks & basic analytics',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Light & dark mode',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img1.svg',
          iconAlt: '',
          title: 'No credit card required',
          width: 12,
          height: 14,
        },
      ],
      buttonTitle: 'Start for Free',
      cardTheme: 'white',
    },
    {
      id: 2,
      title: 'Premium',
      description: 'All features you need',
      price: '$4.99',
      items: [
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Everything in Free',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Advanced analytics',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Habit templates & suggestions',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Cloud backup & device sync',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Premium themes and icons',
          width: 14,
          height: 10,
        },
        {
          iconSrc: '/img/pricing/img2.svg',
          iconAlt: '',
          title: 'Priority support',
          width: 14,
          height: 10,
        },
      ],
      buttonTitle: 'Upgrade Now',
      cardTheme: 'dark',
      spanTitle: 'Popular',
    },
  ];
}
