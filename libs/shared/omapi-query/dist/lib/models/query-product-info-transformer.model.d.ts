import { LanguageService } from '@telenet/ng-lib-page';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { OmapiQueryProductInterface } from '../interfaces/omapi-query-product.interface';
import * as i0 from "@angular/core";
export declare class QueryProductInfoTransformer {
    private readonly languageService;
    constructor(languageService: LanguageService);
    toModel(queryProductInfo: OmapiQueryProductInterface): OmapiProduct;
    transformToOmapiProduct(queryProductInfo: OmapiQueryProductInterface): OmapiProduct;
    private appendVariantToOmapiProduct;
    private static getImageUrl;
    private getContentForLocale;
    private getBrandValueForLocale;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryProductInfoTransformer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueryProductInfoTransformer>;
}
//# sourceMappingURL=query-product-info-transformer.model.d.ts.map