import { AbstractAuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../models';
import { Log } from '@telenet/ng-lib-shared';
export declare class TransparentAuthenticationService extends AbstractAuthenticationService implements AuthenticationService {
    private static readonly LOG;
    protected readonly httpClient: HttpClient;
    constructor();
    protected isAuthenticated(): Observable<boolean>;
    protected getLog(): Log;
    private attemptAuthenticate;
    private getCallBackOptions;
}
//# sourceMappingURL=transparent-authentication.service.d.ts.map