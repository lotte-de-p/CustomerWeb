import { AbstractAuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Log } from '@telenet/ng-lib-shared';
import { AuthenticationService } from '../models';
export declare class JWTAuthenticationService extends AbstractAuthenticationService implements AuthenticationService {
    private static readonly LOG;
    constructor();
    protected isAuthenticated(): Observable<boolean>;
    protected getLog(): Log;
}
//# sourceMappingURL=jwt-authentication.service.d.ts.map