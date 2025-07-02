import { ProductInterface } from './product.interface';
import { Promotion } from '../models/promotion.model';
import { SofyCustomerProductHoldingProduct } from '../models/sofy-customer-product-holding-product';
import { SofyModemDetails } from '../models/sofy-modem-details';
import { CustomerInstallationDetailsInterface } from './installation-details-response.interface';
import { SofyRequestProduct } from '../models/request';
import { SofyProduct } from '../models/sofy-product';

export interface SalesOfferInterface {
  products: ProductInterface[];
  standaloneOptions: ProductInterface[];
  ownedProducts: ProductInterface[];
}

export interface SalesOfferConfig {
  exclVat: boolean;
  inclPromo: boolean;
}

export interface SalesOfferData {
  promotions: Promotion[];
  customerproductholding: SofyCustomerProductHoldingProduct[];
  modemdetails: SofyModemDetails[];
  voucherpromo?: string;
  campaigncode?: string;
  customerinstallationdetails?: CustomerInstallationDetailsInterface;
  products: SofyRequestProduct[] | SofyProduct[];
  standaloneoptions?: SofyRequestProduct[];
}
