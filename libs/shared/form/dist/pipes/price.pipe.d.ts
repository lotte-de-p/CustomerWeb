import { PipeTransform } from '@angular/core';
import { PriceService } from '../services';
import * as i0 from "@angular/core";
export declare class PricePipe implements PipeTransform {
    private readonly priceService;
    constructor(priceService: PriceService);
    transform(price: number | string, absolute?: boolean, showZeroes?: boolean, locale?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PricePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PricePipe, "price", true>;
}
//# sourceMappingURL=price.pipe.d.ts.map