import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationProvider } from './authentication.provider';
import { AuthenticationParameters } from '../models';
export declare class OcapiAuthenticationProvider extends AuthenticationProvider {
    static PROVIDER_TYPE: string;
    private static readonly LOG;
    constructor();
    getType(): string;
    getAuthenticationUrl(): string | null;
    getParameters(authenticationParameters: AuthenticationParameters): HttpParams;
    sendAuthCall(params: HttpParams): Observable<{
        data: string;
    }>;
}
//# sourceMappingURL=ocapi-authentication.provider.d.ts.map