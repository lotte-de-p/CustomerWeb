import { createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { Preference } from '../entities/preference/preference.interface';
import { Household } from '../entities/household/household.interface';
import { InternetUsage } from '../entities/internet-usage/internet-usage.interface';
import { MobileLine, MobileUsage } from '../entities/mobile-usage/mobile.usage.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import {
  backupCurrentState,
  clearError,
  getProductRecommendationsSuccess,
  requireAtLeastOneInternetUsageToBeSelectedError,
  requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError,
  requireAtLeastOnePreferenceToBeSelectedError,
  requireAtLeastOneTvChannelToBeSelectedError,
  requireAtLeastOneTvExperienceToBeSelectedError,
  requireInternetWhenTvIsSelectedError,
  resetStateToInitialState,
  updateCustomerProductHolding,
  updateEnableLoader,
  updateEnableLoaderMask,
  updateHousehold,
  updateHumanCheckoutUrl,
  updateInternetUsage,
  updateLoginDetails,
  updateMobileLineCollapsed,
  updateMobileLines,
  updateMobileLineSelection,
  updateMobileUsage,
  updateNumberOfSims,
  updateOneConfiguratorUrl,
  updateOnMobileDevice,
  updatePreference,
  updateProductsDetailsUrl,
  updatePromotions,
  updateSalesCheckoutUrl,
  updateTvChannels,
  updateTvExperience,
} from './product-finder.actions';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductFinderErrorEnum } from '../entities/error/product-finder-error.enum';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

export const PRODUCT_FINDER_FEATURE_KEY = 'product-finder';

export interface ProductFinderSlice {
  [PRODUCT_FINDER_FEATURE_KEY]: ProductFinderState;
}

export interface ProductFinderState {
  error: string | null;
  onMobileDevice: boolean;
  loginDetails: LoginDetails | null;
  promotions: Promotion[] | null;
  customerProductHolding: CustomerProductHolding[] | null;
  preference: Preference;
  household: Household | null;
  internetUsage: InternetUsage | null;
  numberOfSims: number | null;
  mobileUsage: MobileUsage | null;
  tvChannels: TvChannels | null;
  tvExperience: TvExperience | null;
  lastKnownState: Partial<ProductFinderState>;
  productRecommendationResult: ProductRecommendationResult | null;
  enableLoader: boolean;
  enableLoaderMask: boolean;
  salesCheckoutUrl: string;
  humanCheckoutUrl: string;
  oneConfiguratorUrl: string;
  productsDetailsUrl: string;
}

const initialPartialState: Partial<ProductFinderState> & { preference: Preference; numberOfSims: number | null } = {
  preference: {
    mobile: false,
    surfing: false,
    watchTv: false,
    fixedLine: false,
  },
  numberOfSims: null,
};

export const initialState: ProductFinderState = {
  ...initialPartialState,
  error: null,
  onMobileDevice: false,
  loginDetails: null,
  promotions: null,
  customerProductHolding: null,
  household: null,
  internetUsage: null,
  mobileUsage: null,
  tvChannels: null,
  tvExperience: null,
  lastKnownState: initialPartialState,
  productRecommendationResult: null,
  enableLoader: false,
  enableLoaderMask: false,
  salesCheckoutUrl: '',
  humanCheckoutUrl: '',
  oneConfiguratorUrl: '',
  productsDetailsUrl: '',
};

