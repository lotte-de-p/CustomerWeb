import { OmapiProduct, OmapiProductInterfaceData } from '@telenet/ng-lib-omapi';
import { Address } from '../../models/address.model';
import { Usage } from '../../models/usage.model';
import { Prices } from '../../models/prices.model';
import { ProductTypeEnum } from '../../enums/product-type.enum';

export interface ProductSubscriptionsInterface {
  description: string;
  id: string;
  identifier: string;
  externalProductCode: string;
  label: string;
  addressId: string;
  address?: Address;
  locationId: string;
  status: string;
  productType: string;
  activationDate?: string;
  userPIDLinked?: boolean;
  isDataOnlyPlan?: boolean;
  isMultipleUserPIDLinked?: boolean;
  hasNoLinesMappedToPID?: boolean;
  msisdn?: string;
  biptToolUrl?: string;
  bundleIdentifier?: string;
  usage?: Usage;
  isProrated?: boolean;
  internetType?: string;
  pid?: string;
  spec?: OmapiProductInterfaceData;
  isNewAddress?: boolean;
  bundleFamily?: string;
  hasVoiceMail?: boolean;
  useSpecurl?: boolean;
  productOrders?: ProductOrderInterface[];
  salesOrderId?: string;
  products?: ProductInterface[];
  productInfo?: OmapiProduct;
  name?: string;
  options?: ProductOptionsInterface[];
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
  nextBillingDate?: string;
  specurl?: string;
  activeSocialTariff?: string;
  plan?: OmapiProduct;
  isPrepaid?: boolean;
  isBase0Plan?: boolean;
  lineType?: string;
  simType?: string;
  children?: ProductSubscriptionsInterface[];
  isSelected?: boolean;
  hasEasySwitch?: boolean;
  hasFixedProduct?(): boolean;
  hasProduct?(productType: ProductTypeEnum): boolean;
  isActive?(): boolean;
  isWigoProduct?(): boolean;
  isWhopOrWhoppaProduct?(): boolean;
  isConnect5Bundle?(): boolean;
  isBundleProduct?(): boolean;
  hasActiveDtvAndIntProducts?(): boolean;
}

export interface ProductOptionsInterface {
  productInfo: OmapiProduct;
}

export interface ProductOrderInterface {
  id: string;
  status: string;
  tasks: TaskInterface[];
  customerProduct?: CustomerProductInterface;
  chars?: ProductOrderCharsInterface;
}

export interface TaskInterface {
  topic: string;
  status: TaskStatusInterface;
}

export interface TaskStatusInterface {
  name: string;
}

export interface CustomerProductInterface {
  name: string;
  id: string;
  productInfo?: OmapiProduct;
}

export interface ProductOrderCharsInterface {
  serialNumber: string;
  itemCode: string;
  portIn?: boolean;
}

export interface ProductInterface {
  identifier?: string;
  status: string;
  productType: string;
  specurl: string;
  id: string;
  productInfo?: OmapiProduct;
  isDataOnlyLine?: boolean;
}
