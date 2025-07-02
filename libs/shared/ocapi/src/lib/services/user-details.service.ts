import { inject, Injectable } from '@angular/core';
import { catchError, finalize, map, shareReplay, take } from 'rxjs/operators';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { LoginDetails, OcapiCallConfig } from '../models';
import { LoginDetailsMapper } from '../mappers';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { OcapiHelper } from '../utils';
import { ErrorReportService } from './error-report.service';
import { QueryParamEnum, UrlService } from '@telenet/ng-lib-page';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

interface UserDetailsOptions {
  withCredentials?: boolean;
  jwtToken?: string;
  referrerUrl?: string;
  errorHandler?: (
    errorHandler: HttpErrorResponse,
    config: OcapiCallConfig<Record<string, unknown>, LoginDetails>
  ) => Observable<unknown>;
  forceUpdate?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private static readonly LOG: Log = LogFactory.createLogger(UserDetailsService);

  private readonly endpoint = '/oauth/userdetails';

  private readonly cache: Map<string, ReplaySubject<LoginDetails>> = new Map<string, ReplaySubject<LoginDetails>>();

  private readonly loginDetailsMapper: LoginDetailsMapper = inject(LoginDetailsMapper);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly ocapiHelper: OcapiHelper = inject(OcapiHelper);
  private readonly configService: ConfigService = inject(ConfigService);
  private readonly http = inject(HttpClient);
  private readonly errorReportService = inject(ErrorReportService);
  private readonly urlService = inject(UrlService);

  reset() {
    this.cache.clear();
  }

  getUserDetails(options: UserDetailsOptions = {}) {
    const { withCredentials = true, referrerUrl, jwtToken } = options;

    let endpointWithParameters = this.endpoint;
    const jwt = jwtToken ? jwtToken : this.extractJwtFromUrl();

    if (jwt) {
      endpointWithParameters = `${endpointWithParameters}?jwt=${jwt}`;
    }
    const ocapiConfig = new OcapiCallConfig('', endpointWithParameters, this.loginDetailsMapper);
    ocapiConfig.withCredentials = withCredentials;
    ocapiConfig.authNeeded = false;

    if (referrerUrl && referrerUrl.length > 0) {
      ocapiConfig.customHeaders = { ...(ocapiConfig.customHeaders || {}), 'x-alt-referer': referrerUrl };
    }
    return this.getUserDetailsForConfig(ocapiConfig).pipe(
      shareReplay({ bufferSize: 1, refCount: false }),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          return throwError(() => error);
        }
        const { status, error: errorMessage } = error;
        const [state, nonce] = String(errorMessage).split(',');
        const loginDetails = new LoginDetails(status);
        loginDetails.state = state;
        loginDetails.nonce = nonce;

        return of(loginDetails);
      })
    );
  }

  private extractJwtFromUrl(): string | null {
    const jwtToken = this.urlService.getRequestParamValue(QueryParamEnum.JWT_TOKEN, '');
    return jwtToken ? jwtToken : this.urlService.getHashParameter(QueryParamEnum.JWT_TOKEN);
  }

  private createHashKey(ocapiCall: OcapiCallConfig<Record<string, unknown>, LoginDetails>) {
    const { errorHandler: _, endpoint: __, ...otherProps } = ocapiCall;
    return btoa(JSON.stringify(otherProps));
  }

  private hasJwtParameter(endpoint: string) {
    return !!endpoint && endpoint.includes('jwt');
  }

  private getUserDetailsForConfig(
    config: OcapiCallConfig<Record<string, unknown>, LoginDetails>
  ): Observable<LoginDetails> {
    const cacheKey = this.createHashKey(config);

    if (!this.hasJwtParameter(config.endpoint) && this.cache.has(cacheKey)) {
      const replaySubject$ = this.cache.get(cacheKey);
      if (replaySubject$) {
        return replaySubject$.asObservable();
      }
    }
    return this.getCacheableUserDetailsObservable(cacheKey, config);
  }

  private getCacheableUserDetailsObservable(
    cacheKey: string,
    config: OcapiCallConfig<Record<string, unknown>, LoginDetails>
  ) {
    const freshReplaySubject$ = new ReplaySubject<LoginDetails>(1);
    this.cache.set(cacheKey, freshReplaySubject$);
    this.doResolve(config)
      .pipe(
        take(1),
        finalize(() => {
          freshReplaySubject$.complete();
        })
      )
      .subscribe({
        next: (loginDetails: LoginDetails | unknown) => {
          if (loginDetails instanceof LoginDetails) {
            freshReplaySubject$.next(loginDetails);
          }
        },
        error: (error) => freshReplaySubject$.error(error),
      });
    return freshReplaySubject$.asObservable();
  }

  private handleError(ocapiCallConfig: { messageGroupName: string }) {
    return (error: HttpErrorResponse) => {
      if (error.status !== 401) {
        this.messageService.addMessage(new ErrorMessage(ocapiCallConfig.messageGroupName, 'ocapi.' + error.status));
        UserDetailsService.LOG.logDebug(
          `An error occurred while trying to fetch ${ocapiCallConfig.messageGroupName}`,
          error
        );
        return throwError(() => 'An error occured while trying to fetch ' + ocapiCallConfig.messageGroupName);
      }
      return throwError(() => error);
    };
  }

  private doResolve<LoginDetails>(
    ocapiCallConfig: OcapiCallConfig<unknown, LoginDetails>
  ): Observable<LoginDetails | unknown> {
    try {
      const options = this.getHttpOptions(ocapiCallConfig);
      return this.http
        .get(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCallConfig.getEndpoint(), options)
        .pipe(
          map((ocapiResponse: unknown) => {
            return ocapiCallConfig.mapper?.toModel(ocapiResponse) || ocapiResponse;
          }),
          catchError(this.handleError(ocapiCallConfig))
        );
    } catch (e) {
      this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
      this.messageService.addMessage(
        new ErrorMessage(
          ocapiCallConfig.messageGroupName,
          'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)
        )
      );
      return throwError(() => new Error('An error occured while trying to fetch ' + ocapiCallConfig.endpoint));
    }
  }

  private getHttpOptions<LoginDetails>(ocapiConfig: OcapiCallConfig<unknown, LoginDetails>) {
    const httpOptions: {
      headers: HttpHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]>;
      reportProgress?: boolean;
      responseType: 'json' | undefined;
      withCredentials?: boolean;
    } = {
      withCredentials: ocapiConfig.withCredentials,
      headers: this.ocapiHelper.getHttpHeaders(ocapiConfig),
      responseType: 'json',
    };

    return httpOptions;
  }
}
