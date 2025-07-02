import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OcapiCallConfig } from '../models';
import { UrlService } from '@telenet/ng-lib-page';
import { CookieService } from 'ngx-cookie-service';
import { isEmpty } from 'lodash-es';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

@Injectable({
  providedIn: 'root',
})
export class OcapiHelper {
  constructor(
    private readonly urlService: UrlService,
    private readonly cookieService: CookieService,
    private readonly configService: ConfigService
  ) {}

  getHttpHeaders<T, G>(ocapiConfig?: OcapiCallConfig<T, G>): HttpHeaders {
    return this.createHttpHeaders(ocapiConfig);
  }

  createHttpHeaders<T, G>(ocapiConfig?: OcapiCallConfig<T, G>): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    const accessToken = sessionStorage.getItem('TOKEN-ACCESS');

    httpHeaders = httpHeaders.set('x-alt-referer', this.urlService.getCurrentUrl());
    httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');

    if (ocapiConfig?.withDefaultContentType) {
      httpHeaders = httpHeaders.set('Content-Type', 'application/json;charset=UTF-8');
    }

    if (accessToken) {
      httpHeaders = httpHeaders.set('Authorization', this.getAccessToken(accessToken));
    } else {
      const TOKEN_XSRF = this.cookieService.get('TOKEN-XSRF');

      if (!isEmpty(TOKEN_XSRF)) {
        httpHeaders = httpHeaders.set('X-TOKEN-XSRF', TOKEN_XSRF);
      }
    }

    if (ocapiConfig && ocapiConfig.customHeaders) {
      for (const [key, value] of Object.entries(ocapiConfig.customHeaders)) {
        httpHeaders = httpHeaders.set(key, value);
      }
    }
    const oauthClientId = this.configService.getConfig(ConfigConstants.OPENID_CLIENT_ID);
    if (oauthClientId === 'fleet_portal' || oauthClientId === 'tip_portal') {
      httpHeaders = httpHeaders.set('X-Client-Id', oauthClientId);
    }
    return httpHeaders;
  }

  getHttpOptions<T, G>(ocapiConfig: OcapiCallConfig<T, G>) {
    const httpOptions: {
      headers: HttpHeaders;
      context?: HttpContext;
      observe?: 'body' | 'response';
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]>;
      reportProgress?: boolean;
      responseType?: string;
      withCredentials?: boolean;
    } = {
      withCredentials: ocapiConfig.withCredentials,
      headers: this.getHttpHeaders(ocapiConfig),
    };

    if (ocapiConfig.observeAsResponse) {
      httpOptions.observe = 'response';
    }
    if (ocapiConfig.responseType) {
      httpOptions.responseType = ocapiConfig.responseType;
    }

    return httpOptions;
  }

  private getAccessToken(accessToken: string): string {
    return `Bearer ${accessToken}`;
  }
}
