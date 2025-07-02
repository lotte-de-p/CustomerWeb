import { OmapiQueryProductInterface, QueryProductsInterface } from '../interfaces/omapi-query-product.interface';
import { RawOmapiQueryProductInterface, RawOmapiQueryProductInterfaceData } from '../interfaces/raw-omapi-query-product.interface';
import { MapperInterface } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
export declare class OmapiQueryProductMapper implements MapperInterface<RawOmapiQueryProductInterface, OmapiQueryProductInterface> {
    toModel(rawOmapiQueryProduct: RawOmapiQueryProductInterface): OmapiQueryProductInterface;
    private createOmapiQueryProduct;
    createQueryProducts(rawQueryProducts: RawOmapiQueryProductInterfaceData[]): QueryProductsInterface[];
    createQueryProductData(rawQueryProduct: RawOmapiQueryProductInterfaceData): QueryProductsInterface;
    private createLocalizedContents;
    private static createLocalizedContent;
    private static createLocalizedContentValue;
    private createVariants;
    private createVariant;
    private static createPrices;
    private createImages;
    private createImage;
    private createShortDescription;
    private createBrand;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiQueryProductMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiQueryProductMapper>;
}
//# sourceMappingURL=omapi-query-product.mapper.d.ts.map