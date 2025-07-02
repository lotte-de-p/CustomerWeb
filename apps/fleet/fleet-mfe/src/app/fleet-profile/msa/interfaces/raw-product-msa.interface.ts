import { RawEligibleOfferInterface } from './raw-eligiblie-products.interface';
import { RawGroupBundleInterface } from './raw-group-bundle.interface';

export interface RawProductMsaInterface {
  masterAgreementName: string;
  eligibleOffers: RawEligibleOfferInterface[];
  groupBundles: RawGroupBundleInterface[];
}
