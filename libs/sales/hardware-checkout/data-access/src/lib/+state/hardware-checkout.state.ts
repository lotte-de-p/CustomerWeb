import { MissingIdentityDataInterface } from '../interfaces/missing-identity-data.interface';
import { ViewState } from '../interfaces/view-state.interface';
import { ViewStateEnum } from '../enums/view-state.enum';
import { SalesOrderStateEnum } from '../enums/sales-order-state.enum';
import { BillingAccount } from '../interfaces/billing-account.interface';
import { SalesOrder } from '../interfaces/sales-order.interface';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';
import { CustomerTypeEnum } from '../enums/customer-type.enum';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { AemInput } from '../interfaces/aem.input';
import { BrandEnum } from '../enums/brand.enum';
import { Cart } from 'udl';
import { UrlRequestParameters } from '../interfaces/url-request-parameters.interface';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { CustomerAccountDetails } from '../customer-account/customer-account-details.interface';
import { PersonalIdentity } from '../personal-identity/personal-identity.interface';

export interface StepAnalyticsInfo {
  startLoadTime: number | undefined;
}

export interface HardwareCheckoutState {
  urlRequestParameters: UrlRequestParameters | undefined;
  salesOrder: SalesOrder | undefined;
  referrerUrl: string | undefined;
  omapiQueryProducts: RawOmapiQueryProductInterfaceData[] | undefined;
  omapiProducts: OmapiProduct[] | undefined;
  billingAccounts: BillingAccount[] | undefined;
  contractSummaryRequired: boolean | undefined;
  contractSummaryUrl: string | undefined;
  contractSummaryGenerationNotPossible: boolean;
  viewState: ViewState;
  salesOrderState: SalesOrderStateEnum;
  customerType: CustomerTypeEnum;
  customerAccountDetails: CustomerAccountDetails | undefined;
  personalIdentity: PersonalIdentity | undefined;
  aemInput: AemInput | undefined;
  brand: BrandEnum;
  cart: Cart | undefined;
  analyticsAttributes: DataLayerAttributes | undefined;
  stepAnalyticsInfo: StepAnalyticsInfo;
  missingData: MissingIdentityDataInterface | undefined;
}

export const defaultState: HardwareCheckoutState = {
  urlRequestParameters: undefined,
  salesOrder: undefined,
  referrerUrl: undefined,
  omapiQueryProducts: undefined,
  omapiProducts: undefined,
  billingAccounts: undefined,
  contractSummaryRequired: undefined,
  contractSummaryUrl: undefined,
  contractSummaryGenerationNotPossible: false,
  salesOrderState: SalesOrderStateEnum.INITIALISING,
  viewState: {
    key: ViewStateEnum.STEPPER,
    showNavigation: true,
    showBackButton: true,
  },
  customerType: CustomerTypeEnum.RESIDENTIAL,
  customerAccountDetails: undefined,
  personalIdentity: undefined,
  aemInput: undefined,
  brand: BrandEnum.TELENET,
  analyticsAttributes: undefined,
  cart: undefined,
  stepAnalyticsInfo: { startLoadTime: undefined },
  missingData: undefined,
};
