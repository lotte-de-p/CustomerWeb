import { Prices } from '../models/prices.model';
import { DiscountItemInterface } from './discount-item.interface';

export interface FeasibilityCheckResultInterface {
  isFeasible: boolean;
  interventionRequired: boolean;
  availableInstallationOptions: AvailableInstallationOptionInterface[];
  isDeliveryEmptyForSelfInstall?: boolean;
}

export interface AvailableInstallationOptionInterface {
  name: string;
  normalizedName: string;
  id?: string;
  installTypeGroup: string;
  normalizedInstallTypeGroup: string;
  deliveryGroup?: string;
  prices?: Prices;
  discountItems?: DiscountItemInterface;
  filterRemovalRequired?: boolean;
}
