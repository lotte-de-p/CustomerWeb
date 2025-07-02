import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_FINDER_FEATURE_KEY, ProductFinderState } from './product-finder.reducers';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductFinderErrorEnum } from '../entities/error/product-finder-error.enum';

export const featureState = createFeatureSelector<ProductFinderState>(PRODUCT_FINDER_FEATURE_KEY);

export const selectOnMobileDevice = createSelector([featureState], (state: ProductFinderState) => state.onMobileDevice);
export const selectIsDarwinUser = createSelector(
  [featureState],
  (state: ProductFinderState) => state.loginDetails?.bssSystem === 'NETCRACKER'
);
export const selectPreference = createSelector([featureState], (state: ProductFinderState) => state.preference);
export const selectHousehold = createSelector([featureState], (state: ProductFinderState) => state.household);
export const selectInternetUsage = createSelector([featureState], (state: ProductFinderState) => state.internetUsage);
export const selectNumberOfSims = createSelector([featureState], (state: ProductFinderState) => state.numberOfSims);
export const selectMobileUsage = createSelector([featureState], (state: ProductFinderState) => state.mobileUsage);
export const selectMobileLines = createSelector(
  [featureState],
  (state: ProductFinderState) => state.mobileUsage?.mobileLines || []
);
export const selectTvChannels = createSelector([featureState], (state: ProductFinderState) => state.tvChannels);
export const selectTvExperience = createSelector([featureState], (state: ProductFinderState) => state.tvExperience);
export const selectPromotions = createSelector([featureState], (state: ProductFinderState) => state.promotions);
export const selectCustomerProductHolding = createSelector(
  [featureState],
  (state: ProductFinderState) => state.customerProductHolding
);
export const selectLastKnownState = createSelector([featureState], (state: ProductFinderState) => state.lastKnownState);
export const selectProductRecommendationResult = createSelector(
  [featureState],
  (state: ProductFinderState) => state.productRecommendationResult
);
export const selectSalesCheckoutUrl = createSelector(
  [featureState],
  (state: ProductFinderState) => state.salesCheckoutUrl
);
export const selectHumanCheckoutUrl = createSelector(
  [featureState],
  (state: ProductFinderState) => state.humanCheckoutUrl
);
export const selectProductRecommendationByIndex = (index: number) =>
  createSelector(
    selectProductRecommendationResult,
    (productRecommendationResult: ProductRecommendationResult | null) =>
      productRecommendationResult?.productRecommendations[index]
  );
export const selectEnableLoader = createSelector([featureState], (state: ProductFinderState) => state.enableLoader);
export const selectEnableLoaderMask = createSelector(
  [featureState],
  (state: ProductFinderState) => state.enableLoaderMask
);
export const selectOneConfiguratorUrl = createSelector(
  [featureState],
  (state: ProductFinderState) => state.oneConfiguratorUrl
);
export const selectProductsDetailsUrl = createSelector(
  [featureState],
  (state: ProductFinderState) => state.productsDetailsUrl
);
export const selectHasErrorRequireAtLeastOnePreferenceToBeSelected = createSelector(
  [featureState],
  (state: ProductFinderState) => state.error === ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED
);
export const selectHasErrorRequireInternetWhenTvIsSelected = createSelector(
  [featureState],
  (state: ProductFinderState) => state.error === ProductFinderErrorEnum.REQUIRE_INTERNET_WHEN_TV_IS_SELECTED
);
export const selectHasErrorRequireAtLeastOneInternetUsageToBeSelected = createSelector(
  [featureState],
  (state: ProductFinderState) =>
    state.error === ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED
);
export const selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine = createSelector(
  [featureState],
  (state: ProductFinderState) =>
    state.error === ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE
);
export const selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError = createSelector(
  [featureState],
  (state: ProductFinderState) => state.error === ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED
);
export const selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError = createSelector(
  [featureState],
  (state: ProductFinderState) =>
    state.error === ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED
);
