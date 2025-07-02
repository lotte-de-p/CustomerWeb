import { EligibleOfferInterface } from './eligible-offers.interface';
import { GroupBundleInterface } from './group-bundle.interface';

export interface ProductMsaInterface {
  masterAgreementName: string;
  eligibleOffers: EligibleOfferInterface[];
  groupBundles: GroupBundleInterface[];
}
