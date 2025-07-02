import { PromoMapper } from './promo.mapper';
import { OptionInterface } from '../interfaces/option.interface';
import { OptionModel } from '../models/option.model';
import * as i0 from "@angular/core";
export declare class OptionMapper {
    private readonly promoMapper;
    constructor(promoMapper: PromoMapper);
    map(rawOption: OptionInterface): OptionModel;
    private mapPromos;
    static ɵfac: i0.ɵɵFactoryDeclaration<OptionMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OptionMapper>;
}
//# sourceMappingURL=option.mapper.d.ts.map