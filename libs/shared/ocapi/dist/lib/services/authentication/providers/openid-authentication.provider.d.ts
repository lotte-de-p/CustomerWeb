import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationProvider } from './authentication.provider';
import { AuthenticationParameters } from '../models';
export declare class OpenidAuthenticationProvider extends AuthenticationProvider {
    private static readonly LOG;
    static PROVIDER_TYPE: string;
    constructor();
    getType(): string;
    getAuthenticationUrl(): string | null;
    getParameters(authenticationParameters: AuthenticationParameters): HttpParams;
    sendAuthCall(params: HttpParams): Observable<{
        data: string;
    }>;
}
//# sourceMappingURL=openid-authentication.provider.d.ts.map