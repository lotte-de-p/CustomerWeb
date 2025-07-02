import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { OcapiCallConfig } from '../models';
import { UrlService } from '@telenet/ng-lib-page';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '@telenet/ng-lib-config';
import * as i0 from "@angular/core";
export declare class OcapiHelper {
    private readonly urlService;
    private readonly cookieService;
    private readonly configService;
    constructor(urlService: UrlService, cookieService: CookieService, configService: ConfigService);
    getHttpHeaders<T, G>(ocapiConfig?: OcapiCallConfig<T, G>): HttpHeaders;
    createHttpHeaders<T, G>(ocapiConfig?: OcapiCallConfig<T, G>): HttpHeaders;
    getHttpOptions<T, G>(ocapiConfig: OcapiCallConfig<T, G>): {
        headers: HttpHeaders;
        context?: HttpContext | undefined;
        observe?: "body" | "response" | undefined;
        params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
        reportProgress?: boolean | undefined;
        responseType?: string | undefined;
        withCredentials?: boolean | undefined;
    };
    private getAccessToken;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcapiHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OcapiHelper>;
}
//# sourceMappingURL=ocapi.helper.d.ts.map