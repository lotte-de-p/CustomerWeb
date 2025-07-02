import { Pipe, PipeTransform } from '@angular/core';
import { BadgeColor } from '@general/data-access-search';

@Pipe({
  name: 'tlnTagBadgeColor',
  standalone: true,
})
export class TlnTagBadgeColorPipe implements PipeTransform {
  transform(value: string): BadgeColor {
    if (value.startsWith('cp_label')) {
      return 'cashback';
    }
    if (value.startsWith('vp_label')) {
      return 'accessories';
    }
    if (value.startsWith('online_excl')) {
      return 'recommended';
    }
    if (value.startsWith('pre_order_label')) {
      return 'recommended';
    }

    return 'info';
  }
}
