import { Component, OnInit, ViewChild } from '@angular/core';
import { StepComponent } from '@sales/shared/data-access';
import { EventFacade, hideNavigationEvent, showNavigationEvent } from '@sales/events/data-access';
import { summaryStepFinished } from './events/summary-step-finished.const';
import { CommonModule } from '@angular/common';
import { summaryStepLoaded } from './events/summary-step-loaded.const';
import {
  DeliverInfoComponent,
  DepreciationTableComponent,
  ErrorNotificationComponent,
  FooterComponent,
  InvoiceInfoComponent,
  OrderDataComponent,
  PersonalInfoComponent,
} from '@sales/summary/ui';
import { DepreciationItem, SummaryFacade, ViewStateEnum } from '@sales/summary/data-access';
import { catchError, combineLatest, debounceTime, Observable, of, take } from 'rxjs';
import { IngenicoFormComponent } from '@sales/shared/ingenico-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { contractSummaryLinkClicked } from './events/contract-summary-link-clicked.const';
import { ChangeDeliveryInfoComponent } from '@sales/delivery/feat-delivery';
import { ViewModel } from './interfaces/view-model.interface';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    OrderDataComponent,
    DeliverInfoComponent,
    InvoiceInfoComponent,
    PersonalInfoComponent,
    FooterComponent,
    ChangeDeliveryInfoComponent,
    DepreciationTableComponent,
    IngenicoFormComponent,
    TranslateModule,
    ErrorNotificationComponent,
  ],
  selector: 'tg-sales-step-summary',
  templateUrl: './summary-step.component.html',
})
export class SummaryStepComponent implements StepComponent, OnInit {
  viewState = ViewStateEnum.OVERLAY_CLOSED;
  viewStateEnum = ViewStateEnum;
  selectedDepreciationItem: DepreciationItem | undefined;
  viewModel: ViewModel | undefined;

  ingenicoRequest$ = this.summaryFacade.ingenicoRequest$;
  ingenicoFormUrl$ = this.summaryFacade.ingenicoFormUrl$;

  ingenicoFormReady$: Observable<boolean>;

  @ViewChild(IngenicoFormComponent) child: IngenicoFormComponent | undefined;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly summaryFacade: SummaryFacade
  ) {
    this.viewModel = {
      personalInfo$: this.summaryFacade.personalInfo$,
      contractSummaryRequired$: this.summaryFacade.contractSummaryRequired$,
      deliveryInfo$: this.summaryFacade.deliveryInfo$,
      invoiceInfo$: this.summaryFacade.invoiceInfo$,
      orderItems$: this.summaryFacade.sortedOrderItems$,
      prices$: this.summaryFacade.prices$,
      depreciationItems$: this.summaryFacade.depreciationItems$,
      generalNotifications$: this.summaryFacade.generalNotifications$,
      deliveryNotifications$: this.summaryFacade.deliveryNotifications$,
    };

    this.ingenicoFormReady$ = this.summaryFacade.ingenicoFormReady$;
  }

  ngOnInit(): void {
    combineLatest([this.ingenicoRequest$, this.ingenicoFormReady$])
      .pipe(untilDestroyed(this))
      .subscribe(([req, res]) => {
        if (req && res) {
          this.eventFacade.triggerAnalyticsClickEvent({ name: 'redirected to payment gateway' });
          this.child?.sendRequest(req);
        }
      });

    // if the content of generalNotifications$ is changed, then autoscroll to the element tg-sales-summary-error-notification
    this.summaryFacade.generalNotifications$.pipe(debounceTime(0), untilDestroyed(this)).subscribe((notifications) => {
      if (notifications?.length > 0) {
        const elements = document.getElementsByTagName('tg-sales-summary-error-notification');
        if (elements.length > 0) {
          elements[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    this.eventFacade.triggerEvent(summaryStepLoaded);
  }

  onNextStep(): Observable<boolean> {
    this.eventFacade.triggerEvent(summaryStepFinished);
    return of(false);
  }

  showDepreciationOverlay(depreciationItem: DepreciationItem) {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'view depreciation table link clicked' });
    this.selectedDepreciationItem = depreciationItem;
    this.eventFacade.triggerEvent(hideNavigationEvent);
    this.viewState = ViewStateEnum.OVERLAY_OPEN;
  }

  closeDepreciationTableOverlay() {
    this.selectedDepreciationItem = undefined;
    this.eventFacade.triggerEvent(showNavigationEvent);
    this.viewState = ViewStateEnum.OVERLAY_CLOSED;
  }

  showContractSummary() {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'view contract summary link clicked' });
    this.eventFacade.triggerEvent(contractSummaryLinkClicked);
  }

  showTermsAndConditions() {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'Terms and Conditions link clicked' });
    this.summaryFacade
      .showTermsAndConditions()
      .pipe(
        take(1),
        catchError((err) => {
          console.warn(err.message);
          return '';
        })
      )
      .subscribe();
  }

  handlePaymentInitiated() {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'payment initiated' });
  }

  handleOrderButtonClicked() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'order button clicked',
      attributes: { itemName: 'upfront payment' },
    });
    this.eventFacade.triggerEvent(summaryStepFinished);
  }
}
