import { Component } from '@angular/core';
import { SocialProofItem } from '../../models/social-proof-item';

@Component({
  imports: [],
  selector: 'app-social-proof-section',
  styleUrl: './social-proof-section.component.scss',
  templateUrl: './social-proof-section.component.html',
})
export class SocialProofSectionComponent {
  companies: SocialProofItem[] = [
    {
      id: 1,
      iconSrc: '/img/social-proof/google.svg',
      iconAlt: '',
      width: 111,
      height: 47,
    },
    {
      id: 2,
      iconSrc: '/img/social-proof/spotify.svg',
      iconAlt: '',
      width: 139,
      height: 47,
    },
    {
      id: 3,
      iconSrc: '/img/social-proof/treehouse.svg',
      iconAlt: '',
      width: 167,
      height: 47,
    },
    {
      id: 4,
      iconSrc: '/img/social-proof/blaze.svg',
      iconAlt: '',
      width: 78,
      height: 47,
    },
  ];
}
