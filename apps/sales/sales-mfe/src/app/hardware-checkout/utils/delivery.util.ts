import { SdataSalesOfferItem } from '@sales/hardware-checkout/data-access';
import { deliveryItemTypes, GenericItemType } from '@sales/delivery/feat-delivery';
import { DeliveryAddress, DeliveryItem, PersonalInfo } from '@sales/delivery/data-access';
import {
  UpdateDeliveryAddressInfo,
  UpdateDeliveryPersonalInfo,
} from '../interfaces/update-installation-address-request.interface';
import { AddressUtil } from './address.util';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { CouldNotParseAddress } from '../constants/errors.constants';

export class DeliveryUtil {
  static createDeliveryItems(deliveryItems: SdataSalesOfferItem[] | undefined): DeliveryItem[] | undefined {
    if (deliveryItems) {
      return this.convertDeliveryItems(deliveryItems);
    }
    return undefined;
  }

  static toDeliveryAddressChars(address: DeliveryAddress): UpdateDeliveryAddressInfo {
    if (address.addressUnit.type === 'Street') {
      return {
        'Municipality/Sub-municipality': AddressUtil.getAddressValueId(address.addressUnit, 'Municipality'),
        'Postal Code': address.postalCode,
        Street: address.addressUnit.id,
        'House Number': address.houseNumber,
        'Sub-house Number': address.subHouseNumber || null,
        'Box Number': address.box || null,
        Country: AddressUtil.getAddressValueId(address.addressUnit, 'Country'),
      };
    } else if (address.addressUnit.type === 'Geographical Address') {
      return {
        'Municipality/Sub-municipality': AddressUtil.getAddressValueId(address.addressUnit, 'Municipality'),
        'Postal Code': address.postalCode,
        Street: AddressUtil.getAddressValueId(address.addressUnit, 'Street'),
        'House Number': address.houseNumber,
        'Sub-house Number': address.subHouseNumber || null,
        'Box Number': address.box || null,
        Country: AddressUtil.getAddressValueId(address.addressUnit, 'Country'),
      };
    } else throw new HardwareCheckoutError(CouldNotParseAddress);
  }

  static toDeliveryPersonalInfoChars(personalInfo: PersonalInfo | undefined): UpdateDeliveryPersonalInfo | undefined {
    if (personalInfo) {
      return {
        'First Name': personalInfo.firstname,
        'Last Name': personalInfo.lastname,
        'Mobile Number': personalInfo.mobile,
        'E-Mail': personalInfo.email,
      };
    }
    return undefined;
  }

  private static convertDeliveryItems(deliveryItems: SdataSalesOfferItem[]): DeliveryItem[] | undefined {
    if (deliveryItems) {
      const convertedDeliveryItems: DeliveryItem[] = [];
      deliveryItems.forEach((deliveryItem) => {
        // Find the matching viewModel delivery type
        let matchingDeliveryItemType = deliveryItemTypes.find((deliveryItemType) => {
          return deliveryItemType.types.find((type) => {
            return type === deliveryItem.type;
          });
        });

        if (!matchingDeliveryItemType) {
          matchingDeliveryItemType = GenericItemType;
        }

        const existingConvertedDeliveryItem = convertedDeliveryItems.find((convertedDeliveryItem) => {
          return convertedDeliveryItem.productType === matchingDeliveryItemType?.typeKey;
        });

        if (existingConvertedDeliveryItem) {
          existingConvertedDeliveryItem.quantity++;
        } else {
          convertedDeliveryItems.push({
            productType: matchingDeliveryItemType.typeKey,
            deliveryInfo: {
              name: matchingDeliveryItemType.labelText,
              iconType: matchingDeliveryItemType.iconType,
            },
            quantity: 1,
          });
        }
      });
      return convertedDeliveryItems;
    }
    return undefined;
  }
}
