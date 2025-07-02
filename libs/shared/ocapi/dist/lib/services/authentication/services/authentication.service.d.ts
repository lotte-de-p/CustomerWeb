import { UserDetailsService } from '../../user-details.service';
import { UrlService } from '@telenet/ng-lib-page';
import { AuthenticationState } from '../state/authentication.state';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthenticationParameters, AuthenticationService } from '../models';
import { Log } from '@telenet/ng-lib-shared';
export declare abstract class AbstractAuthenticationService implements AuthenticationService {
    protected readonly userDetailsService: UserDetailsService;
    protected readonly cookieService: CookieService;
    protected readonly urlService: UrlService;
    protected readonly authenticationState: AuthenticationState;
    protected readonly authenticationProvider: import("../providers").AuthenticationProvider;
    private authenticationStatus;
    protected constructor();
    authenticate(authenticationParameters: AuthenticationParameters): void;
    private getRootDomain;
    setAuthenticatedStatus(isAuthenticated: boolean): void;
    getAuthenticationUrl(authenticationParameters: AuthenticationParameters): string | null;
    getAuthenticationStatus(): Observable<boolean>;
    protected abstract isAuthenticated(): Observable<boolean>;
    protected abstract getLog(): Log;
}
//# sourceMappingURL=authentication.service.d.ts.map