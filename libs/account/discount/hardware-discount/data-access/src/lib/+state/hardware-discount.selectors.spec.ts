import { initialState } from './hardware-discount.reducer';
import {
  selectHardwareDiscountError,
  selectHardwareDiscountOverview,
  selectHardwareDiscountLoading,
} from './hardware-discount.selectors';

describe('hardware discount selectors', () => {
  it('should select hardware discount overview data from the store', () => {
    const result = selectHardwareDiscountOverview.projector(initialState);

    expect(result).toEqual(initialState.discountOverview);
  });

  it('should select hardware discount overview data from the store with data', () => {
    const result = selectHardwareDiscountOverview.projector({
      ...initialState,
      discountOverview: {
        ...initialState.discountOverview,
        availableSlots: 0,
        totalSlots: 0,
        creditCheck: '',
        usedDiscounts: [],
      },
    });

    expect(result).toEqual({
      availableSlots: 0,
      totalSlots: 0,
      creditCheck: '',
      usedDiscounts: [],
    });
  });

  it('should select hardware discount loading data from the store', () => {
    const result = selectHardwareDiscountLoading.projector({
      ...initialState,
      discountOverview: {
        ...initialState.discountOverview,
        availableSlots: 0,
        totalSlots: 0,
        creditCheck: '',
        usedDiscounts: [],
      },
      loading: true,
    });

    expect(result).toEqual(true);
  });

  it('should select hardware discount error data from the store', () => {
    const result = selectHardwareDiscountError.projector({
      ...initialState,
      discountOverview: {
        ...initialState.discountOverview,
        availableSlots: 0,
        totalSlots: 0,
        creditCheck: '',
        usedDiscounts: [],
      },
      loadError: 'This is an error',
    });

    expect(result).toEqual('This is an error');
  });
});
