import { Address, BillingFrequency } from '../entities/product-price-change';
import {
  selectAuthenticationError,
  selectIsAuthenticated,
  selectLoadError,
  selectLoading,
  selectProductPriceChanges,
  selectSelectedBillingAccount,
  selectSelectedProductPriceChanges,
} from './product-price-changes.selectors';
import { initialState } from './product-price-changes.reducers';

describe('selectors', () => {
  const accountNumber = '12345';
  const productPriceChanges = [
    {
      accountNumber,
      productPriceChanges: [
        {
          address: {
            addressId: 'addressId',
          } as Address,
          billingFrequency: BillingFrequency.MONTHLY,
          priceChange: 123.45,
          segment: 'segment',
          products: [],
          vatInclusive: true,
          priceAccordingToConsumption: true,
        },
      ],
    },
  ];

  it('should select service cases from the Store', () => {
    const result = selectIsAuthenticated.projector(initialState);

    expect(result).toEqual(initialState.isAuthenticated);
  });

  it('should select product price changes', () => {
    const result = selectProductPriceChanges.projector({
      ...initialState,
      productPriceChanges,
    });

    expect(result).toEqual(productPriceChanges);
  });

  it('should select the selected product price changes', () => {
    const result = selectSelectedProductPriceChanges.projector({
      ...initialState,
      productPriceChanges,
      selectedProductPriceChanges: productPriceChanges[0].productPriceChanges,
    });

    expect(result).toEqual(productPriceChanges[0].productPriceChanges);
  });

  it('should select the selected billing account', () => {
    const result = selectSelectedBillingAccount.projector({
      ...initialState,
      selectedBillingAccount: accountNumber,
    });

    expect(result).toEqual(accountNumber);
  });

  it('should select loading', () => {
    const result = selectLoading.projector({
      ...initialState,
      loading: true,
    });

    expect(result).toEqual(true);
  });

  it('should select the load error', () => {
    const result = selectLoadError.projector({
      ...initialState,
      loadError: 'This is a load error',
    });

    expect(result).toEqual('This is a load error');
  });

  it('should select the login error', () => {
    const result = selectAuthenticationError.projector({
      ...initialState,
      loginError: 'This is an authentication error',
    });

    expect(result).toEqual('This is an authentication error');
  });
});
