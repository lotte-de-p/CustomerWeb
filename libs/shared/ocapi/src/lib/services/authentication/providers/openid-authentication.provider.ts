import { ConfigConstants } from '@telenet/ng-lib-config';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationProvider } from './authentication.provider';
import { AuthenticationParameters } from '../models';
import { LoginDetailsConstants } from '../../../constants';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

export class OpenidAuthenticationProvider extends AuthenticationProvider {
  private static readonly LOG: Log = LogFactory.createLogger(OpenidAuthenticationProvider);

  public static PROVIDER_TYPE = 'openid';

  constructor() {
    super();
    OpenidAuthenticationProvider.LOG.logDebug('Use OpenidAuthenticationProvider for authentication');
  }

  public getType(): string {
    return OpenidAuthenticationProvider.PROVIDER_TYPE;
  }

  public getAuthenticationUrl(): string | null {
    if (!this.configService.getConfig(ConfigConstants.OPENID_AUTH_URL)) {
      OpenidAuthenticationProvider.LOG.logError('OPENID_AUTH_URL has not been configured');
      return null;
    }
    return this.configService.getConfig(ConfigConstants.OPENID_AUTH_URL);
  }

  public override getParameters(authenticationParameters: AuthenticationParameters): HttpParams {
    const { referrerUrl, state, nonce } = authenticationParameters;

    let httpParams = super.getParameters(authenticationParameters);
    httpParams = httpParams.appendAll({
      client_id: this.configService.getConfig(ConfigConstants.OPENID_CLIENT_ID),
      response_type: LoginDetailsConstants.CODE,
      claims: LoginDetailsConstants.CLAIMS,
    });

    if (state && nonce) {
      httpParams = httpParams.appendAll({
        state,
        nonce,
      });
    }

    if (referrerUrl) {
      httpParams = httpParams.append('referrer_url', referrerUrl);
    }

    if (this.configService.getConfig(ConfigConstants.OAUTH_CALLBACK_URL)) {
      httpParams = httpParams.append('redirect_uri', this.configService.getConfig(ConfigConstants.OAUTH_CALLBACK_URL));
    }

    return httpParams;
  }

  public sendAuthCall(params: HttpParams): Observable<{ data: string }> {
    OpenidAuthenticationProvider.LOG.logDebug(
      `Sending GET request without prompt to openid authentication endpoint: ${this.getAuthenticationUrl()}, with parameters ${params.toString()}`
    );

    const authUrl = this.getAuthenticationUrl();
    if (!authUrl) {
      return throwError(
        () =>
          new HttpErrorResponse({ error: { text: 'Authentication url of openid provider could not be determined' } })
      );
    }

    const url = `${authUrl}?${params.toString()}`;
    const options = {
      withCredentials: true,
      headers: this.ocapiHelper.getHttpHeaders(),
    };
    return this.httpClient.get(url, options) as Observable<{ data: string }>;
  }
}
