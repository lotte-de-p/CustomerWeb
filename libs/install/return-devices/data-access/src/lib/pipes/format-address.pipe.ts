import { Pipe, PipeTransform } from '@angular/core';
import { AddressSelectorModel } from '../entities/address-selector.model';

@Pipe({
  name: 'formatAddress',
  standalone: true,
})
export class FormatAddressPipe implements PipeTransform {
  transform(address: AddressSelectorModel): string {
    const { street, houseNumber, postalCode, city } = address;
    return `${street} ${houseNumber}, ${postalCode} ${city}`;
  }
}
