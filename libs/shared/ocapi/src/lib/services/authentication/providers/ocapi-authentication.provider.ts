import { ConfigConstants } from '@telenet/ng-lib-config';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationProvider } from './authentication.provider';
import { AuthenticationParameters } from '../models';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

export class OcapiAuthenticationProvider extends AuthenticationProvider {
  public static PROVIDER_TYPE = 'ocapi';

  private static readonly LOG: Log = LogFactory.createLogger(OcapiAuthenticationProvider);

  constructor() {
    super();
    OcapiAuthenticationProvider.LOG.logDebug('Use OcapiAuthenticationProvider for authentication');
  }

  public getType(): string {
    return OcapiAuthenticationProvider.PROVIDER_TYPE;
  }

  public getAuthenticationUrl(): string | null {
    const ocapiUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
    const clientId = this.configService.getConfig(ConfigConstants.OCAPI_CLIENT_ID);

    if (!ocapiUrl || !clientId) {
      OcapiAuthenticationProvider.LOG.logError('OCAPI_URL or OCAPI_CLIENT_ID has no been configured');
      return null;
    }
    return ocapiUrl + '/login/authorization/' + clientId;
  }

  public override getParameters(authenticationParameters: AuthenticationParameters): HttpParams {
    const { referrerUrl } = authenticationParameters;

    let httpParams = super.getParameters(authenticationParameters);
    httpParams = httpParams.appendAll({
      targetUrl: (referrerUrl || undefined) ?? this.urlService.getCurrentUrl(),
    });
    return httpParams;
  }

  public sendAuthCall(params: HttpParams): Observable<{ data: string }> {
    OcapiAuthenticationProvider.LOG.logDebug(
      `Sending jsonp request without prompt to ocapi authentication endpoint: ${this.getAuthenticationUrl()}, with parameters ${params.toString()}`
    );
    const authUrl = this.getAuthenticationUrl();
    if (!authUrl) {
      return throwError(
        () => new HttpErrorResponse({ error: { text: 'Authentication url of ocapi provider could not be determined' } })
      );
    }

    const url = `${authUrl}?${params.toString()}`;
    return this.httpClient.jsonp(url, 'callback') as Observable<{ data: string }>;
  }
}
