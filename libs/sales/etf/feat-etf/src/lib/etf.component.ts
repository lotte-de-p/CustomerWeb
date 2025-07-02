import { Component, OnInit } from '@angular/core';
import { StepComponent } from '@sales/shared/data-access';
import { CommonModule } from '@angular/common';
import { forkJoin, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { AnalyticsInterface, EventFacade } from '@sales/events/data-access';
import { etfStepLoaded } from './events/etf-step-loaded.const';
import { ViewModel } from './interfaces/view-model.interface';
import { EtfFacade, OrderItemWithDiscount, UsedSlot } from '@sales/etf/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { etfResponseIdObject } from './interfaces/response-model.interface';
import { stepImage } from './constants/etf-event-step-key.const';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { AssetService } from '@telenet/ng-lib-page';
import {
  EtfListComponent,
  OrderItemComponent,
  OrderItemMarkedAsNoDiscountComponent,
  OrderItemWithEtfListComponent,
  OrderItemWithTerminationComponent,
} from '@sales/etf/ui';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { createEtfStepViewed } from './constants/etf-step-finished.const';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    InlineSVGModule,
    TgFormsModule,
    EtfListComponent,
    OrderItemComponent,
    OrderItemWithEtfListComponent,
    OrderItemWithTerminationComponent,
    OrderItemMarkedAsNoDiscountComponent,
  ],
  selector: 'tg-sales-etf',
  templateUrl: './etf.component.html',
})
@UntilDestroy()
export class EtfComponent implements StepComponent, OnInit {
  viewModel: ViewModel | undefined;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly etfFacade: EtfFacade
  ) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
      discountItems: this.etfFacade.orderItemsWithDiscount$,
      usedAndPendingDiscounts: this.etfFacade.usedAndPendingDiscountSlots$,
      showValidationNotification: false,
    };
  }

  ngOnInit(): void {
    this.eventFacade.triggerEvent(etfStepLoaded);
  }

  onNextStep(): Observable<boolean> {
    this.validateAndApplyEtf();
    return of(false);
  }

  private validateAndApplyEtf() {
    forkJoin({
      orderItemsWithDiscount: this.etfFacade.orderItemsWithDiscount$.pipe(take(1)),
      usedDiscountSlots: this.etfFacade.usedAndPendingDiscountSlots$.pipe(take(1)),
    })
      .pipe(untilDestroyed(this))
      .subscribe(({ orderItemsWithDiscount, usedDiscountSlots }) => {
        if (!orderItemsWithDiscount || !usedDiscountSlots) {
          throw new Error('No order item');
        }

        const hasOrderItemsThatAreNotMarkedYet = orderItemsWithDiscount.some(
          (orderItemWithDiscount) => !orderItemWithDiscount.hasMadeASelection
        );

        this.setShowValidationNotification(hasOrderItemsThatAreNotMarkedYet);

        if (!hasOrderItemsThatAreNotMarkedYet) {
          this.applyEtf(orderItemsWithDiscount, usedDiscountSlots);
        }
      });
  }

  private validateOnly() {
    forkJoin({
      orderItemsWithDiscount: this.etfFacade.orderItemsWithDiscount$.pipe(take(1)),
      usedDiscountSlots: this.etfFacade.usedAndPendingDiscountSlots$.pipe(take(1)),
    })
      .pipe(untilDestroyed(this))
      .subscribe(({ orderItemsWithDiscount, usedDiscountSlots }) => {
        if (!orderItemsWithDiscount || !usedDiscountSlots) {
          throw new Error('No order item');
        }

        const hasOrderItemsThatAreNotMarkedYet = orderItemsWithDiscount.some(
          (orderItemWithDiscount) => !orderItemWithDiscount.hasMadeASelection
        );

        this.setShowValidationNotification(hasOrderItemsThatAreNotMarkedYet);
      });
  }

  setShowEtfOptions(orderItemWithDiscount: OrderItemWithDiscount, showEtfOptions: boolean) {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'enable discount link clicked' });
    this.etfFacade.setShowEtfOptions(orderItemWithDiscount, showEtfOptions);
  }

  setOrderItemTerminationStateEvent(event: { orderItemWithDiscount: OrderItemWithDiscount; buyWithDiscount: boolean }) {
    const clickEvent: AnalyticsInterface = {
      name: 'terminate existing contract selected',
      attributes: {
        itemName: `discount-slot-${event.orderItemWithDiscount.id}`,
        itemData: event.buyWithDiscount ? 'yes' : 'no',
      },
    };
    this.eventFacade.triggerAnalyticsClickEvent(clickEvent);

    if (event.buyWithDiscount) {
      this.etfFacade.setShowEtfOptions(event.orderItemWithDiscount, true);
    } else {
      this.etfFacade.setOrderItemToMarkedForBuyingWithoutDiscount(event.orderItemWithDiscount);
    }
    this.etfFacade.setShowEtfOptions(event.orderItemWithDiscount, event.buyWithDiscount);
  }

  cancelEtfTermination(orderItemWithDiscount: OrderItemWithDiscount) {
    const analyticsEvent: AnalyticsInterface = {
      name: 'cancel button clicked',
      attributes: {
        itemName: `discount-slot-${orderItemWithDiscount.id}`,
      },
    };
    this.eventFacade.triggerAnalyticsClickEvent(analyticsEvent);

    this.etfFacade.cancelEtfTermination(orderItemWithDiscount);
    this.etfFacade.setShowEtfOptions(orderItemWithDiscount, false);
  }

  selectDiscountToTerminate(event: { orderItemWithDiscount: OrderItemWithDiscount; usedDiscountSlot: UsedSlot }) {
    const analyticsEvent: AnalyticsInterface = {
      name: 'apply button clicked',
      attributes: {
        itemName: `discount-slot-${event.orderItemWithDiscount.id}`,
      },
    };
    this.eventFacade.triggerAnalyticsClickEvent(analyticsEvent);

    this.etfFacade.setDiscountToTerminate(event.orderItemWithDiscount, event.usedDiscountSlot);
    this.etfFacade.setShowEtfOptions(event.orderItemWithDiscount, false);
    this.validateOnly();
  }

  setOrderItemMarkedForDiscount(orderItemWithDiscount: OrderItemWithDiscount) {
    this.etfFacade.resetOrderItem(orderItemWithDiscount);
  }

  private applyEtf(orderItemsWithDiscount: OrderItemWithDiscount[], usedDiscountSlots: UsedSlot[]) {
    const orderItemsToAddDiscounts: etfResponseIdObject[] = [];

    if (orderItemsWithDiscount) {
      orderItemsWithDiscount.forEach((orderItemWithDiscount) => {
        if (orderItemWithDiscount.selectedEtfDiscountSlot) {
          orderItemsToAddDiscounts.push({ id: orderItemWithDiscount.rule.targetOrderItemIds[0] });
        }
      });
    }

    const discountIdsToRemove: { id: string }[] = [];
    if (usedDiscountSlots) {
      usedDiscountSlots.forEach((usedDiscountSlot) => {
        if (usedDiscountSlot.shouldBeTerminated) {
          discountIdsToRemove.push({ id: usedDiscountSlot.id });
        }
      });
    }
    this.eventFacade.triggerEvent(createEtfStepViewed(discountIdsToRemove, orderItemsToAddDiscounts));
  }

  private setShowValidationNotification(show: boolean) {
    if (this.viewModel) {
      this.viewModel.showValidationNotification = show;
    }
  }
}
