import { Notification, NotificationTypeEnum } from './notification.model';
import { Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { PricedCphState } from '../state/priced-cph.state';

export class NoManagerNotification implements Notification {
  labelKey = 'no-manager';
  type = NotificationTypeEnum.WARNING;

  shouldShow(injector?: Injector): Observable<boolean> {
    const store = injector?.get<Store>(Store);
    const loginDetails = store?.selectSnapshot(PricedCphState.loginDetails);

    return of(!loginDetails?.hasManagerRole());
  }
}
