import { PriceAttributes } from './price-attributes.interface';
export declare class InstallTypePriceModel {
    price: string;
    originalPrice?: string;
    isPromo: boolean;
    constructor(price: string, promoPrice?: string | null);
    static installPriceWithPromo(priceAttributes: PriceAttributes): InstallTypePriceModel;
    static installPriceWithoutPromo(priceAttributes: PriceAttributes): InstallTypePriceModel;
    private replaceCommaByDot;
}
//# sourceMappingURL=install-type-price.model.d.ts.map