import { ConfigService } from '@telenet/ng-lib-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LanguageService, UrlService } from '@telenet/ng-lib-page';
import { Observable } from 'rxjs';
import { OcapiHelper } from '../../../utils';
import { AuthenticationParameters } from '../models';
export declare abstract class AuthenticationProvider {
    protected readonly configService: ConfigService;
    protected readonly languageService: LanguageService;
    protected readonly urlService: UrlService;
    protected readonly httpClient: HttpClient;
    protected readonly ocapiHelper: OcapiHelper;
    abstract getAuthenticationUrl(): string | null;
    abstract getType(): string;
    getParameters(authenticationParameters: AuthenticationParameters): HttpParams;
    abstract sendAuthCall(params: HttpParams): Observable<{
        data: string;
    }>;
}
//# sourceMappingURL=authentication.provider.d.ts.map