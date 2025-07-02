import { ConstituentInterface } from './constituent.interface';
import { PricesInterface } from './raw-omapi-product.interface';
export interface CharacteristicsInterface {
    serviceCategory?: string;
    detailedScale?: object;
    productGroup?: string;
    productSubGroup?: string;
    productSegment?: string;
    priceInclVat?: number;
    priceExclVat?: number;
    rentalPriceInclVat?: number;
    rentalPriceExclVat?: number;
    sharedMobileData?: object;
    sharedMobileDataUnlimited?: object;
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
//# sourceMappingURL=characteristics.interface.d.ts.map