import { Notification, NotificationTypeEnum } from './notification.model';
import { Observable, of } from 'rxjs';
import { Injector } from '@angular/core';
import { Store } from '@ngxs/store';
import { PricedCphState } from '../state/priced-cph.state';
import { PricedCphOverview } from './priced-cph-data.model';

export class NoProductsNotification implements Notification {
  type = NotificationTypeEnum.ERROR;
  labelKey = 'no-products';

  shouldShow(injector?: Injector): Observable<boolean> {
    const store = injector?.get<Store>(Store);
    const overview = store?.selectSnapshot(PricedCphState.overview);

    return of(this.hasNoProducts(overview));
  }

  private hasNoProducts(overview?: PricedCphOverview[]): boolean {
    return !overview || !overview.some((value) => value.products && value.products.length > 0);
  }
}
