import { TranslateService } from '@ngx-translate/core';
import { SalesOfferPromo } from '../models/response';
export declare class SalesOfferPromoUtil {
    private static readonly PROMOTION_DICTIONARY;
    private static readonly DEFAULT_LABEL;
    private static readonly DEFAULT_PERMANENT_LABEL;
    static containsTag(promo: SalesOfferPromo[], tag: string): boolean;
    static hasDiscount(promo: SalesOfferPromo): boolean;
    static getShortestPromoExcludingZeroDurations(promos: SalesOfferPromo[]): SalesOfferPromo | undefined;
    static getPromoWithZeroDurationAndZeroDiscount(promos: SalesOfferPromo[]): SalesOfferPromo | undefined;
    static getTotalDiscountWithZeroDuration(promos: SalesOfferPromo[], sohoFlow: boolean): number;
    static getOverviewLabel(promo: SalesOfferPromo, product: string, translateService: TranslateService, isSoho: boolean, discount: number): string;
    private static getDefaultCopy;
    private static getLabelKey;
    private static isPermanentPromotion;
    private static transformPrice;
}
//# sourceMappingURL=sales-offer-promo.util.d.ts.map