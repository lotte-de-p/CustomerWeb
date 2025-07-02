import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { RawSalesOrderRequestInterface } from '../entities/interfaces/raw-sales-order-request.interface';
import {
  getAddressErrorAction,
  getAddressSuccessAction,
  getLocationErrorAction,
  getLocationsSuccessAction,
  getNavsErrorAction,
  getSalesOrderRequestDataAction,
  getStreetsErrorAction,
  getStreetsSuccessAction,
  itsMeSearchSuccessAction,
  navsSuccessAction,
  omapiProductExtractionErrorAction,
  omapiProductExtractionSuccessAction,
  resetError,
  resetSearchCustomerSuccessAction,
  performItsMeSearchAction,
  saveBusinessIdentityDetailsAction,
  saveIdentityDetailsAction,
  savePersonalDetailsAction,
  searchCustomerErrorAction,
  searchCustomerSuccessAction,
  searchItsMeCustomerErrorAction,
  setAuthorConfigurationAction,
  setBrand,
  setCategory,
  setProductDetailsAction,
  performLegalEntitySuccessAction,
  performLegalEntityErrorAction,
  getBoxNoAction,
  getSubHouseNoAction,
  SetAddressStoreAction,
  setLanguageAction,
} from './customer-registration.actions';
import {
  AuthorConfiguration,
  BusinessIdentityDetails,
  CustomerRegistrationState,
  defaultState,
  IdentityDetails,
  PersonalDetails,
  SearchCustomerResult,
} from './customer-registration.state';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { ItsMeFormattingUtil } from '../util/its-me-formatting.util';

export const reducer = createReducer(
  defaultState,
  on(setAuthorConfigurationAction, (state: CustomerRegistrationState, authorConfiguration: AuthorConfiguration) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.authorConfiguration = authorConfiguration;
    })
  ),
  on(setBrand, (state: CustomerRegistrationState, { brand }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.brand = brand;
    })
  ),
  on(setCategory, (state: CustomerRegistrationState, { category }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.category = category;
    })
  ),
  on(savePersonalDetailsAction, (state: CustomerRegistrationState, personalDetails: PersonalDetails) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.userInput.personalDetails = personalDetails;
    })
  ),
  on(saveIdentityDetailsAction, (state: CustomerRegistrationState, identityDetails: IdentityDetails) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.userInput.identityDetails = identityDetails;
    })
  ),
  on(getLocationsSuccessAction, (state: CustomerRegistrationState, { locations }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.locations = locations;
    })
  ),
  on(
    getSalesOrderRequestDataAction,
    (state: CustomerRegistrationState, salesOrderRequestData: RawSalesOrderRequestInterface) =>
      produce(state, (draft: CustomerRegistrationState) => {
        draft.salesOrderRequestData = salesOrderRequestData;
      })
  ),
  on(getStreetsSuccessAction, (state: CustomerRegistrationState, { streets }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.streets = streets;
    })
  ),
  on(getAddressSuccessAction, (state: CustomerRegistrationState, { address }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.address = [];
      draft.address = address;
    })
  ),

  on(getBoxNoAction, (state: CustomerRegistrationState, { address }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.boxNumbers = address
        .map((address) => address.boxNumber)
        .filter((boxNumber): boxNumber is string => !!boxNumber);
    })
  ),

  on(getSubHouseNoAction, (state: CustomerRegistrationState, { address }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.subHouseNumbers = address
        .map((address) => address.subHouseNumber)
        .filter((subHouseNumber): subHouseNumber is string => !!subHouseNumber);
    })
  ),

  on(SetAddressStoreAction, (state: CustomerRegistrationState, { address }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      const addressType = address.addressType;
      const currentAddresses: AddressStoreInterface[] = draft.addressStore;

      if (currentAddresses && currentAddresses.length > 0) {
        const existingAddressIndex = currentAddresses.findIndex(
          (currentAddress) => currentAddress.addressType === addressType
        );
        if (existingAddressIndex !== -1) {
          currentAddresses[existingAddressIndex] = address;
        } else {
          currentAddresses.push(address);
        }
      } else {
        draft.addressStore = [address];
      }
    })
  ),
  on(getStreetsErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(getLocationErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(getAddressErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(searchCustomerErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(resetSearchCustomerSuccessAction, (state: CustomerRegistrationState) =>
    produce(state, (draft: CustomerRegistrationState) => {
      const restCustomerResponse: SearchCustomerResult = {
        firstName: '',
        lastName: '',
        id: '',
        status: '',
        type: '',
        customerNumber: '',
      };
      draft.searchCustomerResult = restCustomerResponse;
    })
  ),
  on(getNavsErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(omapiProductExtractionErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(searchItsMeCustomerErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(performLegalEntitySuccessAction, (state: CustomerRegistrationState, { legalEntityResponse }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.legalEntityDetails = legalEntityResponse;
    })
  ),
  on(performLegalEntityErrorAction, (state: CustomerRegistrationState, { error }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = error;
    })
  ),
  on(performLegalEntitySuccessAction, (state: CustomerRegistrationState, { legalEntityResponse }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.legalEntityDetails = legalEntityResponse;
    })
  ),
  on(setProductDetailsAction, (state: CustomerRegistrationState, { details }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.productDetails = details;
    })
  ),
  on(
    saveBusinessIdentityDetailsAction,
    (state: CustomerRegistrationState, businessIdentityDetails: BusinessIdentityDetails) =>
      produce(state, (draft: CustomerRegistrationState) => {
        draft.userInput.businessIdentityDetails = businessIdentityDetails;
      })
  ),
  on(navsSuccessAction, (state: CustomerRegistrationState, { navsResponse }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.navsResult = navsResponse;
    })
  ),
  on(searchCustomerSuccessAction, (state: CustomerRegistrationState, { customerResponse }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.searchCustomerResult = customerResponse;
      draft.error = undefined;
    })
  ),
  on(omapiProductExtractionSuccessAction, (state: CustomerRegistrationState, { products }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.omapiProducts = products;
    })
  ),
  on(resetError, (state: CustomerRegistrationState) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.error = undefined;
    })
  ),
  on(performItsMeSearchAction, (state: CustomerRegistrationState, { itsMeParams: itsMeParams }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.itsMeParams = itsMeParams;
    })
  ),
  on(itsMeSearchSuccessAction, (state: CustomerRegistrationState, { itsMeResponse: itsMeResponse }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.itsMeResult = ItsMeFormattingUtil.formatItsMeResponse(itsMeResponse);
    })
  ),
  on(setLanguageAction, (state: CustomerRegistrationState, { language }) =>
    produce(state, (draft: CustomerRegistrationState) => {
      draft.language = language;
    })
  )
);

export function customerRegistrationReducer(
  state: CustomerRegistrationState = defaultState,
  action: Action
): CustomerRegistrationState {
  return reducer(state, action);
}

export const customerRegistrationFeature = createFeature({
  name: 'customerRegistrationFeature',
  reducer: customerRegistrationReducer,
});
