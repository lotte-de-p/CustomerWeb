import { MockMarketingProduct } from './mock-marketing-product.model';

export class MockCreateSalesOrderRequest {
  offers: MockCreateSalesOrderRequestBody[];
  campaignPromotionCodes?: string[];
}

export interface CustomerChosenDiscountInterFace {
  type: string;
  id?: string;
  price: string;
  endvalidityDate?: string;
}

export interface CustomerChosenDomainInterface {
  orderType: string;
  domainName: string;
  extention: string;
}

export interface CustomerChosenManualDiscountInterface {
  type: string;
  discountCode: string;
}
export class MockCreateSalesOrderRequestBody {
  id?: string;
  itemCode?: string;
  type?: string;
  customerChosenDiscount?: CustomerChosenDiscountInterFace;
  offers: MockCreateSalesOrderRequestBody[];
  orderType?: string;
  domainName?: string;
  extention?: string;
  chars?: CustomerChosenDomainInterface[];
}

export interface MockSelectedProductInterface {
  product: MockMarketingProduct;
  isProductTypeHardwareCheck: boolean;
  manualDiscount: CustomerChosenManualDiscountInterface;
}
