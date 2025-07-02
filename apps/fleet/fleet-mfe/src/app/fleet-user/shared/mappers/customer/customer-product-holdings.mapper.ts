import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawCustomerProductHoldingInterface } from '../../interfaces/raw/raw-customer-product-holding.interface';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';
import { CustomerProductHoldingMapper } from './customer-product-holding.mapper';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductHoldingsMapper
  implements MapperInterface<RawCustomerProductHoldingInterface[], CustomerProductHolding[]>
{
  constructor(private readonly customerProductHoldingMapper: CustomerProductHoldingMapper) {}

  toModel(rawCustomerProductHoldings: RawCustomerProductHoldingInterface[]): CustomerProductHolding[] {
    return this.createCustomerProductHoldings(rawCustomerProductHoldings);
  }

  private createCustomerProductHoldings(
    rawCustomerProductHoldings: RawCustomerProductHoldingInterface[]
  ): CustomerProductHolding[] {
    return (
      rawCustomerProductHoldings &&
      rawCustomerProductHoldings.map((rawCustomerProductHolding) => {
        return this.customerProductHoldingMapper.toModel(rawCustomerProductHolding);
      })
    );
  }
}
