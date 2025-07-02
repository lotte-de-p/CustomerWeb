import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { SummaryPersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryInfo } from '../interfaces/delivery-info.interface';
import { BillingAddress } from '../interfaces/invoice-info.interface';
import { SummaryState } from '../+state/summary.state';
import {
  contractSummaryRequired,
  deliveryInfo,
  deliveryNotifications,
  depreciationItems,
  generalNotifications,
  ingenicoFormReady,
  ingenicoFormUrl,
  ingenicoRequest,
  invoiceInfo,
  orderItems,
  personalInfo,
  prices,
  termsAndConditionsUrl,
} from '../+state/summary.selectors';
import { setSummaryIngenicoForm, setSummaryIngenicoFormReady } from '../+state/summary.actions';
import { DepreciationItem } from '../interfaces/depriciation-item.interface';
import { SummaryOrderItem, SummaryPrices } from '../interfaces/order-item.interface';
import { SummaryUtil } from '../utils/summary.util';
import { SummaryNotification } from '../interfaces/notification.interface';
import { IngenicoRequestForm } from '@sales/shared/data-access';
import { LanguageService, UrlService } from '@telenet/ng-lib-page';

@Injectable({ providedIn: 'root' })
export class SummaryFacade {
  personalInfo$: Observable<SummaryPersonalInfo | undefined> = this.store.select(personalInfo);
  deliveryInfo$: Observable<DeliveryInfo | undefined> = this.store.select(deliveryInfo);
  invoiceInfo$: Observable<BillingAddress | undefined> = this.store.select(invoiceInfo);
  sortedOrderItems$: Observable<SummaryOrderItem[] | undefined> = this.store.select(orderItems).pipe(
    map((orderItems) => {
      return orderItems ? SummaryUtil.sortOrderItems([...orderItems]) : undefined;
    })
  );
  prices$: Observable<SummaryPrices | undefined> = this.store.select(prices);
  depreciationItems$: Observable<DepreciationItem[] | undefined> = this.store.select(depreciationItems);
  ingenicoRequest$: Observable<IngenicoRequestForm | undefined> = this.store.select(ingenicoRequest);
  contractSummaryRequired$: Observable<boolean | undefined> = this.store.select(contractSummaryRequired);
  ingenicoFormReady$: Observable<boolean> = this.store.select(ingenicoFormReady);
  deliveryNotifications$: Observable<SummaryNotification[]> = this.store.select(deliveryNotifications);
  generalNotifications$: Observable<SummaryNotification[]> = this.store.select(generalNotifications);
  termsAndConditionsUrl$: Observable<string | undefined> = this.store.select(termsAndConditionsUrl);
  ingenicoFormUrl$: Observable<string | undefined> = this.store.select(ingenicoFormUrl);

  constructor(
    private readonly store: Store<SummaryState>,
    private readonly urlService: UrlService,
    private readonly languageService: LanguageService
  ) {}

  setIngenicoFormReady(value: boolean): void {
    this.store.dispatch(setSummaryIngenicoFormReady({ ingenicoFormReady: value }));
  }

  setIngenicoForm(ingenicoForm: IngenicoRequestForm) {
    this.store.dispatch(
      setSummaryIngenicoForm({
        ingenicoForm: ingenicoForm,
      })
    );
  }

  showTermsAndConditions(): Observable<boolean> {
    return this.termsAndConditionsUrl$.pipe(
      tap((url) => {
        if (url) {
          this.urlService.openNewTab(url);
        } else {
          throw new Error('No Terms and Conditions URL provided');
        }
      }),
      map(() => false)
    );
  }

  getLanguage(): string {
    return this.languageService.getLanguage();
  }
}
