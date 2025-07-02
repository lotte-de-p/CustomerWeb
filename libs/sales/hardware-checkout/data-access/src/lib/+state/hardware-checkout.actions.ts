import { createAction, props } from '@ngrx/store';
import { MissingIdentityDataInterface } from '../interfaces/missing-identity-data.interface';
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

export const setUrlRequestParameters = createAction(
  '[hardware - checkout] save URL request parameters',
  props<{ urlRequestParameters: UrlRequestParameters }>()
);

export const setReferrerUrl = createAction(
  '[hardware - checkout] set the referrerUrl',
  props<{ referrerUrl: string }>()
);

export const setOmapiQueryProducts = createAction(
  '[hardware - checkout] store omapi query products',
  props<{ omapiProducts: RawOmapiQueryProductInterfaceData[] }>()
);

export const setOmapiProducts = createAction(
  '[hardware - checkout] store omapi products',
  props<{ omapiProducts: OmapiProduct[] }>()
);

export const setBillingAccounts = createAction(
  '[hardware - checkout] set billing accounts',
  props<{ billingAccounts: BillingAccount[] }>()
);

export const setContractSummaryRequired = createAction(
  '[hardware - checkout] set the state of the contract summary requirement',
  props<{ contractSummaryRequired: boolean }>()
);

export const setContractSummaryUrl = createAction(
  '[hardware - checkout] set the contract summary url once it is generated',
  props<{ contractSummaryUrl: string }>()
);

export const setContractSummaryGenerationNotPossible = createAction(
  '[hardware - checkout] set the contract summary generation not possible'
);

export const saveSalesOrder = createAction('[hardware - checkout] save sales order', props<SalesOrder>());

export const setSalesOrderState = createAction(
  '[hardware - checkout] set the state of the sales order',
  props<{ salesOrderState: SalesOrderStateEnum }>()
);

export const setViewState = createAction('[hardware - checkout] set viewstate', props<{ viewState: ViewState }>());

export const setBackButtonVisibility = createAction(
  '[hardware - checkout] set back button visibility',
  props<{
    backButtonVisibility: boolean;
  }>()
);

export const setCustomerType = createAction(
  '[hardware - checkout] set customer type',
  props<{
    customerType: CustomerTypeEnum;
  }>()
);

export const setAnalyticsAttributes = createAction(
  '[hardware - checkout] set analytics attributes',
  props<{
    analyticsAttributes: DataLayerAttributes;
  }>()
);

export const setCustomerAccountDetails = createAction(
  '[hardware - checkout] set customer account details',
  props<{
    customerAccountDetails: CustomerAccountDetails;
  }>()
);

export const setPersonalIdentity = createAction(
  '[hardware - checkout] set personal identity',
  props<{
    personalIdentity: PersonalIdentity;
  }>()
);

export const setNavigationState = createAction(
  '[hardware - checkout] set navigation state',
  props<{ navigationState: boolean }>()
);

export const setAemInput = createAction('[hardware - checkout] set aem input', props<{ aemInput: AemInput }>());

export const setCart = createAction('[hardware - checkout] set cart', props<{ cart: Cart }>());
export const setMissingIdentityData = createAction(
  '[hardware - checkout] set missing identity data',
  props<{ missingIdentityData: MissingIdentityDataInterface }>()
);

export const setStartStepLoadTime = createAction('[analytics] set start step load time');
export const resetStepLoadTime = createAction('[analytics] reset step load time');
