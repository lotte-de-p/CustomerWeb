import { Injectable } from '@angular/core';
import { OrderItemMapper } from './order-item.mapper';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { CharsInterface } from '../interfaces/chars.interface';
import { OrderItem } from '../models/order-item.model';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { Address } from '../models/address.model';
import { RawAddressInterface } from '../interfaces/raw/raw-address.interface';
import { RawDeliveryItemInterface, RawOrderItemInterface } from '../interfaces/raw/raw-sales-order.interface';
import { DeliveryItem } from '../models/delivery-item.model';
import { PricesMapper } from './prices.mapper';

@Injectable({
  providedIn: 'root',
})
export class DeliveryItemMapper implements MapperInterface<RawDeliveryItemInterface, DeliveryItem> {
  constructor(
    private readonly pricesMapper: PricesMapper,
    private readonly orderItemMapper: OrderItemMapper,
    private readonly omapiProductMapper: OmapiProductMapper
  ) {}

  toModel(rawDeliveryItem: RawDeliveryItemInterface): DeliveryItem {
    return rawDeliveryItem && this.createDelivery(rawDeliveryItem);
  }

  private createDelivery(rawDeliveryItem: RawDeliveryItemInterface): DeliveryItem {
    const delivery = new DeliveryItem();
    if (rawDeliveryItem) {
      delivery.id = rawDeliveryItem.id;
      delivery.name = rawDeliveryItem.name;
      delivery.type = rawDeliveryItem.type;
      delivery.prices = this.pricesMapper.toModel(rawDeliveryItem.prices);
      delivery.parentId = rawDeliveryItem.parentId;
      delivery.productInfo = this.omapiProductMapper.toModel(rawDeliveryItem.rawOmapi);
      delivery.chars = this.createChars(rawDeliveryItem.chars);
      delivery.orderItems = this.createOrderItems(rawDeliveryItem.orderItems);
      delivery.status = rawDeliveryItem.status;
    }
    return delivery;
  }

  private createOrderItems(rawOrderItems: RawOrderItemInterface[]): OrderItem[] {
    return (
      rawOrderItems &&
      rawOrderItems.map((rawOrderItem) => {
        return this.orderItemMapper.toModel(rawOrderItem);
      })
    );
  }

  private createChars(rawChars: CharsInterface): CharacteristicsInterface {
    const chars = {} as CharacteristicsInterface;
    if (rawChars) {
      chars.email = rawChars.email;
      chars.phoneNumber = rawChars.phoneNumber;
      chars.companyName = rawChars.companyName;
      chars.contactFirstName = rawChars.contactFirstName;
      chars.contactLastName = rawChars.contactLastName;
      chars.locationId = rawChars.locationId;
      chars.address = this.createAddress(rawChars.address);
      chars.deliveryEmail = rawChars.deliveryEmail;
    }
    return chars;
  }

  private createAddress(rawAddress: RawAddressInterface): Address {
    const address = new Address();
    if (rawAddress) {
      address.country = rawAddress.country;
      address.houseNumber = rawAddress.houseNumber;
      address.boxNumber = rawAddress.boxNumber;
      address.subHouseNumber = rawAddress.subHouseNumber;
      address.street = rawAddress.street;
      address.streetId = rawAddress.streetId;
      address.postalCode = rawAddress.postalCode;
      address.municipality = rawAddress.municipality;
    }
    return address;
  }
}
