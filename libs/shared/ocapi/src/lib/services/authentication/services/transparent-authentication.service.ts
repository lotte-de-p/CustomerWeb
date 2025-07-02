import { AbstractAuthenticationService } from './authentication.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { inject } from '@angular/core';
import { AuthenticationPrompt, AuthenticationService } from '../models';
import { Log, LogFactory } from '@telenet/ng-lib-shared';
import { OcapiAuthenticationProvider } from '../providers';

export class TransparentAuthenticationService extends AbstractAuthenticationService implements AuthenticationService {
  private static readonly LOG: Log = LogFactory.createLogger(TransparentAuthenticationService);

  protected readonly httpClient = inject(HttpClient);

  constructor() {
    super();
  }

  protected override isAuthenticated(): Observable<boolean> {
    return this.userDetailsService.getUserDetails().pipe(
      switchMap((loginDetails) => {
        if (loginDetails.isLoggedIn()) {
          return of(loginDetails.isLoggedIn());
        }

        return this.attemptAuthenticate(loginDetails.state, loginDetails.nonce).pipe(
          switchMap(() => {
            this.userDetailsService.reset();
            return this.userDetailsService.getUserDetails().pipe(map((loginDetails) => loginDetails.isLoggedIn()));
          }),
          catchError((error) => {
            this.getLog().logError('Failed to authenticate', error);
            return of(false);
          })
        );
      })
    );
  }

  protected override getLog(): Log {
    return TransparentAuthenticationService.LOG;
  }

  private attemptAuthenticate(state: string, nonce: string): Observable<unknown> {
    let params = this.authenticationProvider.getParameters({ prompt: AuthenticationPrompt.NONE });

    if (state && nonce) {
      params = params.append('state', state).append('nonce', nonce);
    }

    this.getLog().logDebug(`Trying authenticate with provider ${this.authenticationProvider.getType()}`);

    if (!this.authenticationProvider.getAuthenticationUrl()) {
      return throwError(() => new Error('Authentication url is not defined, not trying to authenticate'));
    }

    return this.authenticationProvider.sendAuthCall(params).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error?.error?.text?.includes('callback')) {
          TransparentAuthenticationService.LOG.logDebug(
            `Error during attempt to authenticate, with callback: ${error.error.text}`
          );
          return of({ data: error.error.text });
        } else {
          TransparentAuthenticationService.LOG.logDebug(
            `Error during attempt to authenticate, rethrowing: ${error?.error?.text}`
          );
          return of({ data: error.error.text });
        }
      }),
      concatMap((res: { data: string }) => {
        TransparentAuthenticationService.LOG.logDebug(`Executing callback: ${res.data}`);
        if (this.authenticationProvider.getType() === OcapiAuthenticationProvider.PROVIDER_TYPE) {
          // For ocapi we don't want to manually get a callback, this already happened via jsonp
          return of(undefined);
        }
        return this.httpClient.get(res.data, this.getCallBackOptions());
      })
    );
  }

  private getCallBackOptions(): Record<string, unknown> {
    return {
      withCredentials: true,
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'text/plain',
        'Content-Type': 'text/plain;charset=UTF-8',
      }),
      responseType: 'text',
    };
  }
}
