import { createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import {
  updateCustomerProductHolding,
  updateHumanCheckoutUrl,
  updateLoginDetails,
  updateOffers,
  updateProducts,
  updatePromotions,
  updateSalesCheckoutUrl,
  updateSalesOffer,
} from './products-details.actions';
import { CustomerProductHolding, Offer, Product, Promotion, SalesOffer } from '@sales/shared/data-access';
import { LoginDetails } from '@telenet/ng-lib-ocapi';

export const PRODUCTS_DETAILS_FEATURE_KEY = 'products-details';

export interface ProductsDetailsSlice {
  [PRODUCTS_DETAILS_FEATURE_KEY]: ProductsDetailsState;
}

export interface ProductsDetailsState {
  loginDetails: LoginDetails | null;
  promotions: Promotion[] | null;
  customerProductHolding: CustomerProductHolding[] | null;
  offers: Offer[];
  products: Product[];
  salesOffer: SalesOffer | undefined;
  salesCheckoutUrl: string;
  humanCheckoutUrl: string;
}

export const initialState: ProductsDetailsState = {
  loginDetails: null,
  promotions: null,
  customerProductHolding: null,
  offers: [],
  products: [],
  salesOffer: undefined,
  salesCheckoutUrl: '',
  humanCheckoutUrl: '',
};

export const productsDetailsReducers = createReducer(
  initialState,
  on(updateLoginDetails, (state: ProductsDetailsState, { loginDetails }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.loginDetails = loginDetails;
    })
  ),
  on(updatePromotions, (state: ProductsDetailsState, { promotions }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.promotions = promotions;
    })
  ),
  on(updateCustomerProductHolding, (state: ProductsDetailsState, { customerProductHolding }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.customerProductHolding = customerProductHolding;
    })
  ),
  on(updateOffers, (state: ProductsDetailsState, { offers }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.offers = offers;
    })
  ),
  on(updateProducts, (state: ProductsDetailsState, { products }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.products = products;
    })
  ),
  on(updateSalesOffer, (state: ProductsDetailsState, { salesOffer }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.salesOffer = salesOffer;
    })
  ),
  on(updateSalesCheckoutUrl, (state: ProductsDetailsState, { salesCheckoutUrl }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.salesCheckoutUrl = salesCheckoutUrl;
    })
  ),
  on(updateHumanCheckoutUrl, (state: ProductsDetailsState, { humanCheckoutUrl }) =>
    produce(state, (draft: ProductsDetailsState) => {
      draft.humanCheckoutUrl = humanCheckoutUrl;
    })
  )
);

export const productsDetailsFeature = createFeature({
  name: PRODUCTS_DETAILS_FEATURE_KEY,
  reducer: productsDetailsReducers,
});
