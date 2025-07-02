import { Pipe, PipeTransform } from '@angular/core';
import { AddressSelectorModel } from '@return-devices/data-access';

@Pipe({
  standalone: true,
  name: 'addressValue',
})
export class ReturnDevicesAddressSelectorPipe implements PipeTransform {
  transform(address: AddressSelectorModel) {
    return address?.street + ' ' + address?.houseNumber + ', ' + address?.postalCode + ' ' + address?.city;
  }
}
