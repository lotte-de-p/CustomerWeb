import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { Prices } from '../../models/prices.model';

export interface RawProductSubscriptionsInterface {
  description?: string;
  id?: string;
  identifier?: string;
  externalProductCode?: string;
  label?: string;
  addressId?: string;
  locationId?: string;
  status?: string;
  activationDate?: string;
  userPIDLinked?: boolean;
  isDataOnlyPlan?: boolean;
  productType?: string;
  bundleIdentifier?: string;
  pid?: string;
  rawOmapi?: RawOmapiProductInterface;
  bundleFamily?: string;
  hasVoiceMail?: boolean;
  internetType?: string;
  useSpecurl?: boolean;
  productOrders?: RawProductOrderInterface[];
  salesOrderId?: string;
  products?: ProductInterface[];
  name?: string;
  options?: RawOption[];
  billingAccountNumber?: string;
  inviteType?: string;
  targetepc?: string;
  chargePeriod?: string;
  prices?: Prices;
  isInteractive?: boolean;
  serialNumber?: string;
  hwReturnDueDate?: string;
  hwClaimFee?: string;
  parentId?: string;
  compositeOrderId?: string;
  deviceType?: string;
  bundleType?: string;
  lineType?: string;
  simType?: string;
  children?: RawProductSubscriptionsInterface[];
}

export interface RawOption {
  rawOmapi: RawOmapiProductInterface;
}

export interface RawProductOrderInterface {
  id: string;
  status: string;
  tasks: RawTaskInterface[];
  customerProduct?: RawCustomerProductInterface;
  chars?: RawProductOrderCharsInterface;
}

export interface RawTaskInterface {
  topic: string;
  status: RawTaskStatusInterface;
}

export interface RawTaskStatusInterface {
  name: string;
}

export interface RawCustomerProductInterface {
  name: string;
  id: string;
  rawOmapi: RawOmapiProductInterface;
}

export interface RawProductOrderCharsInterface {
  serialNumber: string;
  itemCode: string;
}
export interface ProductInterface {
  identifier: string;
  status: string;
  productType: string;
  specurl: string;
  id: string;
  rawOmapi: RawOmapiProductInterface;
  isDataOnlyLine?: boolean;
}
