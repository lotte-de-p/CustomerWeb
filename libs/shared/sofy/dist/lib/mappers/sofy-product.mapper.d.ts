import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SofyProduct } from '../models/sofy-product';
import { Address } from '../models/address.model';
import * as i0 from "@angular/core";
export declare class SofyProductMapper {
    mapSelectedProductToSofyProduct(omapiProduct: OmapiProduct, address: Address, installType: string): SofyProduct[];
    private mapAddress;
    static ɵfac: i0.ɵɵFactoryDeclaration<SofyProductMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SofyProductMapper>;
}
//# sourceMappingURL=sofy-product.mapper.d.ts.map