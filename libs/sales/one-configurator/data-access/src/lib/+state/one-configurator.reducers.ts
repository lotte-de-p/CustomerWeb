import { createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import {
  addSim,
  enable,
  prefill,
  removeSim,
  setCustomerProductHolding,
  setLoginDetails,
  setPromotions,
  updateEntertainmentPacks,
  updateEntertainmentProduct,
  updateOptins,
  updatePriceAfterChangingOneSimToLimited,
  updatePriceAfterChangingOneSimToUnlimited,
  updateStreamingServices,
  updateTier,
  updateUsageType,
} from './one-configurator.actions';
import { SimsState } from '../entities/sims/sims-state.interface';
import { UsageTypeEnum } from '../entities/sims/usage-type.enum';
import { TierState } from '../entities/tier/tier-state.interface';
import { TvState } from '../entities/tv/tv-state.interface';
import { OptinsState } from '../entities/optins/optins-state.interface';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

export const ONE_CONFIGURATOR_FEATURE_KEY = 'one-configurator';

export interface OneConfiguratorSlice {
  [ONE_CONFIGURATOR_FEATURE_KEY]: OneConfiguratorState;
}

export interface OneConfiguratorState {
  enabled: boolean;
  loginDetails: LoginDetails | null;
  customerProductHolding: CustomerProductHolding[];
  promotions: Promotion[];
  tierState: TierState;
  simsState: SimsState;
  tvState: TvState;
  optinsState: OptinsState;
}

export const initialState: OneConfiguratorState = {
  enabled: false,
  loginDetails: null,
  customerProductHolding: [],
  promotions: [],
  tierState: {
    tier: null,
  },
  simsState: {
    simConfigurations: [],
    priceAfterChangingOneSimToLimited: null,
    priceAfterChangingOneSimToUnlimited: null,
  },
  tvState: {
    entertainmentProduct: null,
    entertainmentPacks: [],
    streamingServices: [],
  },
  optinsState: {
    optins: [],
  },
};

export const oneConfiguratorReducer = createReducer(
  initialState,
  on(enable, (state: OneConfiguratorState) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.enabled = true;
    })
  ),
  on(setLoginDetails, (state: OneConfiguratorState, { loginDetails }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.loginDetails = loginDetails;
    })
  ),
  on(setCustomerProductHolding, (state: OneConfiguratorState, { customerProductHolding }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.customerProductHolding = customerProductHolding;
    })
  ),
  on(setPromotions, (state: OneConfiguratorState, { promotions }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.promotions = promotions;
    })
  ),
  on(prefill, (state: OneConfiguratorState, { tierState, simsState }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.tierState.tier = tierState.tier;
      draft.simsState.simConfigurations = simsState.simConfigurations;
    })
  ),
  on(updateTier, (state: OneConfiguratorState, { tier }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.tierState.tier = tier;
    })
  ),
  on(addSim, (state: OneConfiguratorState) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.simsState.simConfigurations = [...draft.simsState.simConfigurations, { usageType: UsageTypeEnum.LIMITED1 }];
    })
  ),
  on(removeSim, (state: OneConfiguratorState) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.simsState.simConfigurations = draft.simsState.simConfigurations.slice(0, -1);
    })
  ),
  on(updateUsageType, (state: OneConfiguratorState, { usageTypeUpdate }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.simsState.simConfigurations[usageTypeUpdate.index].usageType = usageTypeUpdate.usageType;
    })
  ),
  on(updateEntertainmentProduct, (state: OneConfiguratorState, { entertainmentProduct }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.tvState.entertainmentProduct = entertainmentProduct;
      if (entertainmentProduct === null) {
        draft.tvState.entertainmentPacks = [];
        draft.tvState.streamingServices = [];
      }
    })
  ),
  on(updateEntertainmentPacks, (state: OneConfiguratorState, { entertainmentPacks }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.tvState.entertainmentPacks = entertainmentPacks;
    })
  ),
  on(updateStreamingServices, (state: OneConfiguratorState, { streamingServices }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.tvState.streamingServices = streamingServices;
    })
  ),
  on(updateOptins, (state: OneConfiguratorState, { optins }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.optinsState.optins = optins;
    })
  ),
  on(updatePriceAfterChangingOneSimToLimited, (state: OneConfiguratorState, { priceAfterChangingOneSimToLimited }) =>
    produce(state, (draft: OneConfiguratorState) => {
      draft.simsState.priceAfterChangingOneSimToLimited = priceAfterChangingOneSimToLimited;
    })
  ),
  on(
    updatePriceAfterChangingOneSimToUnlimited,
    (state: OneConfiguratorState, { priceAfterChangingOneSimToUnlimited }) =>
      produce(state, (draft: OneConfiguratorState) => {
        draft.simsState.priceAfterChangingOneSimToUnlimited = priceAfterChangingOneSimToUnlimited;
      })
  )
);

export const oneConfiguratorFeature = createFeature({
  name: ONE_CONFIGURATOR_FEATURE_KEY,
  reducer: oneConfiguratorReducer,
});
