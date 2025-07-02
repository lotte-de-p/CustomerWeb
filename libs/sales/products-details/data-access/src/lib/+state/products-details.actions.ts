import { createAction, props } from '@ngrx/store';
import { CustomerProductHolding, Offer, Product, Promotion, SalesOffer } from '@sales/shared/data-access';
import { LoginDetails } from '@telenet/ng-lib-ocapi';

export const initEffects = createAction('[Products Details] init effects');
export const updateLoginDetails = createAction(
  '[Product Details] update login details',
  props<{ loginDetails: LoginDetails | null }>()
);
export const updatePromotions = createAction(
  '[Product Details] update promotions',
  props<{ promotions: Promotion[] }>()
);
export const updateCustomerProductHolding = createAction(
  '[Product Details] update customer product holding',
  props<{ customerProductHolding: CustomerProductHolding[] }>()
);
export const updateOffers = createAction('[Products Details] update offers', props<{ offers: Offer[] }>());
export const updateProducts = createAction(
  '[Products Details] update products',
  props<{
    products: Product[];
  }>()
);
export const updateSalesOffer = createAction(
  '[Products Details] update sales offer',
  props<{
    salesOffer: SalesOffer;
  }>()
);
export const updateSalesCheckoutUrl = createAction(
  '[Products Details] update sales checkout url',
  props<{
    salesCheckoutUrl: string;
  }>()
);
export const updateHumanCheckoutUrl = createAction(
  '[Products Details] update human checkout url',
  props<{
    humanCheckoutUrl: string;
  }>()
);
export const order = createAction('[Products Details] order');
export const navigateToSalesCheckout = createAction('[Products Details] navigate to sales checkout');
export const navigateToHumanCheckout = createAction('[Products Details] navigate to human checkout');
