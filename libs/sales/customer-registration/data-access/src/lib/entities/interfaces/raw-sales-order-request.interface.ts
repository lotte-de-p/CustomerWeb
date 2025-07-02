import { ApplyMethodEnum } from './apply-method.enum';
import { AddressRequestInterface } from './address-request.interface';

export interface RawSalesOrderRequestInterface {
  id?: string;
  type?: string;
  offers?: Offer[];
  orderItemId?: string;
  chars?: RawCharsInterface;
  installation?: RawInstallationInterface;
  customerId?: string;
  serviceabilityCheckRequired?: boolean;
  campaignPromotionCodes?: string[];
}

export interface Offer {
  id?: string;
  itemCode?: string;
  type: string;
  action?: string;
  offers?: Offer[];
  orderItemId?: string;
  name?: string;
  customerChosenDiscount?: CustomerChosenDiscountInterFace;
  isExternalContentPack?: string;
  chars?: CustomerChosenDomainInterface;
}

export interface CustomerChosenDiscountInterFace {
  type: string;
  id?: string;
  price: string;
  endvalidityDate?: string;
  discountInfo?: DiscountInfoInterface;
}

export interface RawCharsInterface {
  'eShop URL for PEGA'?: string;
  'Customer Location Address'?: string;
  'Billing Account Address'?: string;
  'Installation Location Address'?: string;
  'Service Type'?: string;
  orderingType?: string;
  domainName?: string;
  extention?: string;
  transferCode?: string;
}

export interface RawInstallationInterface {
  location?: { id: string };
  address?: { id: string };
  manualAddress?: AddressRequestInterface;
  chars?: RawCharsInterface;
}

export interface DiscountInfoInterface {
  applyMethod: ApplyMethodEnum;
  contractIdForTermination?: string;
}

export interface CustomerChosenDomainInterface {
  orderingType: string;
  domainName: string;
  extention: string;
  transferCode: string;
}
