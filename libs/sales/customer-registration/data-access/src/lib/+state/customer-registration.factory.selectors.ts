import { createSelector } from '@ngrx/store';
import { CustomerRegistrationState } from './customer-registration.state';
import { featureState } from './customer-registration.selectors';

export const selectIsPIDEnabledForBusiness = (isBusiness: boolean) =>
  createSelector([featureState], (state: CustomerRegistrationState) => {
    return state.authorConfiguration.isPIDEnabled && isBusiness;
  });
