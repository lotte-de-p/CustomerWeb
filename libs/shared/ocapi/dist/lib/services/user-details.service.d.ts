import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetails, OcapiCallConfig } from '../models';
import * as i0 from "@angular/core";
interface UserDetailsOptions {
    withCredentials?: boolean;
    jwtToken?: string;
    referrerUrl?: string;
    errorHandler?: (errorHandler: HttpErrorResponse, config: OcapiCallConfig<Record<string, unknown>, LoginDetails>) => Observable<unknown>;
    forceUpdate?: boolean;
}
export declare class UserDetailsService {
    private static readonly LOG;
    private readonly endpoint;
    private readonly cache;
    private readonly loginDetailsMapper;
    private readonly messageService;
    private readonly ocapiHelper;
    private readonly configService;
    private readonly http;
    private readonly errorReportService;
    private readonly urlService;
    reset(): void;
    getUserDetails(options?: UserDetailsOptions): Observable<LoginDetails>;
    private extractJwtFromUrl;
    private createHashKey;
    private hasJwtParameter;
    private getUserDetailsForConfig;
    private getCacheableUserDetailsObservable;
    private handleError;
    private doResolve;
    private getHttpOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserDetailsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserDetailsService>;
}
export {};
//# sourceMappingURL=user-details.service.d.ts.map