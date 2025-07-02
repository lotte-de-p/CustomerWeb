import { Pipe, PipeTransform } from '@angular/core';
import { AddressInterface } from '../interfaces/address.interface';

@Pipe({
  name: 'formatAddress',
  standalone: true,
})
export class FormatAddressPipe implements PipeTransform {
  transform(address: AddressInterface): string {
    const { street, houseNumber, subHouseNumber, zipcode, subMunicipality } = address;
    return `${street} ${houseNumber}${subHouseNumber ?? ' '}, ${zipcode} ${subMunicipality}`;
  }
}
