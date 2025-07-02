import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'labelKey', standalone: true })
export class LabelKeyPipe implements PipeTransform {
  transform(value: string, prefix?: string, suffix?: string): string {
    const normalizedKey = value.replace(/ /g, '-').toLowerCase();
    return `ng.sales-checkout.lbl-${prefix ? prefix + '-' : ''}${normalizedKey}${suffix ? '-' + suffix : ''}`;
  }
}
