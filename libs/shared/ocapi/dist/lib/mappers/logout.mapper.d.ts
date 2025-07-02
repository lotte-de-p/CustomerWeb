import { MapperInterface } from '@telenet/ng-lib-shared';
import { LogoutDetails } from '../models';
import { RawLogOutDetailsInterface } from '../interfaces';
import * as i0 from "@angular/core";
export declare class LogoutMapper implements MapperInterface<RawLogOutDetailsInterface, LogoutDetails> {
    toModel(rawLogoutResponse: RawLogOutDetailsInterface): LogoutDetails;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoutMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogoutMapper>;
}
//# sourceMappingURL=logout.mapper.d.ts.map