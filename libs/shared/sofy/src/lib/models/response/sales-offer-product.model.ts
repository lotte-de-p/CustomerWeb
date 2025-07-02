import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SalesOfferProductOption } from './sales-offer-product-option.model';
import { SalesOfferCost } from '../salesOfferCost';
import { SalesOfferProductInstallType } from './sales-offer-product-install-type';
import { SalesOfferPromo } from './sales-offer-promo.model';
import { SalesOfferProductOptin } from './sales-offer-product-optin.model';
import { SalesOfferPricedItem } from './sales-offer-priced-item.model';
import { SalesOfferProductStreamingService } from './sales-offer-product-streaming-service.model';

export enum SalesOfferProductType {
  OPTIONS = 'options',
  OPTINS = 'optinproducts',
  STREAMING_SERVICES = 'streamingservices',
}

export interface SalesOfferProduct extends SalesOfferPricedItem {
  omapiid: string;
  correlationid: string;
  specurl: string;
  productInfo?: OmapiProduct;
  description: string;
  options: SalesOfferProductOption[];
  streamingservices: SalesOfferProductStreamingService[];
  optinproducts: SalesOfferProductOptin[];
  promos: SalesOfferPromo[];
  installtypes: SalesOfferProductInstallType[];
  costs?: SalesOfferCost[];
}
