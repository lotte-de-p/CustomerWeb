import { Injectable } from '@angular/core';
import { Cart, CartBuilder, EventInfo, Page, PageInfo } from 'udl';
import { DataLayerAttributes, DataLayerService, DataLayerTransactionBuilder } from '@telenet/ng-lib-datalayer';
import { Errors, HardwareCheckoutAnalytics, PrimaryCategories } from '../constants/analytics/analytics.constants';
import {
  AnalyticsInterface,
  AnalyticsTypeEnum,
  EventInterface,
  EventTypeEnum,
  StepEventBody,
} from '@sales/events/data-access';
import { Store } from '@ngrx/store';
import { AnalyticsUtil } from '../utils/analytics.util';
import { forkJoin } from 'rxjs';
import { analyticsAttributes, cart, resetStepLoadTime, stepAnalytics } from '@sales/hardware-checkout/data-access';
import { take, tap } from 'rxjs/operators';
import { summaryEventStepKey } from '@sales/summary/feat-summary';
import { thankYouEventStepKey } from '@sales/thank-you/feat-thank-you';
import { UrlService } from '@telenet/ng-lib-page';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';

@Injectable({
  providedIn: 'root',
})
export class HardwareCheckoutDataLayerService {
  constructor(
    private readonly dataLayerService: DataLayerService,
    private readonly store: Store,
    private readonly urlService: UrlService,
    private readonly messageService: MessageService
  ) {}

  setPageProperties(): void {
    const pagePrefix = this.isBusinessPage(this.urlService.getCurrentUrl()) ? 'soho/' : '';
    const pageInfo = new PageInfo();
    pageInfo.setPageID(pagePrefix + HardwareCheckoutAnalytics.PAGE_ID);
    pageInfo.setPageName(pagePrefix + HardwareCheckoutAnalytics.PAGE_NAME);
    const pageJSON = {
      pageInfo: pageInfo,
    };
    const page = new Page(pageJSON);
    this.dataLayerService.setPage(page);
  }

  handleAnalyticsEvent(analyticsEvent: EventInterface) {
    switch (analyticsEvent.eventType) {
      case EventTypeEnum.STEP_LOADED: {
        const stepKey = this.getStepKey(analyticsEvent as EventInterface<StepEventBody>);
        this.addStepViewEvent({ stepId: stepKey.toUpperCase() });
        if (stepKey === summaryEventStepKey) {
          this.setCart();
        }
        this.addStepLoadTimeEvent(stepKey);
        break;
      }
      case EventTypeEnum.ANALYTICS:
        this.addEvent(analyticsEvent as EventInterface<AnalyticsInterface>);
        break;
    }
  }

  private addEvent(analyticsEvent: EventInterface<AnalyticsInterface>) {
    if (analyticsEvent.body?.type === AnalyticsTypeEnum.TRANSACTION) {
      this.transactionEvent(analyticsEvent);
    } else if (analyticsEvent.body?.type === AnalyticsTypeEnum.ERROR) {
      this.errorEvent(analyticsEvent.body);
    } else {
      this.defaultEvent(analyticsEvent);
    }
  }

