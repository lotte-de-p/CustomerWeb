import { Injectable } from '@angular/core';
import { PricesMapper } from './prices.mapper';
import { OrderItemMapper } from '../order-item.mapper';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { DeliveryItem } from '../../models/sales-order/delivery-item.model';
import { DeliveryItemDto } from '../../interfaces/dto/delivery-item-dto.interface';
import { OrderItemDto } from '../../interfaces/dto/order-item-dto.interface';
import { CharacteristicsInterface, OrderItem } from '../../models/sales-order/order-item.model';
import { CharsInterface } from '../../interfaces/chars.interface';
import { AddressInterfaceDto } from '../../interfaces/dto/address-interface-dto.interface';
import { Address } from '../../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryItemMapper implements MapperInterface<DeliveryItemDto, DeliveryItem> {
  constructor(
    private readonly pricesMapper: PricesMapper,
    private readonly orderItemMapper: OrderItemMapper,
    private readonly omapiProductMapper: OmapiProductMapper
  ) {}

  toModel(rawDeliveryItem: DeliveryItemDto): DeliveryItem {
    return rawDeliveryItem && this.createDelivery(rawDeliveryItem);
  }

  private createDelivery(rawDeliveryItem: DeliveryItemDto): DeliveryItem {
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

  private createOrderItems(rawOrderItems: OrderItemDto[]): OrderItem[] {
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

  private createAddress(rawAddress: AddressInterfaceDto): Address {
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
