import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'pricingRenditionPipe',
  standalone: true,
})
export class PricingRenditionPipe implements PipeTransform {
  transform(selectedRendition: string, isShoppingCart: boolean): string {
    if (selectedRendition === 'textual' && isShoppingCart) {
      return 'display--flex align-items--end promo-highlight__configurator__first-column flex-direction--row justify-content--center';
    } else if (selectedRendition === 'textual') {
      return 'display--flex align-items--end';
    }
    return 'display--flex align-items--center flex-direction--row flex-direction--column';
  }
}
