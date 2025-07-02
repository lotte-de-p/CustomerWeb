import { AuthenticationParameters } from './authentication.parameters';
import { Observable } from 'rxjs';
export interface AuthenticationService {
    authenticate: (authenticationParameters: AuthenticationParameters) => void;
    setAuthenticatedStatus: (isAuthenticated: boolean) => void;
    getAuthenticationUrl: (authenticationParameters: AuthenticationParameters) => string | null;
    getAuthenticationStatus: () => Observable<boolean>;
}
//# sourceMappingURL=authentication-service.model.d.ts.map