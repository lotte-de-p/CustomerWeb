import { Observable, of, throwError } from 'rxjs';
import { Inject, Injectable, NgZone } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '@telenet/ng-lib-page';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { LoginCustomerNameMapper, LogoutMapper } from '../mappers';
import { OcapiService } from './ocapi.service';
import { LoginDetails, LogoutDetails, OcapiCallConfig } from '../models';
import { UserDetailsService } from './user-details.service';
import { AUTH_SERVICE, AuthenticationPrompt, AuthenticationService } from './authentication';

type Window = Record<string, object>;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    protected _ngZone: NgZone,
    @Inject('Window') protected window: Window,
    @Inject(AUTH_SERVICE) private readonly authenticationService: AuthenticationService,
    private readonly ocapiService: OcapiService,
    private readonly urlService: UrlService,
    private readonly messageService: MessageService,
    private readonly loginCustomerNameMapper: LoginCustomerNameMapper,
    private readonly logoutMapper: LogoutMapper,
    private readonly userDetailsService: UserDetailsService
  ) {}

  /**
   * @deprecated This function is deprecated, please use getUserDetails from UserDetailsService instead.
   */
  getLoginDetails(withCredentials = true, referrerUrl?: string, _isRoleRequired = true): Observable<LoginDetails> {
    return this.userDetailsService.getUserDetails({
      withCredentials,
      referrerUrl,
    });
  }

  login(referrerUrl?: string, styleHint?: string): void {
    this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
      const authParameters = {
        state: loginDetails.state,
        nonce: loginDetails.nonce,
        referrerUrl,
        styleHint,
      };
      this.authenticationService.authenticate(authParameters);
    });
  }

  loginWithStepUpAuthentication(referrerUrl?: string, acrValues?: string): void {
    this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
      const authParameters = {
        state: loginDetails.state,
        nonce: loginDetails.nonce,
        acr_values: acrValues,
        referrerUrl,
      };
      this.authenticationService.authenticate(authParameters);
    });
  }

  loginWithPrompt(referrerUrl?: string, styleHint?: string): void {
    this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
      const authParameters = {
        state: loginDetails.state,
        nonce: loginDetails.nonce,
        referrerUrl,
        styleHint,
        prompt: AuthenticationPrompt.LOGIN,
      };
      this.authenticationService.authenticate(authParameters);
    });
  }

  logout(messageGroupName: string, logoutPath: string): Observable<LogoutDetails> {
    const endpoint = '/logout?targetUrl=' + encodeURIComponent(this.getLogoutRedirectUrl(logoutPath));

    const ocapiConfig = new OcapiCallConfig(messageGroupName, endpoint, this.logoutMapper, {});
    ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);

    return this.ocapiService.doGet(ocapiConfig).pipe(
      map((response) => {
        this.authenticationService.setAuthenticatedStatus(false);
        if (response && response.logout_redirect_uri) {
          this.urlService.redirectTo(response.logout_redirect_uri);
          return {};
        }
        return response;
      })
    );
  }

  getLogoutRedirectUrl(logoutPath: string) {
    let logoutRedirectUrl = this.urlService.getCurrentUrl();
    if (logoutPath) {
      logoutRedirectUrl = logoutPath.startsWith('https://')
        ? logoutPath
        : location.protocol + '//' + location.host + logoutPath;
    }
    return this.urlService.removeParametersFromUrl(logoutRedirectUrl, 'jwt');
  }

  private getStateAndNonce(refererUrl?: string): Observable<LoginDetails> {
    return this.userDetailsService.getUserDetails({
      withCredentials: false,
      referrerUrl: refererUrl,
    });
  }

  loginWithCustomerNumber(
    messageGroupName: string,
    _customerNumber: string,
    key: string,
    value: string,
    mobileNumber: string
  ) {
    const endpoint = '/oauth/login?' + key + '=' + value + '&mobilenumber=' + mobileNumber;
    const ocapiConfig = new OcapiCallConfig(messageGroupName, endpoint, this.loginCustomerNameMapper, {});
    ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);

    return this.ocapiService.doPost(ocapiConfig).pipe(
      tap(() => {
        this.authenticationService.setAuthenticatedStatus(true);
        this.userDetailsService.reset();
      }),
      map((response) => response)
    );
  }

  private handleErrorResponse<T, G>(error: HttpErrorResponse, ocapiCall: OcapiCallConfig<T, G>) {
    if (error.status === 401) {
      return of({ data: error.error, status: error.status });
    } else if (error.status === 400 && error.error && error.error.code) {
      const errorCode = error.status.toString().concat('-').concat(error.error.code);
      this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + errorCode));
    } else {
      this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + error.status));
    }
    return throwError(() => 'An error occured while trying to fetch ' + ocapiCall.messageGroupName);
  }

  public getAuthenticationStatus(): Observable<boolean> {
    return this.authenticationService.getAuthenticationStatus();
  }
}
