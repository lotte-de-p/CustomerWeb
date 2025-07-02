import { Inject, Injectable } from '@angular/core';
import { bindCallback, from, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { GRecaptchaInterface } from '../../interfaces/grecaptcha.interface';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  constructor(
    @Inject('Window') private readonly window: Window,
    private readonly configService: ConfigService
  ) {}

  getRecaptchaToken(action: string): Observable<string> {
    const recaptchaReadyAsObservable = bindCallback((callback) => this.getRecaptcha().ready(callback));

    return recaptchaReadyAsObservable().pipe(
      mergeMap(() => from(this.executeRecaptcha(action))),
      catchError(() => of(''))
    );
  }

  private getRecaptchaV3SiteKey(): string {
    return this.configService.getConfig(ConfigConstants.RECAPTCHA_V3_SITE_KEY);
  }

  private getRecaptcha(): GRecaptchaInterface {
    return this.window['grecaptcha'];
  }

  private executeRecaptcha(action: string): Promise<string> {
    return this.getRecaptcha().execute(this.getRecaptchaV3SiteKey(), { action: action });
  }
}
