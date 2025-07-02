import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@entertainment/dtv-box-management/data-access';

@Pipe({
  standalone: true,
  name: 'formatAddress',
})
export class AddressPipe implements PipeTransform {
  transform(address: Address) {
    return address?.street + ' ' + address?.houseNumber + ', ' + address?.postalCode + ' ' + address?.city;
  }
}
