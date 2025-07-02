import { HardwareDiscount } from '../entities/hardware-discount.interface';
import {
  loadHardwareDiscount,
  loadHardwareDiscountFailure,
  loadHardwareDiscountSuccess,
} from './hardware-discount.actions';
import { initialState, hardwareDiscountFeature } from './hardware-discount.reducer';

describe('hardware discount reducer', () => {
  it('should return initial state', () => {
    const action = {
      type: 'Unknown',
    };

    const state = hardwareDiscountFeature.reducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  describe('loadHardwareDiscount', () => {
    it('should set the loading flag to true', () => {
      const action = loadHardwareDiscount();

      const state = hardwareDiscountFeature.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        discountOverview: {
          ...initialState.discountOverview,
        },
        loading: true,
      });
    });
  });

  describe('loadHardwareDiscountSuccess', () => {
    it('should save the new hardware discount data in the state', () => {
      const hardwareDiscountObj: HardwareDiscount = {
        availableSlots: 4,
        totalSlots: 5,
        creditCheck: 'OK',
        usedDiscounts: [
          {
            device: {
              manufacturer: 'Nokia',
              name: '3319',
              imageUrl: 'https://nokia.com/3310.png',
              itemCode: '212212',
            },
            deliveryOrder: {
              id: 'ID17',
              expectedDeliveryDate: '2024-09-23T12:05:05+02:00',
              tracking: {
                number: '12345',
                url: 'https://trackingurl',
              },
            },
            originalPrice: 399,
            discountedPrice: 299,
            invoice: {
              billingAccountNumber: '131212',
              documentReferenceNumber: 'SDFE2324DW',
            },
            contract: {
              remainingMonths: 10,
              obligationInMonths: 12,
              remainingValue: 89.99,
            },
            depreciations: [
              {
                date: '2025-07-23T12:05:05+02:00',
                remainingValue: 109.99,
                status: '',
              },
              {
                date: '2025-08-23T12:05:05+02:00',
                remainingValue: 99.99,
                status: '',
              },
              {
                date: '2025-09-23T12:05:05+02:00',
                remainingValue: 89.99,
                status: '',
              },
              {
                date: '2025-10-23T12:05:05+02:00',
                remainingValue: 79.99,
                status: '',
              },
            ],
          },
        ],
      };
      const action = loadHardwareDiscountSuccess({ hardwareDiscountObject: hardwareDiscountObj });

      const state = hardwareDiscountFeature.reducer(
        {
          ...initialState,
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        discountOverview: {
          availableSlots: 4,
          totalSlots: 5,
          creditCheck: 'OK',
          usedDiscounts: [
            {
              device: {
                manufacturer: 'Nokia',
                name: '3319',
                imageUrl: 'https://nokia.com/3310.png',
                itemCode: '212212',
              },
              deliveryOrder: {
                id: 'ID17',
                expectedDeliveryDate: '2024-09-23T12:05:05+02:00',
                tracking: {
                  number: '12345',
                  url: 'https://trackingurl',
                },
              },
              originalPrice: 399,
              discountedPrice: 299,
              invoice: {
                billingAccountNumber: '131212',
                documentReferenceNumber: 'SDFE2324DW',
              },
              contract: {
                remainingMonths: 10,
                obligationInMonths: 12,
                remainingValue: 89.99,
              },
              depreciations: [
                {
                  date: '2025-07-23T12:05:05+02:00',
                  remainingValue: 109.99,
                  status: '',
                },
                {
                  date: '2025-08-23T12:05:05+02:00',
                  remainingValue: 99.99,
                  status: '',
                },
                {
                  date: '2025-09-23T12:05:05+02:00',
                  remainingValue: 89.99,
                  status: '',
                },
                {
                  date: '2025-10-23T12:05:05+02:00',
                  remainingValue: 79.99,
                  status: '',
                },
              ],
            },
          ],
        },
        loading: false,
        loadError: undefined,
      });
    });
  });

  describe('loadHardwareDiscountFailure', () => {
    it('should save the new hardware discount data in the state', () => {
      const action = loadHardwareDiscountFailure({ error: 'this is an error' });

      const state = hardwareDiscountFeature.reducer(
        {
          ...initialState,
          discountOverview: {
            availableSlots: 0,
            totalSlots: 0,
            creditCheck: '',
            usedDiscounts: [
              {
                device: {
                  manufacturer: '',
                  name: '',
                  imageUrl: '',
                  itemCode: '',
                },
                deliveryOrder: {
                  id: '',
                  expectedDeliveryDate: '',
                  tracking: {
                    number: '',
                    url: '',
                  },
                },
                originalPrice: 0,
                discountedPrice: 0,
                invoice: {
                  billingAccountNumber: '',
                  documentReferenceNumber: '',
                },
                contract: {
                  remainingMonths: 0,
                  obligationInMonths: 0,
                  remainingValue: 0,
                },
                depreciations: [
                  {
                    date: '',
                    remainingValue: 0,
                    status: '',
                  },
                ],
              },
            ],
          },
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        discountOverview: {
          availableSlots: 0,
          totalSlots: 0,
          creditCheck: '',
          usedDiscounts: [
            {
              device: {
                manufacturer: '',
                name: '',
                imageUrl: '',
                itemCode: '',
              },
              deliveryOrder: {
                id: '',
                expectedDeliveryDate: '',
                tracking: {
                  number: '',
                  url: '',
                },
              },
              originalPrice: 0,
              discountedPrice: 0,
              invoice: {
                billingAccountNumber: '',
                documentReferenceNumber: '',
              },
              contract: {
                remainingMonths: 0,
                obligationInMonths: 0,
                remainingValue: 0,
              },
              depreciations: [
                {
                  date: '',
                  remainingValue: 0,
                  status: '',
                },
              ],
            },
          ],
        },
        loading: false,
        loadError: 'this is an error',
      });
    });
  });
});
