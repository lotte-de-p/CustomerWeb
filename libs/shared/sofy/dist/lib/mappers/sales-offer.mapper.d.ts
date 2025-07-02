import { ProductMapper } from './product.mapper';
import { SalesOfferInterface } from '../interfaces/sales-offer.interface';
import { SalesOfferModel } from '../models/sales-offer.model';
import * as i0 from "@angular/core";
export declare class SalesOfferMapper {
    private readonly productMapper;
    constructor(productMapper: ProductMapper);
    map(rawSalesOffer: SalesOfferInterface): SalesOfferModel;
    private mapProducts;
    static ɵfac: i0.ɵɵFactoryDeclaration<SalesOfferMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SalesOfferMapper>;
}
//# sourceMappingURL=sales-offer.mapper.d.ts.map