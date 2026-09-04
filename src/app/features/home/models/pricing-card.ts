import { IconItemBase } from './icon-item-base';

export interface PricingCard {
  id: number;
  title: string;
  description: string;
  price: string;
  items: PricingCardItem[];
  buttonTitle: string;
  cardTheme: 'white' | 'dark';
  spanTitle?: string;
}

export interface PricingCardItem extends IconItemBase {
  title: string;
}
