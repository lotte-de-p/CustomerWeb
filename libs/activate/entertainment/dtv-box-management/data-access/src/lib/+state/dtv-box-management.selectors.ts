import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DtvBoxManagementState } from './dtv-box-management.state';
import { DTV_BOX_MANAGEMENT_FEATURE_KEY } from './dtv-box-management.reducer';
import { DtvBoxSubscription } from '../entities/subscription.model';
import { Address } from '../entities/address.model';

export const dtvBoxManagementFeature = createFeatureSelector<DtvBoxManagementState>(DTV_BOX_MANAGEMENT_FEATURE_KEY);

export const selectSubscriptionsWithDtvBoxes = createSelector(dtvBoxManagementFeature, (state: DtvBoxManagementState) =>
  state.subscriptions.filter((subscription: DtvBoxSubscription) => subscription.dtvBoxes.length > 0)
);

export const selectSubscriptions = createSelector(
  dtvBoxManagementFeature,
  (state: DtvBoxManagementState) => state.subscriptions
);

export const selectAddresses = createSelector(
  dtvBoxManagementFeature,
  (state: DtvBoxManagementState) => state.addresses
);

export const selectSelectedAddress = createSelector(dtvBoxManagementFeature, (state) => state.selectedAddress);

export const selectSubscriptionsBySelectedAddress = createSelector(
  selectSelectedAddress,
  selectSubscriptions,
  (selectedAddress: Address | undefined, subscriptions: DtvBoxSubscription[]) =>
    subscriptions.filter((subscription: DtvBoxSubscription) => subscription.addressId === selectedAddress?.id)
);

export const selectIsPinCodeReset = createSelector(
  dtvBoxManagementFeature,
  (state: DtvBoxManagementState) => state.isPinCodeReset
);

export const selectShowSecurityCode = createSelector(
  dtvBoxManagementFeature,
  (state: DtvBoxManagementState) => state.showSecurityCode
);

export const selectError = createSelector(dtvBoxManagementFeature, (state: DtvBoxManagementState) => state.error);
