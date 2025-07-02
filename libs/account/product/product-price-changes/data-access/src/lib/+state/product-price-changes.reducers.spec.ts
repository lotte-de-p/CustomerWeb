import { Address, BillingFrequency } from '../entities/product-price-change';
import { initialState, productPriceChangesFeature } from './product-price-changes.reducers';
import {
  loadingFinished,
  loadProductPriceChangesFailure,
  loadProductPriceChangesSuccess,
  selectProductPriceChanges,
  setAuthentication,
  validateAuthentication,
  validateCustomAuthenticationFailure,
} from './product-price-changes.actions';

describe('product price changes reducer', () => {
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

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = productPriceChangesFeature.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('validateAuthentication', () => {
    it('should set the loading flag to true', () => {
      const action = validateAuthentication();

      const state = productPriceChangesFeature.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });

  describe('validateCustomAuthenticationFailure', () => {
    it('should set the login error', () => {
      const action = validateCustomAuthenticationFailure({
        error: 'login error',
      });

      const state = productPriceChangesFeature.reducer(
        {
          ...initialState,
          loading: true,
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        loading: false,
        loginError: 'login error',
      });
    });
  });

  describe('loadProductPriceChangesSuccess', () => {
    it('should save the new product price changes and set to the first default billing account', () => {
      const action = loadProductPriceChangesSuccess({
        productPriceChanges,
      });

      const state = productPriceChangesFeature.reducer(
        {
          ...initialState,
          productPriceChanges,
          selectedProductPriceChanges: productPriceChanges[0].productPriceChanges,
          selectedBillingAccount: productPriceChanges[0].accountNumber,
          loadError: 'Error',
          loginError: 'Login Error',
          loading: true,
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        selectedProductPriceChanges: productPriceChanges[0].productPriceChanges,
        selectedBillingAccount: accountNumber,
        productPriceChanges: productPriceChanges,
        loadError: undefined,
        loginError: undefined,
        loading: false,
      });
    });

    it('should save the new product price changes into the state with default setup', () => {
      const action = loadProductPriceChangesSuccess({
        productPriceChanges: [],
      });
      const state = productPriceChangesFeature.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        selectedProductPriceChanges: [],
        productPriceChanges: [],
        selectedBillingAccount: undefined,
        loadError: undefined,
        loginError: undefined,
        loading: false,
      });
    });
  });

  describe('loadProductPriceChangesFailure', () => {
    it('should set the load error in the state', () => {
      const action = loadProductPriceChangesFailure({
        error: 'This is a test error',
        status: 400,
      });

      const state = productPriceChangesFeature.reducer(
        {
          ...initialState,
          loading: true,
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        loadError: 'This is a test error',
        loading: false,
      });
    });
  });

  describe('setAuthentication', () => {
    it('should set the authentication', () => {
      const action = setAuthentication({
        isAuthenticated: true,
        customLogin: true,
      });

      const state = productPriceChangesFeature.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        isAuthenticated: true,
        loading: true,
      });
    });
  });

  describe('loadingFinished', () => {
    it('should set the loading to false', () => {
      const action = loadingFinished();

      const state = productPriceChangesFeature.reducer({ ...initialState, loading: true }, action);

      expect(state).toEqual({
        ...initialState,
        loading: false,
      });
    });
  });

  describe('selectProductPriceChanges', () => {
    it('should set the selected product price changes', () => {
      const action = selectProductPriceChanges({
        selectedProductPriceChanges: productPriceChanges[0].productPriceChanges,
      });

      const state = productPriceChangesFeature.reducer(
        {
          ...initialState,
          selectedProductPriceChanges: [],
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        selectedProductPriceChanges: productPriceChanges[0].productPriceChanges,
      });
    });
  });
});
