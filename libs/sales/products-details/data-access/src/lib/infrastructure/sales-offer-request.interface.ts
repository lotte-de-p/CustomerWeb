import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';
import { OfferRequest } from './offer-request.interface';

export interface SalesOfferRequest {
  offers: OfferRequest[];
  promotions: Promotion[] | null;
  customerProductHolding: CustomerProductHolding[] | null;
}
