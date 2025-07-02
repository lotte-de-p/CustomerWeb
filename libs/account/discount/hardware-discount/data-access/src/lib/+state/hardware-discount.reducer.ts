import { createFeature, createReducer, on } from '@ngrx/store';
import {
  loadHardwareDiscount,
  loadHardwareDiscountFailure,
  loadHardwareDiscountSuccess,
} from './hardware-discount.actions';
import { HardwareDiscount } from '../entities/hardware-discount.interface';

export const HARDWARE_DISCOUNT_FEATURE_KEY = 'hardware-discount';

export interface HardwareDiscountState {
  discountOverview: HardwareDiscount;
  loading: boolean;
  loadError: string | undefined;
}

export const initialState: HardwareDiscountState = {
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
  loadError: undefined,
};

export const hardwareDiscountReducer = createReducer(
  initialState,
  on(loadHardwareDiscountSuccess, (state: HardwareDiscountState, action) => ({
    ...state,
    loading: false,
    loadError: undefined,
    discountOverview: { ...action.hardwareDiscountObject },
  })),
  on(loadHardwareDiscountFailure, (state: HardwareDiscountState, action) => ({
    ...state,
    loading: false,
    loadError: action.error,
  })),
  on(loadHardwareDiscount, (state: HardwareDiscountState) => ({
    ...state,
    loading: true,
  }))
);

export const hardwareDiscountFeature = createFeature({
  name: HARDWARE_DISCOUNT_FEATURE_KEY,
  reducer: hardwareDiscountReducer,
});
