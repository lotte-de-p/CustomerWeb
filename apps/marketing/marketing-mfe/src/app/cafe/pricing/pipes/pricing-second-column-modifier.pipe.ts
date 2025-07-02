import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'pricingSecondColumnModifierPipe',
  standalone: true,
})
export class PricingSecondColumnModifierPipe implements PipeTransform {
  transform(isShoppingCart: boolean): string {
    return isShoppingCart ? 'promo-highlight__configurator__second-column align-items--end text-align--right' : '';
  }
}
