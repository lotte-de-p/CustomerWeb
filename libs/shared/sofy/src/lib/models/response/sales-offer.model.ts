import { SalesOfferProduct } from './sales-offer-product.model';
import { SalesOfferSetupModel } from './sales-offer-setup.model';

export interface SalesOffer {
  products: SalesOfferProduct[];
  setup: SalesOfferSetupModel;
  standaloneoptions: SalesOfferProduct[];
}
