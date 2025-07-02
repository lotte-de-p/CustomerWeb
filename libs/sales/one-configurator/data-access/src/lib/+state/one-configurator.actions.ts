import { createAction, props } from '@ngrx/store';
import { Price, SimConfiguration, UsageTypeUpdate } from '../entities/sims/sims-state.interface';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

export const enable = createAction('[ONE Configurator] enable');
export const init = createAction('[ONE Configurator] init');
export const setLoginDetails = createAction(
  '[ONE Configurator] set login details',
  props<{ loginDetails: LoginDetails | null }>()
);
export const setCustomerProductHolding = createAction(
  '[ONE Configurator] set customer product holding',
  props<{ customerProductHolding: CustomerProductHolding[] }>()
);
export const setPromotions = createAction('[ONE Configurator] set promotions', props<{ promotions: Promotion[] }>());
export const prefill = createAction(
  '[ONE Configurator] prefill',
  props<{
    tierState: {
      tier: string;
    };
    simsState: {
      simConfigurations: SimConfiguration[];
    };
  }>()
);
export const updateTier = createAction('[ONE Configurator] update tier', props<{ tier: string }>());
export const addSim = createAction('[ONE Configurator] add sim');
export const removeSim = createAction('[ONE Configurator] remove sim');
export const updateUsageType = createAction(
  '[ONE Configurator] update usage type',
  props<{ usageTypeUpdate: UsageTypeUpdate }>()
);
export const updatePriceAfterChangingOneSimToLimited = createAction(
  '[ONE Configurator] update price after changing one sim to limited',
  props<{ priceAfterChangingOneSimToLimited: Price | null }>()
);
export const updatePriceAfterChangingOneSimToUnlimited = createAction(
  '[ONE Configurator] update price after changing one sim to unlimited',
  props<{ priceAfterChangingOneSimToUnlimited: Price | null }>()
);
export const updateEntertainmentProduct = createAction(
  '[ONE Configurator] update entertainment product',
  props<{ entertainmentProduct: string | null }>()
);
export const updateEntertainmentPacks = createAction(
  '[ONE Configurator] update entertainment packs',
  props<{ entertainmentPacks: string[] }>()
);
export const updateStreamingServices = createAction(
  '[ONE Configurator] update streaming services',
  props<{ streamingServices: string[] }>()
);
export const updateOptins = createAction('[ONE Configurator] update optins', props<{ optins: string[] }>());
