import { Component, Input, OnInit } from '@angular/core';
import { mergeMap, take, tap } from 'rxjs/operators';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { PricedCphOverview } from '../../model/priced-cph-data.model';
import { NotificationsService } from '../../service/notifications.service';
import { BackendErrorNotification } from '../../model/backend-error.notification';
import { BusinessCustomerNotification } from '../../model/business-customer.notification';
import { NoProductsNotification } from '../../model/no-products.notification';
import { NoManagerNotification } from '../../model/no-manager.notification';
import { Initialize, SetNotificationIfNotSet } from '../../state/priced-cph.actions';
import { Notification } from '../../model/notification.model';
import { DropDownAccordionComponent } from '../drop-down-accordion/drop-down-accordion.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { MarketingCafeNgxsModule } from '../../../marketing-cafe-ngxs.module';

@Component({
  selector: 'tg-marketing-cafe-priced-customer-product-holding',
  templateUrl: './priced-customer-product-holding.component.html',
  standalone: true,
  imports: [NgIf, DropDownAccordionComponent, AsyncPipe, MarketingCafeNgxsModule],
})
export class PricedCustomerProductHoldingComponent implements OnInit {
  @Input() title: string;

  @Select(PricedCphState.loginDetails) loginDetails$: Observable<LoginDetails>;
  @Select(PricedCphState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  @Select(PricedCphState.overview) overview$: Observable<PricedCphOverview[]>;

  constructor(
    private readonly store: Store,
    private readonly notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    const NOTIFICATIONS = [
      new BackendErrorNotification(),
      new BusinessCustomerNotification(),
      new NoManagerNotification(),
      new NoProductsNotification(),
    ];

    this.store
      .dispatch(new Initialize())
      .pipe(
        take(1),
        mergeMap(() => this.notificationsService.notificationsIfConditionsMet$(NOTIFICATIONS)),
        tap((notification: Notification) => {
          if (notification) {
            this.store.dispatch(new SetNotificationIfNotSet(notification));
          }
        })
      )
      .subscribe();
  }
}