  private stepLoadTimeEvent(attributes: DataLayerAttributes | undefined): void {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        this.dataLayerService
          .addStepLoadTimeEvent(AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, attributes, cart))
          .catch((err) => this.logAnalyticsError(err))
          .then();
      },
      error: (error) => console.warn(Errors.CONSOLE_MESSAGE, error),
    });
  }

  private logAnalyticsError(err: Error) {
    console.warn(Errors.CONSOLE_MESSAGE, 'ANALYTICS EVENT NOT SEND: ', err);
  }

  private defaultEvent(analyticsEvent: EventInterface<AnalyticsInterface>): void {
    const eventBody = analyticsEvent.body;
    const eventInfo = this.dataLayerService.createEventInfo(eventBody?.name || 'TBD', eventBody?.type || 'TBD');
    eventInfo.setEventStatus('success');
    this.enrichAndAddEvent(eventInfo, eventBody);
  }

  private transactionEvent(analyticsEvent: EventInterface<AnalyticsInterface>) {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        if (cart) {
          const transactionBuilder = new DataLayerTransactionBuilder()
            .withDataLayerAttributes(
              AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, analyticsEvent.body?.attributes, new Cart())
            )
            .withTransactionID(cart.getCartID())
            .withItems(cart.getItems())
            .withPrice(cart.getPrice());

          this.dataLayerService
            .setTransaction(transactionBuilder.build())
            .catch((err) => this.logAnalyticsError(err))
            .then();
        } else {
          this.logAnalyticsError(new Error('No transaction analytics due to missing CART object'));
        }
      },
      error: (error) => this.logAnalyticsError(error),
    });
  }

  private addStepViewEvent(attributes: DataLayerAttributes) {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        const enrichedAttributes = Object.assign(attributes, analyticsAttributes);
        this.recalculateStepKey(enrichedAttributes);
        if (cart !== undefined) {
          enrichedAttributes.cart = cart;
        }
        this.dataLayerService.addStepViewEvent(enrichedAttributes).then();
      },
      error: (error) => this.logAnalyticsError(error),
    });
  }

  private recalculateStepKey(attributes: DataLayerAttributes) {
    if (attributes.stepId?.toUpperCase() === thankYouEventStepKey.toUpperCase()) {
      attributes.stepId = attributes.stepId + '-hardware';
    }
  }

  private setCart() {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        if (cart !== undefined) {
          const enrichedAttributes = AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, undefined, cart);
          const copyCart = new CartBuilder()
            .withCartId(cart.getCartID())
            .withDirectCallLabel(cart.getDirectCallLabel())
            .build();
          copyCart.setAttributes(enrichedAttributes);
          copyCart.setItems(cart.getItems());
          this.dataLayerService.setCart(copyCart).then();
        }
      },
      error: (error) => this.logAnalyticsError(error),
    });
  }

  private addStepLoadTimeEvent(stepName: string) {
    this.store
      .select(stepAnalytics)
      .pipe(
        take(1),
        tap((stepAnalytics) => {
          if (stepAnalytics.startLoadTime) {
            this.stepLoadTimeEvent({
              itemName: ((new Date().getTime() - stepAnalytics.startLoadTime) / 1000).toFixed(2).toString(),
            });
            this.store.dispatch(resetStepLoadTime());
          } else {
            this.logAnalyticsError(
              new Error('step-load-time could not be triggered because of missing start time for step ' + stepName)
            );
          }
        })
      )
      .subscribe();
  }
  private selectAnalyticsData() {
    return forkJoin([this.store.select(analyticsAttributes).pipe(take(1)), this.store.select(cart).pipe(take(1))]);
  }

  private getStepKey(stepEvent: EventInterface<StepEventBody>): string {
    return stepEvent.body?.stepKey || 'TBD';
  }

  private isBusinessPage(pagePath: string): boolean {
    const pattern = /business\/(en|nl|fr)/;
    return pattern.test(pagePath);
  }

  private errorEvent(analyticsEvent: AnalyticsInterface) {
    this.messageService.clearMessages(analyticsEvent.name);
    this.messageService.addMessage(new ErrorMessage(analyticsEvent.name, analyticsEvent.statusMessage || 'tbd'));

    const eventInfo = this.dataLayerService.createEventInfo(analyticsEvent.name, analyticsEvent.type, [
      analyticsEvent.name,
    ]);
    this.enrichAndAddEvent(eventInfo, analyticsEvent);
  }

  private enrichAndAddEvent(eventInfo: EventInfo, eventBody: AnalyticsInterface | undefined) {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        this.dataLayerService
          .addEvent(
            eventInfo,
            AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, eventBody?.attributes, cart),
            PrimaryCategories.SALES
          )
          .catch((err) => this.logAnalyticsError(err))
          .then();
      },
      error: (error) => console.warn(Errors.CONSOLE_MESSAGE, error),
    });
  }
}
