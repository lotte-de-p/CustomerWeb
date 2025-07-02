import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ThankYouState } from '../+state/thank-you.state';
import { map, Observable, tap } from 'rxjs';
import { orderNumber, redirectUrl } from '../+state/thank-you.selectors';
import { UrlService } from '@telenet/ng-lib-page';

@Injectable({ providedIn: 'root' })
export class ThankYouFacade {
  redirectUrl$: Observable<string | undefined> = this.store.select(redirectUrl);
  orderNumber$: Observable<string | undefined> = this.store.select(orderNumber);

  redirect() {
    return this.redirectUrl$.pipe(
      map((url) => url || 'telenet.be'),
      tap((url) => this.urlService.redirectTo(url))
    );
  }

  constructor(
    private readonly store: Store<ThankYouState>,
    private readonly urlService: UrlService
  ) {}
}
