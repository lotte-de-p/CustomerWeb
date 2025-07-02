import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tlnTagLabel',
  standalone: true,
})
export class TlnTagLabelPipe implements PipeTransform {
  transform(value: string): string {
    if (
      value.startsWith('cp_label') ||
      value.startsWith('vp_label') ||
      value.startsWith('online_excl') ||
      value.startsWith('pre_order_label')
    ) {
      return value.split('|')[1];
    }
    return value;
  }
}
