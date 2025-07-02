import { CharsDto } from './dto/customer-product-holding-dto.interface';

export interface ManageProductsRequest {
  productIdentifierType?: string;
  productIdentifier?: string;
  productType?: string;
  locationId?: string;
  id?: string;
  category?: string;
  product?: ProductIdRequest;
  offers?: OfferRequest[];
  customerId?: string;
  chars?: CharsDto;
  campaignPromotionCodes?: string[];
  impactedProductIdentifiers?: string[];
  apolloBoxInStock?: boolean;
}
export interface OfferRequest {
  id?: string;
  itemCode?: string;
  action?: string;
  orderItemId?: string;
  activeTrial?: string;
  type?: string;
  offers?: OfferRequest[];
  category?: string;
  customerProductId?: string;
  productIdentifier?: string;
  chars?: CharsDto;
}

interface ProductIdRequest {
  id?: string;
  locationId?: string;
}
