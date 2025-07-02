import { RawCustomerAddressInterface } from '../interfaces/raw-customer-address.interface';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerAddressMapper implements MapperInterface<RawCustomerAddressInterface, CustomerAddressInterface> {
  toModel(rawCustomerAddress: RawCustomerAddressInterface): CustomerAddressInterface {
    return {
      id: rawCustomerAddress.id,
      street: rawCustomerAddress.street,
      postalCode: rawCustomerAddress.postalCode,
      municipality: rawCustomerAddress.municipality,
      houseNumber: rawCustomerAddress.houseNumber,
      subHouseNumber: rawCustomerAddress.subHouseNumber,
    };
  }
}
