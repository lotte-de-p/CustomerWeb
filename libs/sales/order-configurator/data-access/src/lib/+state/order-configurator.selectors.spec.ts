import { defaultState, OrderConfiguratorState } from './order-configurator.state';
import { customerAccount, errors, isPreLoading, offer, orderResult } from './order-configurator.selectors';
import { customerAccountTestfactory } from '@sales/order-configurator/customer-account/domain';
import { offerTestFactory } from '@sales/order-configurator/offer/domain';

describe('OrderConfiguratorSelectors', () => {
  const initialState: OrderConfiguratorState = defaultState;

  it('should select order result from state', () => {
    const state = { ...initialState, orderResult: { addressId: '123', status: 'success' } };
    const result = orderResult.projector(state);
    expect(result).toEqual({ addressId: '123', status: 'success' });
  });

  it('should select errors from state', () => {
    const state = {
      ...initialState,
      errors: [{ message: 'Test Error', stack: 'stack', name: 'Order Configurator Error' }],
    };
    const result = errors.projector(state);
    expect(result).toEqual([{ message: 'Test Error', stack: 'stack', name: 'Order Configurator Error' }]);
  });

  it('should select customer account from state', () => {
    const otherCustomerAccount = customerAccountTestfactory.build();
    const state = { ...initialState, customerAccount: otherCustomerAccount };
    const result = customerAccount.projector(state);
    expect(result).toEqual(otherCustomerAccount);
  });

  it('should return null for order result if not set in state', () => {
    const state = { ...initialState };
    const result = orderResult.projector(state);
    expect(result).toBeUndefined();
  });

  it('should return empty array for errors if not set in state', () => {
    const state = { ...initialState };
    const result = errors.projector(state);
    expect(result).toEqual([]);
  });

  it('should return null for customer account if not set in state', () => {
    const state = { ...initialState };
    const result = customerAccount.projector(state);
    expect(result).toBeUndefined();
  });

  describe('isPreLoading', () => {
    it('should return true if at least one boolean of loading is true', () => {
      const state = { ...initialState, loading: { loadingOffer: true, loadingCustomerAccount: false } };
      const result = isPreLoading.projector(state);
      expect(result).toBeTruthy();
    });
    it('should return true if all booleans of loading is true', () => {
      const state = { ...initialState, loading: { loadingOffer: true, loadingCustomerAccount: true } };
      const result = isPreLoading.projector(state);
      expect(result).toBeTruthy();
    });
    it('should return false if none booleans of loading is true', () => {
      const state = { ...initialState, loading: { loadingOffer: false, loadingCustomerAccount: false } };
      const result = isPreLoading.projector(state);
      expect(result).toBeFalsy();
    });
  });

  describe('offer', () => {
    it('should return offer from state', () => {
      const internetOffer = offerTestFactory.build();
      const state = { ...initialState, offer: internetOffer };
      const result = offer.projector(state);
      expect(result).toEqual(internetOffer);
    });

    it('should return undefined if offer is not set in state', () => {
      const state = { ...initialState };
      const result = offer.projector(state);
      expect(result).toBeUndefined();
    });
  });
});
