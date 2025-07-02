import { createAction, props } from '@ngrx/store';
import { CustomerAccount } from '@sales/order-configurator/customer-account/domain';
import { OrderResultInterface } from '@sales/order-configurator/domain-installation-address';
import { Offer } from '@sales/order-configurator/offer/domain';

export const setCustomerAccount = createAction(
  '[Order Configurator] Prepare Order Configurator Flow For New Customer',
  props<{ customerAccount: CustomerAccount }>()
);

export const orderOnAddressSuccess = createAction(
  '[Order Configurator] Prepare Order On Address Success',
  props<{ orderResult: OrderResultInterface }>()
);

export const setError = createAction('[Order Configurator] Setting error', props<{ error: Error }>());

export const loadOfferFromUrl = createAction('[Order Configurator] Load Offer From Url');

export const setOffer = createAction('[Order Configurator] Load Offer From Url Success', props<{ offer: Offer }>());

export const getCustomerAccount = createAction('[Order Configurator] Get Customer Account');
