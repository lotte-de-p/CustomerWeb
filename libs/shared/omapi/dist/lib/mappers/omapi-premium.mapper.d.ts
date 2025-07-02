import { RawOmapiPremiumInterface } from '../interfaces';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiPremium } from '../models';
import * as i0 from "@angular/core";
export declare class OmapiPremiumMapper implements MapperInterface<RawOmapiPremiumInterface, OmapiPremium> {
    toModel(rawResponse: RawOmapiPremiumInterface): OmapiPremium;
    private createOmapiPremium;
    private mapPremiumDetails;
    covertPrice(rawPrice: string): string | undefined;
    convertDate(rawDate: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiPremiumMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiPremiumMapper>;
}
//# sourceMappingURL=omapi-premium.mapper.d.ts.map