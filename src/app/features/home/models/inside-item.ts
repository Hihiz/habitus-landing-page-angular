import { IconItemBase } from './icon-item-base';

export interface InsideItem extends IconItemBase {
  id: number;
  innerIconSrc: string;
  innerIconAlt: string;
}
