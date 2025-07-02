import { SofyRequestProduct } from './sofy-request-product';

export interface SofyRequestBasket {
  products?: SofyRequestProduct[];
  standaloneOptions?: SofyRequestProduct[];
  campaignCode?: string;
}
