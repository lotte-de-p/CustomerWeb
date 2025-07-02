import { PromoMapper } from './promo.mapper';
import { InstallTypeInterface } from '../interfaces/install-type.interface';
import { InstallTypeModel } from '../models/install-type.model';
import * as i0 from "@angular/core";
export declare class InstallTypeMapper {
    private readonly promoMapper;
    constructor(promoMapper: PromoMapper);
    map(rawInstallType: InstallTypeInterface): InstallTypeModel;
    private mapPromos;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallTypeMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InstallTypeMapper>;
}
//# sourceMappingURL=install-type.mapper.d.ts.map