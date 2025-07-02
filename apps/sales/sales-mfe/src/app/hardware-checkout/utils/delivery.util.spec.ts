import { chargerSalesOfferFactory, SdataSalesOfferItem } from '@sales/hardware-checkout/data-access';
import { DeliveryAddress, PersonalInfo } from '@sales/delivery/data-access';
import {
  UpdateDeliveryAddressInfo,
  UpdateDeliveryPersonalInfo,
} from '../interfaces/update-installation-address-request.interface';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';
import { DeliveryUtil } from './delivery.util';
import { GenericItemType, HardwareItemType } from '@sales/delivery/feat-delivery';

describe('DeliveryUtil', () => {
  describe('createDeliveryItems', () => {
    it('should return undefined if deliveryItems is undefined', () => {
      const result = DeliveryUtil.createDeliveryItems(undefined);
      expect(result).toBeUndefined();
    });

    it('should convert delivery items correctly', () => {
      const mockDeliveryItems: SdataSalesOfferItem[] = [chargerSalesOfferFactory.build()];

      const result = DeliveryUtil.createDeliveryItems(mockDeliveryItems);
      expect(result).toEqual([
        {
          deliveryInfo: {
            iconType: 'accessories',
            name: 'accessories',
          },
          productType: 'accessories',
          quantity: 1,
        },
      ]);
    });

    it('should convert delivery items correctly including generic items', () => {
      const mockDeliveryItems: SdataSalesOfferItem[] = [
        chargerSalesOfferFactory.build({ type: 'accessories' }),
        chargerSalesOfferFactory.build({ type: 'unknownType' }),
      ];

      const result = DeliveryUtil.createDeliveryItems(mockDeliveryItems);

      expect(result).toEqual([
        {
          productType: HardwareItemType.typeKey,
          deliveryInfo: {
            name: HardwareItemType.labelText,
            iconType: HardwareItemType.iconType,
          },
          quantity: 1,
        },
        {
          productType: GenericItemType.typeKey,
          deliveryInfo: {
            name: GenericItemType.labelText,
            iconType: GenericItemType.iconType,
          },
          quantity: 1,
        },
      ]);
    });
  });

  describe('toDeliveryAddressChars', () => {
    it('should convert DeliveryAddress to UpdateDeliveryAddressInfo correctly', () => {
      const address: DeliveryAddress = {
        addressUnit: addressUnitTestfactory.build({ id: '9165656195913790999', type: 'Geographical Address' }),
        municipality: 'City',
        postalCode: '12345',
        street: 'Street',
        houseNumber: '1',
        subHouseNumber: '1',
        box: 'Box',
        country: 'Country',
      };

      const expected: UpdateDeliveryAddressInfo = {
        'Municipality/Sub-municipality': '9150757940513846006',
        'Postal Code': '12345',
        Street: '9165656195913790999',
        'House Number': '1',
        'Sub-house Number': '1',
        'Box Number': 'Box',
        Country: '9145466696013668158',
      };

      const result = DeliveryUtil.toDeliveryAddressChars(address);
      expect(result).toEqual(expected);
    });

    it('should handle null subHouseNumber and box', () => {
      const address: DeliveryAddress = {
        addressUnit: addressUnitTestfactory.build({ id: '9165656195913790999', type: 'Street' }),
        municipality: 'City',
        postalCode: '12345',
        street: 'Street',
        houseNumber: '1',
        country: 'Country',
      };

      const expected: UpdateDeliveryAddressInfo = {
        'Municipality/Sub-municipality': '9150757940513846006',
        Street: '9165656195913790999',
        'House Number': '1',
        'Sub-house Number': null,
        'Box Number': null,
        'Postal Code': '12345',
        Country: '9145466696013668158',
      };

      const result = DeliveryUtil.toDeliveryAddressChars(address);
      expect(result).toEqual(expected);
    });
  });

  describe('toDeliveryPersonalInfoChars', () => {
    it('should convert PersonalInfo to UpdateDeliveryPersonalInfo correctly', () => {
      const personalInfo: PersonalInfo = {
        firstname: 'John',
        lastname: 'Doe',
        mobile: '1234567890',
        email: 'john.doe@example.com',
        company: 'Company',
      };

      const expected: UpdateDeliveryPersonalInfo = {
        'First Name': 'John',
        'Last Name': 'Doe',
        'Mobile Number': '1234567890',
        'E-Mail': 'john.doe@example.com',
      };

      const result = DeliveryUtil.toDeliveryPersonalInfoChars(personalInfo);
      expect(result).toEqual(expected);
    });

    it('should return undefined if personalInfo is undefined', () => {
      const result = DeliveryUtil.toDeliveryPersonalInfoChars(undefined);
      expect(result).toBeUndefined();
    });
  });
});
