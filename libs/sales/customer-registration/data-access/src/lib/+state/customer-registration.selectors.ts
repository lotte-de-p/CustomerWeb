import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CustomerRegistrationState } from './customer-registration.state';

export const featureState = createFeatureSelector<CustomerRegistrationState>('customerRegistrationFeature');
export const selectUserInput = createSelector([featureState], (state: CustomerRegistrationState) => state.userInput);
export const selectBrand = createSelector([featureState], (state: CustomerRegistrationState) => state.brand);
export const selectCategory = createSelector([featureState], (state: CustomerRegistrationState) => state.category);

export const selectPersonalDetails = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.userInput.personalDetails
);
export const selectPrivacyPolicyUrl = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.authorConfiguration.privacyPolicyUrl
);
export const selectMarketingUrl = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.authorConfiguration.marketingUrl
);
export const isPidEnabled = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.authorConfiguration.isPIDEnabled
);
export const selectPointOfSalesUrl = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.authorConfiguration.pointOfSalesUrl
);
export const selectRequestHelpUrl = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.authorConfiguration.requestHelpUrl
);
export const selectLocations = createSelector([featureState], (state: CustomerRegistrationState) => state.locations);
export const selectStreets = createSelector([featureState], (state: CustomerRegistrationState) => state.streets);
export const selectAddressData = createSelector([featureState], (state: CustomerRegistrationState) => state.address);
export const selectBoxNumbers = createSelector([featureState], (state: CustomerRegistrationState) => state.boxNumbers);
export const selectIsBelgianIdentity = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.userInput?.identityDetails?.isBelgianIdentity
);
export const selectSubHouseNumbers = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.subHouseNumbers
);
export const selectAddressStore = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.addressStore
);
export const selectSalesOrder = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.salesOrderRequestData
);

export const selectNavsCheckResult = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.navsResult
);

export const selectSearchCustomerResultType = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.searchCustomerResult?.type
);

export const selectSearchCustomerResultExists = createSelector([featureState], (state: CustomerRegistrationState) => {
  return (
    Object.keys(state.searchCustomerResult).length !== 0 &&
    state.searchCustomerResult?.type === 'hard' &&
    !['Prospect', 'Pending Activation', 'Former'].includes(state.searchCustomerResult?.status)
  );
});

export const selectSearchCustomerResultSoftMatchExists = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => {
    return Object.keys(state.searchCustomerResult).length !== 0 && state.searchCustomerResult?.type === 'soft';
  }
);
export const selectOmapiProduct = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.omapiProducts
);

export const selectError = createSelector([featureState], (state: CustomerRegistrationState) => state.error?.error);

export const selectDOB = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.userInput?.identityDetails?.dateOfBirth
);

export const selectBusinessIdentityDetails = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.userInput.businessIdentityDetails
);

export const selectLegalEntityDetails = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.legalEntityDetails
);

export const selectAddressByType = (addressType: string) =>
  createSelector([featureState], (state: CustomerRegistrationState) =>
    state.addressStore.find((address) => address.addressType === addressType)
  );

export const selectItsMeParams = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.itsMeParams
);

export const selectItsMeResponse = createSelector(
  [featureState],
  (state: CustomerRegistrationState) => state.itsMeResult
);

export const selectLanguage = createSelector([featureState], (state: CustomerRegistrationState) => state.language);
