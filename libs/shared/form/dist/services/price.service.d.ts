import { PathCategorisationService } from '@telenet/ng-lib-page';
import { TaxTypeEnum } from '../enums';
import * as i0 from "@angular/core";
export declare class PriceService {
    private readonly pathCategorisationService;
    constructor(pathCategorisationService: PathCategorisationService);
    isValidPrice(price: string): boolean;
    getTaxType(): TaxTypeEnum;
    transform(price: number | null, showZeroes?: boolean, isEnLocale?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PriceService>;
}
//# sourceMappingURL=price.service.d.ts.map