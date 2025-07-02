import { ConfigService } from '@telenet/ng-lib-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LanguageService, UrlService } from '@telenet/ng-lib-page';
import { Observable } from 'rxjs';
import { OcapiHelper } from '../../../utils';
import { LoginDetailsConstants } from '../../../constants';
import { AuthenticationParameters } from '../models';
import { inject } from '@angular/core';

export abstract class AuthenticationProvider {
  protected readonly configService = inject(ConfigService);
  protected readonly languageService = inject(LanguageService);
  protected readonly urlService = inject(UrlService);
  protected readonly httpClient = inject(HttpClient);
  protected readonly ocapiHelper = inject(OcapiHelper);

  abstract getAuthenticationUrl(): string | null;

  abstract getType(): string;

  public getParameters(authenticationParameters: AuthenticationParameters): HttpParams {
    const { styleHint = LoginDetailsConstants.STYLE_HINT, prompt, acr_values } = authenticationParameters;
    let httpParams = new HttpParams().set('lang', this.languageService.getLanguage()).set('style_hint', styleHint);

    if (prompt) {
      httpParams = httpParams.append('prompt', prompt);
    }

    if (acr_values) {
      httpParams = httpParams.append('acr_values', acr_values);
    }

    return httpParams;
  }

  abstract sendAuthCall(params: HttpParams): Observable<{ data: string }>;
}