export const productFinderReducer = createReducer(
  initialState,
  on(updateOnMobileDevice, (state: ProductFinderState, { onMobileDevice }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.onMobileDevice = onMobileDevice;
    })
  ),
  on(updateLoginDetails, (state: ProductFinderState, { loginDetails }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.loginDetails = loginDetails;
    })
  ),
  on(updatePromotions, (state: ProductFinderState, { promotions }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.promotions = promotions;
    })
  ),
  on(updateCustomerProductHolding, (state: ProductFinderState, { customerProductHolding }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.customerProductHolding = customerProductHolding;
    })
  ),
  on(updatePreference, (state: ProductFinderState, { preference }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.preference = preference;
      draft.error = null;
    })
  ),
  on(updateHousehold, (state: ProductFinderState, { household }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.household = household;
    })
  ),
  on(updateInternetUsage, (state: ProductFinderState, { internetUsage }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.internetUsage = internetUsage;
      draft.error = null;
    })
  ),
  on(updateNumberOfSims, (state: ProductFinderState, { numberOfSims }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.numberOfSims = numberOfSims;
    })
  ),
  on(updateMobileUsage, (state: ProductFinderState, { mobileUsage }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.mobileUsage = mobileUsage;
      draft.error = null;
    })
  ),
  on(updateMobileLines, (state: ProductFinderState, { mobileLines }) =>
    produce(state, (draft: ProductFinderState) => {
      if (!draft.mobileUsage) {
        throw new Error('Cannot handle action updateMobileLines in current state!');
      }
      draft.mobileUsage.mobileLines = mobileLines;
    })
  ),
  on(updateMobileLineSelection, (state: ProductFinderState, { index, selection }) =>
    produce(state, (draft: ProductFinderState) => {
      if (!draft.mobileUsage?.mobileLines[index]) {
        throw new Error('Cannot handle action updateMobileLineSelection in current state!');
      }
      draft.mobileUsage.mobileLines[index].selection = selection;
      draft.mobileUsage.mobileLines[index].error = null;
      draft.error = null;
    })
  ),
  on(updateMobileLineCollapsed, (state: ProductFinderState, { index, collapsed }) =>
    produce(state, (draft: ProductFinderState) => {
      if (!draft.mobileUsage?.mobileLines[index]) {
        throw new Error('Cannot handle action updateMobileLineCollapsed in current state!');
      }
      draft.mobileUsage.mobileLines[index].collapsed = collapsed;
    })
  ),
  on(updateTvChannels, (state: ProductFinderState, { tvChannels }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.tvChannels = tvChannels;
      draft.error = null;
    })
  ),
  on(updateTvExperience, (state: ProductFinderState, { tvExperience }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.tvExperience = tvExperience;
      draft.error = null;
    })
  ),
  on(backupCurrentState, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.lastKnownState = {
        preference: state.preference,
        numberOfSims: state.numberOfSims,
      };
    })
  ),
  on(getProductRecommendationsSuccess, (state: ProductFinderState, { productRecommendationResult }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.productRecommendationResult = productRecommendationResult;
    })
  ),
  on(resetStateToInitialState, (state: ProductFinderState) =>
    produce(state, () => ({
      ...initialState,
      loginDetails: state.loginDetails,
      promotions: state.promotions,
      customerProductHolding: state.customerProductHolding,
      enableLoader: state.enableLoader,
      enableLoaderMask: state.enableLoaderMask,
      salesCheckoutUrl: state.salesCheckoutUrl,
      humanCheckoutUrl: state.humanCheckoutUrl,
      oneConfiguratorUrl: state.oneConfiguratorUrl,
      productsDetailsUrl: state.productsDetailsUrl,
    }))
  ),
  on(updateEnableLoader, (state: ProductFinderState, { enableLoader }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.enableLoader = enableLoader;
    })
  ),
  on(updateEnableLoaderMask, (state: ProductFinderState, { enableLoaderMask }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.enableLoaderMask = enableLoaderMask;
    })
  ),
  on(updateSalesCheckoutUrl, (state: ProductFinderState, { salesCheckoutUrl }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.salesCheckoutUrl = salesCheckoutUrl;
    })
  ),
  on(updateHumanCheckoutUrl, (state: ProductFinderState, { humanCheckoutUrl }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.humanCheckoutUrl = humanCheckoutUrl;
    })
  ),
  on(updateOneConfiguratorUrl, (state: ProductFinderState, { oneConfiguratorUrl }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.oneConfiguratorUrl = oneConfiguratorUrl;
    })
  ),
  on(updateProductsDetailsUrl, (state: ProductFinderState, { productsDetailsUrl }) =>
    produce(state, (draft: ProductFinderState) => {
      draft.productsDetailsUrl = productsDetailsUrl;
    })
  ),
  on(requireAtLeastOnePreferenceToBeSelectedError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED;
    })
  ),
  on(requireInternetWhenTvIsSelectedError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = ProductFinderErrorEnum.REQUIRE_INTERNET_WHEN_TV_IS_SELECTED;
    })
  ),
  on(requireAtLeastOneInternetUsageToBeSelectedError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED;
    })
  ),
  on(requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE;
      draft.mobileUsage?.mobileLines.forEach(
        (mobileLine: MobileLine) =>
          (mobileLine.error =
            mobileLine.selection.length === 0
              ? ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED
              : null)
      );
    })
  ),
  on(requireAtLeastOneTvChannelToBeSelectedError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED;
    })
  ),
  on(requireAtLeastOneTvExperienceToBeSelectedError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED;
    })
  ),
  on(clearError, (state: ProductFinderState) =>
    produce(state, (draft: ProductFinderState) => {
      draft.error = null;
    })
  )
);

export const productFinderFeature = createFeature({
  name: PRODUCT_FINDER_FEATURE_KEY,
  reducer: productFinderReducer,
});
