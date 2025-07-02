import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { FiberAddressCheckerEnum } from '../models/fiber-address-checker.enum';
import { ProductService } from '../services/product.service';
import { CustomerAddressService } from '../services/customer-address.service';
import { ProductSubscriptionsInterface } from '../interfaces/product-subscriptions.interface';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';
import { FiberAddressCheckerService } from '../services/fiber-address-checker.service';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators';
import { AddressInterface } from '../interfaces/address.interface';
import { uniqBy } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class AddressFacade {
  private readonly UNIQUE_ADDRESS_ID = 'addressId';

  constructor(
    private readonly productService: ProductService,
    private readonly addressService: CustomerAddressService,
    private readonly fiberAddressCheckerService: FiberAddressCheckerService
  ) {}

  public getUserAddresses(messageGroupName: string): Observable<AddressInterface[]> {
    return this.productService
      .getProductLinesByType(
        messageGroupName,
        FiberAddressCheckerEnum.PRODUCT_TYPE_PLAN,
        FiberAddressCheckerEnum.PRODUCT_STATUS_PLAN
      )
      .pipe(
        mergeMap((productSubscriptions: ProductSubscriptionsInterface[]) =>
          forkJoin(this.getAddressesBasedOnProductSubscriptions(messageGroupName, productSubscriptions))
        )
      );
  }

  private getAddressesBasedOnProductSubscriptions(
    messageGroup: string,
    subscriptions: ProductSubscriptionsInterface[]
  ): Observable<AddressInterface>[] {
    const uniqueProductSubscriptions: ProductSubscriptionsInterface[] = uniqBy(subscriptions, this.UNIQUE_ADDRESS_ID);

    return uniqueProductSubscriptions.map((productSubscription: ProductSubscriptionsInterface) =>
      this.addressService
        .getCustomerAddress(messageGroup, productSubscription.addressId)
        .pipe(
          switchMap((customerAddress: CustomerAddressInterface) =>
            this.getAddress(messageGroup, customerAddress, productSubscription.locationId)
          )
        )
    );
  }

  private getAddress(
    messageGroup: string,
    customerAddress: CustomerAddressInterface,
    locationId: string | undefined
  ): Observable<AddressInterface> {
    return this.fiberAddressCheckerService.getAddressGeoId(messageGroup, customerAddress).pipe(
      catchError(() => of('')),
      map((geoId: string) => this.mapToAddress(customerAddress, geoId, locationId))
    );
  }

  private mapToAddress(
    customerAddress: CustomerAddressInterface,
    geoId: string,
    locationId: string | undefined
  ): AddressInterface {
    return {
      addressGeoId: geoId,
      zipcode: customerAddress.postalCode,
      subMunicipality: customerAddress.municipality,
      street: customerAddress.street,
      houseNumber: customerAddress.houseNumber,
      subHouseNumber: customerAddress?.subHouseNumber,
      locationId: locationId,
    };
  }
}
