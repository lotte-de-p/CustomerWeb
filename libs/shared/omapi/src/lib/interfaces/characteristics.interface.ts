import { ConstituentInterface } from './constituent.interface';
import { PricesInterface } from './raw-omapi-product.interface';

export interface CharacteristicsInterface {
  serviceCategory?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  detailedScale?: object; // don't know if this is correct
  productGroup?: string;
  productSubGroup?: string;
  productSegment?: string;
  priceInclVat?: number;
  priceExclVat?: number;
  rentalPriceInclVat?: number;
  rentalPriceExclVat?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  sharedMobileData?: object; // don't know if this is correct
  // eslint-disable-next-line @typescript-eslint/ban-types
  sharedMobileDataUnlimited?: object; // don't know if this is correct
  activationSalesOfferingId?: string;
  maxIncludedDataReminders?: string;
  maxMobileOutOfBundleReminders?: string;
  maxMobileLines?: string;
  recipientsMandatory?: boolean;
  deviceType?: string;
  isSellable?: string;
  weightNl?: number;
  weightFr?: number;
  productTier?: string;
  productLevel?: string;
  prices?: PricesInterface;
  constituents?: ConstituentInterface[];
  esimAvailable?: boolean;
}
