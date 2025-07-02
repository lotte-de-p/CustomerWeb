import { Inject, Injectable } from '@angular/core';
import { bindCallback, from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GRecaptchaInterface } from '../interface/grecaptcha.interface';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  constructor(@Inject('Window') private readonly window: Window) {}

  getRecaptchaToken(action: string, siteKey: string): Observable<string> {
    const recaptchaReadyAsObservable = bindCallback((callback) => this.getRecaptcha().ready(callback));

    return recaptchaReadyAsObservable().pipe(mergeMap(() => from(this.executeRecaptcha(action, siteKey))));
  }

  private getRecaptcha(): GRecaptchaInterface {
    return this.window['grecaptcha'];
  }

  private executeRecaptcha(action: string, siteKey: string): Promise<string> {
    return this.getRecaptcha().execute(siteKey, { action: action });
  }
}
