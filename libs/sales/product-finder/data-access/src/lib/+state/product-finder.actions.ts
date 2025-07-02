import { createAction, props } from '@ngrx/store';
import { Preference } from '../entities/preference/preference.interface';
import { Household } from '../entities/household/household.interface';
import { InternetUsage } from '../entities/internet-usage/internet-usage.interface';
import { MobileLine, MobileUsage } from '../entities/mobile-usage/mobile.usage.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductRecommendation } from '../entities/results-screen/product-recommendation.interface';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

export const initEffects = createAction('[Products Finder] init effects');
export const updateOnMobileDevice = createAction(
  '[Product Finder] update on mobile device',
  props<{ onMobileDevice: boolean }>()
);
export const updateLoginDetails = createAction(
  '[Product Finder] update login details',
  props<{ loginDetails: LoginDetails | null }>()
);
export const updatePromotions = createAction(
  '[Product Finder] update promotions',
  props<{ promotions: Promotion[] }>()
);
export const updateCustomerProductHolding = createAction(
  '[Product Finder] update customer product holding',
  props<{ customerProductHolding: CustomerProductHolding[] }>()
);
export const updatePreference = createAction('[Product Finder] update preference', props<{ preference: Preference }>());
export const updateHousehold = createAction(
  '[Product Finder] update household',
  props<{ household: Household | null }>()
);
export const updateInternetUsage = createAction(
  '[Product Finder] update internet usage',
  props<{ internetUsage: InternetUsage | null }>()
);
export const updateNumberOfSims = createAction(
  '[Product Finder] update number of sims',
  props<{ numberOfSims: number | null }>()
);
export const updateMobileUsage = createAction(
  '[Product Finder] update mobile usage',
  props<{ mobileUsage: MobileUsage | null }>()
);
export const updateMobileLines = createAction(
  '[Product Finder] update mobile lines',
  props<{ mobileLines: MobileLine[] }>()
);
export const updateMobileLineSelection = createAction(
  '[Product Finder] update mobile line selection',
  props<{ index: number; selection: string[] }>()
);
export const updateMobileLineCollapsed = createAction(
  '[Product Finder] update mobile line collapsed',
  props<{ index: number; collapsed: boolean }>()
);
export const updateTvChannels = createAction(
  '[Product Finder] update tv channels',
  props<{ tvChannels: TvChannels | null }>()
);
export const updateTvExperience = createAction(
  '[Product Finder] update tv experience',
  props<{ tvExperience: TvExperience | null }>()
);
export const backupCurrentState = createAction('[Product Finder] backup current state');
export const handlePreferenceChanged = createAction(
  '[Product Finder] handle preference changed',
  props<{ preference: Partial<Preference> }>()
);
export const handleNumberOfSimsChanged = createAction(
  '[Product Finder] handle number of sims changed',
  props<{ numberOfSims: number | null }>()
);
export const getProductRecommendations = createAction('[Product Finder] get product recommendations');
export const getProductRecommendationsSuccess = createAction(
  '[Product Finder] get product recommendations success',
  props<{
    productRecommendationResult: ProductRecommendationResult;
  }>()
);
export const resetStateToInitialState = createAction('[Product Finder] reset state to initial state');
export const updateEnableLoader = createAction(
  '[Product Finder] update enable loader',
  props<{
    enableLoader: boolean;
  }>()
);
export const updateEnableLoaderMask = createAction(
  '[Product Finder] update enable loader mask',
  props<{
    enableLoaderMask: boolean;
  }>()
);
export const updateSalesCheckoutUrl = createAction(
  '[Product Finder] update sales checkout url',
  props<{
    salesCheckoutUrl: string;
  }>()
);
export const updateHumanCheckoutUrl = createAction(
  '[Product Finder] update human checkout url',
  props<{
    humanCheckoutUrl: string;
  }>()
);
export const order = createAction(
  '[Product Finder] order',
  props<{
    index: number;
  }>()
);
export const navigateToSalesCheckout = createAction(
  '[Product Finder] navigate to sales checkout',
  props<{
    productRecommendation: ProductRecommendation;
  }>()
);
export const navigateToHumanCheckout = createAction(
  '[Product Finder] navigate to human checkout',
  props<{
    productRecommendation: ProductRecommendation;
  }>()
);
export const updateOneConfiguratorUrl = createAction(
  '[Product Finder] update ONE configurator url',
  props<{
    oneConfiguratorUrl: string;
  }>()
);
export const updateProductsDetailsUrl = createAction(
  '[Product Finder] update product details url',
  props<{
    productsDetailsUrl: string;
  }>()
);
export const resultDetails = createAction(
  '[Product Finder] result details',
  props<{
    index: number;
  }>()
);
export const navigateToOneConfigurator = createAction(
  '[Product Finder] navigate to ONE configurator',
  props<{
    productRecommendation: ProductRecommendation;
  }>()
);
export const navigateToProductsDetails = createAction(
  '[Product Finder] navigate to products details',
  props<{
    productRecommendation: ProductRecommendation;
  }>()
);
export const requireAtLeastOnePreferenceToBeSelectedError = createAction(
  '[Product Finder] require at least one preference to be selected'
);
export const requireInternetWhenTvIsSelectedError = createAction(
  '[Product Finder] require internet when tv is selected'
);
export const requireAtLeastOneInternetUsageToBeSelectedError = createAction(
  '[Product Finder] require at least one internet usage to be selected'
);
export const requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError = createAction(
  '[Product Finder] require at least one mobile usage to be selected for each mobile line'
);
export const requireAtLeastOneTvChannelToBeSelectedError = createAction(
  '[Product Finder] require at least one tv channel to be selected'
);
export const requireAtLeastOneTvExperienceToBeSelectedError = createAction(
  '[Product Finder] require at least one tv experience to be selected'
);
export const clearError = createAction('[Product Finder] clear error');
