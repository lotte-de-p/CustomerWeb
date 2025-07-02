import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface RawMobileSubscriptionsInterface {
  data: RawMobileSubscription[];
}

export interface RawMobileSubscription {
  msisdn: string;
  nextBillingDate: string;
  name: string;
  specurl: string;
  status: string;
  activeSocialTariff: string;
  rawOmapi: RawOmapiProductInterface;
  locationId: string;
  id: string;
}
