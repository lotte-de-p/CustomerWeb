import * as Factory from 'factory.ts';
import { SalesOfferPromoPeriod } from './sales-offer-promo-period.model';
import { SalesOfferPromo } from './sales-offer-promo.model';
import { SalesOfferProductOption } from './sales-offer-product-option.model';
import { SalesOfferProductOptin } from './sales-offer-product-optin.model';
import { SalesOfferSetupModel } from './sales-offer-setup.model';
import { SalesOfferProductInstallType } from './sales-offer-product-install-type';
import { SalesOfferCost } from '../salesOfferCost';
import { SalesOfferProduct } from './sales-offer-product.model';
import { SalesOffer } from './sales-offer.model';
import { SalesOfferProductStreamingService } from './sales-offer-product-streaming-service.model';
export declare const salesOfferPromoPeriodFactory: Factory.Sync.Factory<SalesOfferPromoPeriod, keyof SalesOfferPromoPeriod>;
export declare const salesOfferPromoFactory: Factory.Sync.Factory<SalesOfferPromo, keyof SalesOfferPromo>;
export declare const salesOfferProductOptionFactory: Factory.Sync.Factory<SalesOfferProductOption, keyof SalesOfferProductOption>;
export declare const salesOfferProductStreamingServiceFactory: Factory.Sync.Factory<SalesOfferProductStreamingService, keyof SalesOfferProductStreamingService>;
export declare const salesOfferProductOptinFactory: Factory.Sync.Factory<SalesOfferProductOptin, keyof SalesOfferProductOptin>;
export declare const SalesOfferSetupModelFactory: Factory.Sync.Factory<SalesOfferSetupModel, "easyswitcheligible">;
export declare const salesOfferProductPreInstallTypeFactory: Factory.Sync.Factory<SalesOfferProductInstallType, keyof SalesOfferProductInstallType>;
export declare const salesOfferProductComfortInstallTypeFactory: Factory.Sync.Factory<SalesOfferProductInstallType, keyof SalesOfferProductInstallType>;
export declare const salesOfferProductSelfInstallTypeFactory: Factory.Sync.Factory<SalesOfferProductInstallType, keyof SalesOfferProductInstallType>;
export declare const salesOfferCostFactory: Factory.Sync.Factory<SalesOfferCost, keyof SalesOfferCost>;
export declare const salesOfferProductFactory: Factory.Sync.Factory<SalesOfferProduct, keyof SalesOfferProduct>;
export declare const salesOfferStandaloneOptionsFactory: Factory.Sync.Factory<SalesOfferProduct, keyof SalesOfferProduct>;
export declare const salesOfferTestFactory: Factory.Sync.Factory<SalesOffer, keyof SalesOffer>;
export declare const salesOfferTestStandaloneOptionsFactory: Factory.Sync.Factory<SalesOffer, keyof SalesOffer>;
export declare const salesOfferError: {
    error: {
        type: string;
    };
};
//# sourceMappingURL=sales-offer.testfactory.d.ts.map