import { ServiceTranslation } from '../service-translation.model';

export interface Subscription {
  serviceName: string;
  companyId: number;
  recurring: boolean;
  renewalPeriod: RenewalPeriod;
  startDate: string;
  endDate: string;
  price: number;
  priceUnit: string;
  serviceTranslation: ServiceTranslation;
  status: SubscriptionStatus;
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  INVALID = 'INVALID',
  ON_HOLD = 'ON_HOLD',
}

export interface RenewalPeriod {
  period: number;
  units: string;
}
