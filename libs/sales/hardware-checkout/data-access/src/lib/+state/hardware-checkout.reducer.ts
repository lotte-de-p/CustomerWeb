import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { MissingIdentityDataInterface } from '../interfaces/missing-identity-data.interface';
import { defaultState, HardwareCheckoutState } from './hardware-checkout.state';
import { produce } from 'immer';
import {
  resetStepLoadTime,
  saveSalesOrder,
  setAemInput,
  setAnalyticsAttributes,
  setBackButtonVisibility,
  setBillingAccounts,
  setCart,
  setContractSummaryGenerationNotPossible,
  setContractSummaryRequired,
  setContractSummaryUrl,
  setCustomerAccountDetails,
  setCustomerType,
  setMissingIdentityData,
  setNavigationState,
  setOmapiProducts,
  setOmapiQueryProducts,
  setPersonalIdentity,
  setReferrerUrl,
  setSalesOrderState,
  setStartStepLoadTime,
  setUrlRequestParameters,
  setViewState,
} from './hardware-checkout.actions';
import { ViewState } from '../interfaces/view-state.interface';
import { SalesOrderStateEnum } from '../enums/sales-order-state.enum';
import { BillingAccount } from '../interfaces/billing-account.interface';
import { SalesOrder } from '../interfaces/sales-order.interface';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';
import { CustomerTypeEnum } from '../enums/customer-type.enum';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { AemInput } from '../interfaces/aem.input';
import { Cart } from 'udl';
import { UrlRequestParameters } from '../interfaces/url-request-parameters.interface';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { CustomerAccountDetails } from '../customer-account/customer-account-details.interface';
import { PersonalIdentity } from '../personal-identity/personal-identity.interface';

export const HARDWARE_CHECKOUT_FEATURE_KEY = 'hardwarecheckout';

export const reducer = createReducer(
  defaultState,
  on(setUrlRequestParameters, (state: HardwareCheckoutState, props: { urlRequestParameters: UrlRequestParameters }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.urlRequestParameters = props.urlRequestParameters;
    });
  }),
  on(setReferrerUrl, (state: HardwareCheckoutState, props: { referrerUrl: string }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.referrerUrl = props.referrerUrl;
    });
  }),
  on(
    setOmapiQueryProducts,
    (state: HardwareCheckoutState, props: { omapiProducts: RawOmapiQueryProductInterfaceData[] }) => {
      return produce(state, (draft: HardwareCheckoutState) => {
        draft.omapiQueryProducts = props.omapiProducts;
      });
    }
  ),
  on(setOmapiProducts, (state: HardwareCheckoutState, props: { omapiProducts: OmapiProduct[] }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.omapiProducts = props.omapiProducts;
    });
  }),
  on(setBillingAccounts, (state: HardwareCheckoutState, props: { billingAccounts: BillingAccount[] }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.billingAccounts = props.billingAccounts;
    });
  }),
  on(setContractSummaryRequired, (state: HardwareCheckoutState, props: { contractSummaryRequired: boolean }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.contractSummaryRequired = props.contractSummaryRequired;
    });
  }),
  on(setContractSummaryUrl, (state: HardwareCheckoutState, props: { contractSummaryUrl: string }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.contractSummaryUrl = props.contractSummaryUrl;
    });
  }),
  on(setContractSummaryGenerationNotPossible, (state: HardwareCheckoutState) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.contractSummaryGenerationNotPossible = true;
    });
  }),
  on(saveSalesOrder, (state: HardwareCheckoutState, salesOrder: SalesOrder) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.salesOrder = salesOrder;
    });
  }),
  on(setSalesOrderState, (state: HardwareCheckoutState, props: { salesOrderState: SalesOrderStateEnum }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.salesOrderState = props.salesOrderState;
    });
  }),
  on(setViewState, (state: HardwareCheckoutState, props: { viewState: ViewState }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.viewState = props.viewState;
    });
  }),
  on(setBackButtonVisibility, (state: HardwareCheckoutState, props: { backButtonVisibility: boolean }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.viewState.showBackButton = props.backButtonVisibility;
    });
  }),
  on(setCustomerType, (state: HardwareCheckoutState, props: { customerType: CustomerTypeEnum }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.customerType = props.customerType;
    });
  }),
  on(setAnalyticsAttributes, (state: HardwareCheckoutState, props: { analyticsAttributes: DataLayerAttributes }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.analyticsAttributes = props.analyticsAttributes;
    });
  }),
  on(
    setCustomerAccountDetails,
    (state: HardwareCheckoutState, props: { customerAccountDetails: CustomerAccountDetails }) => {
      return produce(state, (draft: HardwareCheckoutState) => {
        draft.customerAccountDetails = props.customerAccountDetails;
      });
    }
  ),
  on(setPersonalIdentity, (state: HardwareCheckoutState, props: { personalIdentity: PersonalIdentity }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.personalIdentity = props.personalIdentity;
    });
  }),
  on(setNavigationState, (state: HardwareCheckoutState, props: { navigationState: boolean }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.viewState.showNavigation = props.navigationState;
    });
  }),
  on(setAemInput, (state: HardwareCheckoutState, props: { aemInput: AemInput }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.aemInput = props.aemInput;
    });
  }),
  on(setCart, (state: HardwareCheckoutState, props: { cart: Cart }) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.cart = props.cart;
    });
  }),
  on(setStartStepLoadTime, (state: HardwareCheckoutState) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.stepAnalyticsInfo.startLoadTime = new Date().getTime();
    });
  }),
  on(resetStepLoadTime, (state: HardwareCheckoutState) => {
    return produce(state, (draft: HardwareCheckoutState) => {
      draft.stepAnalyticsInfo.startLoadTime = undefined;
    });
  }),
  on(
    setMissingIdentityData,
    (state: HardwareCheckoutState, props: { missingIdentityData: MissingIdentityDataInterface }) => {
      return produce(state, (draft: HardwareCheckoutState) => {
        draft.missingData = props.missingIdentityData;
      });
    }
  )
);

export function hardwareCheckoutReducer(
  state: HardwareCheckoutState = defaultState,
  action: Action
): HardwareCheckoutState {
  return reducer(state, action);
}

export const hardwareCheckoutFeature = createFeature({
  name: HARDWARE_CHECKOUT_FEATURE_KEY,
  reducer: hardwareCheckoutReducer,
});
