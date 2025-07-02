import { LoginDetails } from '../models/login-details.model';
import { MapperInterface } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
export declare class LoginDetailsMapper implements MapperInterface<unknown, LoginDetails> {
    toModel(rawResponse: Record<string, unknown>): LoginDetails;
    private getLoginDetails;
    private createStatAndNonce;
    private createLoginDetails;
    private createScopes;
    private createScope;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginDetailsMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginDetailsMapper>;
}
//# sourceMappingURL=login-details.mapper.d.ts.map