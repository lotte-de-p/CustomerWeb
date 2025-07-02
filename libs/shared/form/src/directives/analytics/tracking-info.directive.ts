import { Directive, Input } from '@angular/core';
import { Cart } from 'udl';

export interface TrackingInfo {
  category?: string;
  primaryCategory?: string;
  subCategory?: string;
  intent: string;
  flowType: string;
  cart?: Cart;
}

@Directive({
  selector: '[trackingInfo]',
})
export class TrackingInfoDirective {
  @Input() trackingInfo: TrackingInfo;
}
