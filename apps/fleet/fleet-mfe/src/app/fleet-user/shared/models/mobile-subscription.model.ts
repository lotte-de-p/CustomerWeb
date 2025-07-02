import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class MobileSubscriptionModel {
  msisdn: string;
  nextBillingDate: string;
  name: string;
  specurl: string;
  status: string;
  activeSocialTariff: string;
  plan: OmapiProduct;
  locationId: string;
  isPrepaid: boolean;
  id: string;
  isBase0Plan: boolean;
}
