import { isEmpty } from 'lodash-es';
import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { CustomerProductHolding, SplitBillProfile } from '../../models/customer-product-holding.model';
import { RawCustomerProductHoldingInterface } from '../../interfaces/raw-customer-product-holding.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductHoldingMapper
  implements MapperInterface<RawCustomerProductHoldingInterface, CustomerProductHolding>
{
  toModel(rawCustomerProductHolding: RawCustomerProductHoldingInterface): CustomerProductHolding {
    return this.createCustomerProductHolding(rawCustomerProductHolding);
  }

  private createCustomerProductHolding(
    rawCustomerProductHolding: RawCustomerProductHoldingInterface
  ): CustomerProductHolding {
    const customerProductHolding = new CustomerProductHolding();
    if (!isEmpty(rawCustomerProductHolding)) {
      customerProductHolding.splitBillProfile = {
        id: rawCustomerProductHolding.splitBillProfile?.id,
        name: rawCustomerProductHolding.splitBillProfile?.name,
      } as SplitBillProfile;
      customerProductHolding.referenceInformation = rawCustomerProductHolding.referenceInformation;
      customerProductHolding.secondaryBillingAddressId = rawCustomerProductHolding.secondaryBillingAddressId;
      customerProductHolding.status = rawCustomerProductHolding.status;
    }
    return customerProductHolding;
  }
}
