import { AbstractAuthenticationService } from './authentication.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Log, LogFactory } from '@telenet/ng-lib-shared';
import { AuthenticationService } from '../models';

export class JWTAuthenticationService extends AbstractAuthenticationService implements AuthenticationService {
  private static readonly LOG: Log = LogFactory.createLogger(JWTAuthenticationService);

  constructor() {
    super();
  }

  protected override isAuthenticated(): Observable<boolean> {
    return this.userDetailsService.getUserDetails().pipe(
      map((loginDetails) => {
        const isLoggedIn = loginDetails.isLoggedIn();
        JWTAuthenticationService.LOG.logDebug(`Authentication: ${loginDetails}`);
        return isLoggedIn;
      }),
      catchError((_e: unknown) => {
        JWTAuthenticationService.LOG.logDebug(`Authentication: false}`);
        return of(false);
      })
    );
  }

  protected getLog(): Log {
    return JWTAuthenticationService.LOG;
  }
}
