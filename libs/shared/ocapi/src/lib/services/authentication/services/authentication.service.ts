import { UserDetailsService } from '../../user-details.service';
import { inject } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { AuthenticationState } from '../state/authentication.state';
import { LoginDetailsConstants } from '../../../constants';
import { LoginStatusEnum } from '../../../enums';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { AuthenticationParameters, AuthenticationService } from '../models';
import { catchError, shareReplay, take, tap } from 'rxjs/operators';
import { Log } from '@telenet/ng-lib-shared';
import { AUTH_PROVIDER } from '../tokens';

export abstract class AbstractAuthenticationService implements AuthenticationService {
  protected readonly userDetailsService = inject(UserDetailsService);
  protected readonly cookieService = inject(CookieService);
  protected readonly urlService = inject(UrlService);
  protected readonly authenticationState = inject(AuthenticationState);
  protected readonly authenticationProvider = inject(AUTH_PROVIDER);

  private authenticationStatus: Observable<boolean>;

  protected constructor() {
    this.getLog().logDebug(`Authenticate on load using service: ${this.constructor.name}`);
  }

  public authenticate(authenticationParameters: AuthenticationParameters) {
    const authUrl = this.getAuthenticationUrl(authenticationParameters);
    if (authUrl) {
      this.urlService.openWindow(authUrl);
    }
  }

  private getRootDomain(): string {
    return location.hostname.split('.').reverse().splice(0, 2).reverse().join('.');
  }

  public setAuthenticatedStatus(isAuthenticated: boolean) {
    if (!this.cookieService.check(LoginDetailsConstants.LOGIN_STATUS_COOKIENAME)) {
      this.cookieService.set(
        LoginDetailsConstants.LOGIN_STATUS_COOKIENAME,
        isAuthenticated ? LoginStatusEnum.LOGGED_IN.toString() : LoginStatusEnum.NOT_LOGGED_IN.toString(),
        {
          path: '/',
          sameSite: 'Lax',
          domain: `.${this.getRootDomain()}`,
        }
      );
    }

    this.authenticationState.setAuthenticated(isAuthenticated);
  }

  public getAuthenticationUrl(authenticationParameters: AuthenticationParameters) {
    const parameters = this.authenticationProvider.getParameters(authenticationParameters);
    const url = this.authenticationProvider.getAuthenticationUrl();
    if (!url) {
      return null;
    }
    return `${url}?${parameters.toString()}`;
  }

  public getAuthenticationStatus(): Observable<boolean> {
    if (!this.authenticationStatus) {
      this.authenticationStatus = this.isAuthenticated().pipe(
        take(1),
        shareReplay({ bufferSize: 1, refCount: false }),
        tap((isAuthenticated) => this.setAuthenticatedStatus(isAuthenticated)),
        catchError((error) => {
          this.getLog().logError(`Failed to retrieve authentication status`, error);
          return of(false);
        })
      );
    }
    return this.authenticationStatus;
  }

  protected abstract isAuthenticated(): Observable<boolean>;

  protected abstract getLog(): Log;
}
