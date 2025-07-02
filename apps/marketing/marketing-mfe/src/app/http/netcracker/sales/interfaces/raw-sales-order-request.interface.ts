import { AddressRequestInterface } from '../../../common/address/interfaces/address-request.interface';
import { ApplyMethodEnum } from '../enums/apply-method.enum';

export interface RawSalesOrderRequestInterface {
  id?: string;
  type?: string;
  offers?: Offer[];
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
  name?: string;
  customerChosenDiscount?: CustomerChosenDiscountInterFace;
  isExternalContentPack?: string;
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
