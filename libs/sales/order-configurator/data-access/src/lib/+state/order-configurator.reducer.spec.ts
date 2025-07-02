import { defaultState, OrderConfiguratorState } from './order-configurator.state';
import { orderConfiguratorReducer } from './order-configurator.reducer';
import {
  getCustomerAccount,
  loadOfferFromUrl,
  orderOnAddressSuccess,
  setCustomerAccount,
  setError,
  setOffer,
} from './order-configurator.actions';
import { Action } from '@ngrx/store';
import { orderResultInterfaceTestFactory } from '@sales/order-configurator/domain-installation-address';
import { customerAccountTestfactory } from '@sales/order-configurator/customer-account/domain';
import { offerTestFactory } from '@sales/order-configurator/offer/domain';

describe('OrderConfiguratorReducer', () => {
  it('should update order result on orderOnAddressSuccess', () => {
    const initialState: OrderConfiguratorState = { ...defaultState };
    const orderResult = orderResultInterfaceTestFactory.build();
    const action = orderOnAddressSuccess({ orderResult });

    const newState = orderConfiguratorReducer(initialState, action);

    expect(newState.orderResult).toEqual(orderResult);
  });

  it('should add error to errors array on setError', () => {
    const initialState: OrderConfiguratorState = { ...defaultState };
    const error = { message: 'Test Error', stack: 'stack', name: 'Order Configurator Error' };
    const action = setError({ error });

    const newState = orderConfiguratorReducer(initialState, action);

    expect(newState.errors).toContainEqual(error);
  });

  describe('offer actions', () => {
    it('should set loading to true when loadOfferFromUrl is called', () => {
      const initialState: OrderConfiguratorState = { ...defaultState };
      const action = loadOfferFromUrl();

      const newState = orderConfiguratorReducer(initialState, action);

      expect(newState.loading.loadingOffer).toBeTruthy();
    });
    it('should set loading to false and set offer when setOffer is called', () => {
      const initialState: OrderConfiguratorState = { ...defaultState };
      const internetOffer = offerTestFactory.build();
      const action = setOffer({ offer: internetOffer });

      const newState = orderConfiguratorReducer(initialState, action);

      expect(newState.loading.loadingOffer).toBeFalsy();
      expect(newState.offer).toEqual(internetOffer);
    });
  });

  describe('customer account actions', () => {
    it('should update customer account on setCustomerAccount', () => {
      const initialState: OrderConfiguratorState = { ...defaultState };
      const customerAccount = customerAccountTestfactory.build();
      const action = setCustomerAccount({ customerAccount });

      const newState = orderConfiguratorReducer(initialState, action);

      expect(newState.customerAccount).toEqual(customerAccount);
      expect(newState.loading.loadingCustomerAccount).toBeFalsy();
    });
    it('should set loading to true when getting customer account', () => {
      const initialState: OrderConfiguratorState = { ...defaultState };
      const action = getCustomerAccount();

      const newState = orderConfiguratorReducer(initialState, action);

      expect(newState.loading.loadingCustomerAccount).toBeTruthy();
    });
  });

  it('should return default state when state is undefined', () => {
    const action = { type: 'Unknown' } as Action;

    const newState = orderConfiguratorReducer(undefined, action);

    expect(newState).toEqual(defaultState);
  });
});
