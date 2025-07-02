import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCTS_DETAILS_FEATURE_KEY, ProductsDetailsState } from './products-details.reducers';
import { DetailedSpec, Product } from '@sales/shared/data-access';

const tvIconicOmapiIds: string[] = ['TEOS0001', 'TWOP0010', 'TWOP0011', 'TWOP0013'];
const tvFlowOmapiIds: string[] = ['OTTV0000', 'TWOP0012'];
export const featureState = createFeatureSelector<ProductsDetailsState>(PRODUCTS_DETAILS_FEATURE_KEY);

export const selectIsDarwinUser = createSelector(
  [featureState],
  (state: ProductsDetailsState) => state.loginDetails?.bssSystem === 'NETCRACKER'
);
export const selectOffers = createSelector([featureState], (state: ProductsDetailsState) => state.offers);
export const selectPromotions = createSelector([featureState], (state: ProductsDetailsState) => state.promotions);
export const selectCustomerProductHolding = createSelector(
  [featureState],
  (state: ProductsDetailsState) => state.customerProductHolding
);
export const selectProducts = createSelector([featureState], (state: ProductsDetailsState) => state.products);
export const selectSalesOffer = createSelector([featureState], (state: ProductsDetailsState) => state.salesOffer);
export const selectSalesCheckoutUrl = createSelector(
  [featureState],
  (state: ProductsDetailsState) => state.salesCheckoutUrl
);
export const selectHumanCheckoutUrl = createSelector(
  [featureState],
  (state: ProductsDetailsState) => state.humanCheckoutUrl
);
export const selectIsInternetRowVisible = createSelector([featureState], (state: ProductsDetailsState) =>
  state.products.some((product: Product) =>
    product.productSpec.detailedSpecs.some((detailedSpec: DetailedSpec) => detailedSpec.type === 'INTERNET')
  )
);
export const selectIsTvIconicRowVisible = createSelector([featureState], (state: ProductsDetailsState) =>
  state.products.some((product: Product) =>
    tvIconicOmapiIds.some((omapiId: string) => omapiId === product.omapiProduct.externalProductCode)
  )
);
export const selectIsTvFlowRowVisible = createSelector([featureState], (state: ProductsDetailsState) =>
  state.products.some((product: Product) =>
    tvFlowOmapiIds.some((omapiId: string) => omapiId === product.omapiProduct.externalProductCode)
  )
);
export const selectIsMobileRowVisible = createSelector([featureState], (state: ProductsDetailsState) =>
  state.products.some((product: Product) =>
    product.productSpec.detailedSpecs.some((detailedSpec: DetailedSpec) => detailedSpec.type === 'MOBILE')
  )
);
export const selectIsFixedTelephoneRowVisible = createSelector([featureState], (state: ProductsDetailsState) =>
  state.products.some((product: Product) =>
    product.productSpec.detailedSpecs.some((detailedSpec: DetailedSpec) => detailedSpec.type === 'FIXED_TELEPHONE')
  )
);
