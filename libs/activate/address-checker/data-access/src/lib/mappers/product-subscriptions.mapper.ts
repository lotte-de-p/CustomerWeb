import { RawProductSubscriptionsInterface } from '../interfaces/raw-product-subscriptions.interface';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { ProductSubscriptionsInterface } from '../interfaces/product-subscriptions.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductSubscriptionsMapper
  implements MapperInterface<RawProductSubscriptionsInterface[], ProductSubscriptionsInterface[]>
{
  toModel(rawProductSubscriptions: RawProductSubscriptionsInterface[]): ProductSubscriptionsInterface[] {
    return rawProductSubscriptions.map((rawProductSubscriptions: RawProductSubscriptionsInterface) =>
      this.createProductSubscription(rawProductSubscriptions)
    );
  }

  private createProductSubscription(rawProduct: RawProductSubscriptionsInterface): ProductSubscriptionsInterface {
    return { addressId: rawProduct.addressId, locationId: rawProduct.locationId };
  }
}
