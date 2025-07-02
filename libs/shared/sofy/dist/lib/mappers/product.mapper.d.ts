import { CostMapper } from './cost.mapper';
import { InstallTypeMapper } from './install-type.mapper';
import { OptionMapper } from './option.mapper';
import { PromoMapper } from './promo.mapper';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';
import * as i0 from "@angular/core";
export declare class ProductMapper {
    private readonly costMapper;
    private readonly installTypeMapper;
    private readonly optionMapper;
    private readonly promoMapper;
    constructor(costMapper: CostMapper, installTypeMapper: InstallTypeMapper, optionMapper: OptionMapper, promoMapper: PromoMapper);
    map(rawProduct: ProductInterface): ProductModel;
    private mapCosts;
    private mapInstallTypes;
    private mapOptions;
    private mapPromos;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductMapper>;
}
//# sourceMappingURL=product.mapper.d.ts.map