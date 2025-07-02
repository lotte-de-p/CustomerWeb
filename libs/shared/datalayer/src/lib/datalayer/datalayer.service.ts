import { Inject, Injectable } from '@angular/core';
import * as udl from 'udl';
import { EventTypeEnum } from './enums/event-type.enum';
import { DataLayerAttributes } from './interfaces/data-layer-attributes';
import { EventNameEnum } from './enums/event-name.enum';
import { EventStatusEnum } from './enums/event-status.enum';
import { AbstractMessage, MessageService } from '@telenet/ng-lib-message';
import { mergeMap, tap } from 'rxjs/operators';
import { DirectCallLabelEnum } from 'udl';
import { forkJoin, timer } from 'rxjs';
import { EventProperties } from './interfaces/udl-event-properties';

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  private dataLayer!: udl.DataLayer;

  constructor(
    private readonly messageService: MessageService,
    @Inject('Window')
    private readonly window: Record<string, unknown>
  ) {}

  init() {
    const udlObjectName = this.window['udlObjectName'] as string;
    this.dataLayer = udl.DataLayer.create();
    if (this.window[udlObjectName] && udlObjectName) {
      let componentList = this.dataLayer.getComponents();
      if (componentList && componentList.length > 0) {
        componentList = componentList.map(function (componentItem) {
          return new udl.Component(componentItem);
        });
      }
      this.dataLayer.setComponents(componentList);
    }
    return true;
  }

  getDataLayer(): udl.DataLayer {
    return this.dataLayer;
  }

  setPage(page: udl.Page): Promise<boolean> {
    if (this.dataLayer) {
      return this.dataLayer.setPage(page);
    }
    return new Promise(() => false);
  }

  getCategory(componentInstanceId: string): udl.Category | null {
    if (this.dataLayer) {
      return this.dataLayer.getCategory(componentInstanceId);
    }
    return null;
  }

  createCategory(primaryCategory: string = '', subCategory1?: string): udl.Category {
    const category = new udl.Category();
    category.setPrimaryCategory(primaryCategory);
    if (subCategory1) {
      category.setSubCategory1(subCategory1);
    }

    return category;
  }

  addPageEvent(pageId: string, attributes?: Record<string, string | boolean | number>): void {
    const pageInfoObject = new udl.PageInfo();
    pageInfoObject.setPageID(pageId);
    pageInfoObject.setPageName(pageId);
    pageInfoObject.setLanguage(this.dataLayer.getPage().getPageInfo().getLanguage());

    const page = new udl.Page({ pageInfo: pageInfoObject });
    if (attributes) {
      Object.keys(attributes).forEach((key) => page.addAttribute(key, attributes[key]));
    }

    this.setPage(page).then();
  }

  addStepViewEvent(attributes: DataLayerAttributes): Promise<boolean> {
    const event = new udl.Event();
    const eventInfo = this.createEventInfo(EventNameEnum.EVENT_NAME_VIEW_STEP);
    event.setEventInfo(eventInfo);
    event.setAttributes(attributes);

    if (this.dataLayer) {
      return this.dataLayer.addStepViewEvent(event);
    }
    return new Promise(() => false);
  }

  createEvent(eventProperties: EventProperties): udl.Event {
    const { eventInfo, attributes, strategy, category, directCallLabel } = eventProperties;
    const event = new udl.Event();
    event.setEventInfo(eventInfo);
    event.setAttributes(attributes);
    if (strategy) {
      event.setStrategy(strategy);
    }

    if (category) {
      event.setCategory(category);
    }

    if (directCallLabel) {
      event.setDirectCallLabel(directCallLabel);
    }

    return event;
  }

  sendEvent(eventProperties: EventProperties): Promise<boolean> {
    const event = this.createEvent(eventProperties);
    if (this.dataLayer) {
      return this.dataLayer.addEvent(event);
    }
    return new Promise(() => false);
  }

  addEvent(
    eventInfo: udl.EventInfo,
    attributes: DataLayerAttributes,
    category?: udl.Category,
    directCallLabel?: udl.DirectCallLabelEnum
  ): Promise<boolean> {
    const event = new udl.Event();
    event.setEventInfo(eventInfo);
    event.setAttributes(attributes);

    if (category) {
      event.setCategory(category);
    }

    if (directCallLabel) {
      event.setDirectCallLabel(directCallLabel as DirectCallLabelEnum);
    }

    if (this.dataLayer) {
      return this.dataLayer.addEvent(event);
    }
    return new Promise(() => false);
  }

  addStepLoadTimeEvent(attributes: DataLayerAttributes) {
    const eventInfo = this.createEventInfo(
      EventNameEnum.EVENT_NAME_STEP_LOAD_TIME,
      EventTypeEnum.EVENT_TYPE_STEP_LOAD_TIME
    );
    return this.addEvent(eventInfo, attributes);
  }

  setCart(cart: udl.Cart): Promise<boolean> {
    if (this.dataLayer) {
      return this.dataLayer.setCart(cart);
    }
    return new Promise(() => false);
  }

  getCart(): udl.Cart | null {
    if (this.dataLayer) {
      return this.dataLayer.getCart();
    }
    return null;
  }

  createEventInfo(eventName: string, eventType?: string, messageGroups?: string[]): udl.EventInfo {
    const eventInfo = new udl.EventInfo();
    eventInfo.setEventName(eventName);
    eventInfo.setType(eventType ?? '');
    eventInfo.setEventStatus(this.getStatus(messageGroups?.length ? messageGroups : []));
    eventInfo.setEventStatusMessage(this.getStatusMessage(messageGroups?.length ? messageGroups : []));
    return eventInfo;
  }

  createCart(cartId: string, price?: udl.Price): udl.Cart {
    const cart = new udl.Cart();
    cart.setCartID(cartId);
    cart.setPrice(price ?? new udl.Price());

    return cart;
  }

  createTransaction(transactionId: string, price: udl.Price): udl.Transaction {
    const transaction = new udl.Transaction();
    transaction.setTransactionID(transactionId);
    transaction.setPrice(price);

    return transaction;
  }

  setTransaction(transaction: udl.Transaction): Promise<boolean> {
    if (this.dataLayer) {
      return this.dataLayer.setTransaction(transaction);
    }
    return new Promise(() => false);
  }

  createPrice(
    oneTimePrice?: number,
    recurringPrice?: number,
    basePrice?: udl.Price,
    totalPrice?: udl.Price,
    discountedPrice?: udl.Price
  ) {
    const price = new udl.Price();
    price.setOnetimePrice(oneTimePrice ?? 0);
    price.setRecurringPrice(recurringPrice ?? 0);
    price.setBasePrice(basePrice ?? new udl.Price());
    price.setTotalPrice(totalPrice ?? new udl.Price());
    price.setDiscountedPrice(discountedPrice ?? new udl.Price());

    return price;
  }

  createProductInfo(productId: string, productName?: string, productType?: string, productStatus?: string) {
    const product = new udl.Product();
    product.setProductID(productId);
    product.setProductName(productName ?? '');
    product.setProductType(productType ?? '');
    product.setProductStatus(productStatus ?? '');

    return product;
  }

  createItem(productInfo: udl.Product, price?: udl.Price, quantity?: number) {
    const item = new udl.Item();
    item.setProductInfo(productInfo);
    item.setPrice(price ?? new udl.Price());
    item.setQuantity(quantity ?? 0);

    return item;
  }

  private getStatus(messageGroups: string[]): string {
    if (messageGroups?.length) {
      for (const messageGroup of messageGroups) {
        if (this.messageService.hasErrorMessages(messageGroup)) {
          return EventStatusEnum.EVENT_STATUS_FAILED;
        }
      }
      return EventStatusEnum.EVENT_STATUS_SUCCESS;
    }
    return EventStatusEnum.EVENT_STATUS_MESSAGE_EMPTY;
  }

  private getStatusMessage(messageGroups: string[]): string {
    let statusMessages = '';
    let messagesFromMessageService: AbstractMessage[] = [];
    if (messageGroups?.length) {
      for (const messageGroup of messageGroups) {
        if (this.messageService.hasErrorMessages(messageGroup)) {
          messagesFromMessageService = messagesFromMessageService.concat(
            this.messageService.getErrorMessages(messageGroup)
          );
        }
      }
      messagesFromMessageService = messagesFromMessageService.filter((msg) => msg.type !== 'success');
      statusMessages = messagesFromMessageService.map((msg) => msg['_key']).join(',');
    }
    return statusMessages;
  }

  getAnalyticsPromises(): Promise<boolean>[] {
    if (this.dataLayer) {
      return this.dataLayer.getAnalyticsPromises();
    }
    return [];
  }

  rollbackStepIdToParent(stepId: string): void {
    timer(100)
      .pipe(
        mergeMap(() => {
          const analyticsPromises = this.getAnalyticsPromises();
          return forkJoin(analyticsPromises);
        }),
        tap(() => this.getDataLayer().getPage().getPageInfo().setStepId(stepId))
      )
      .subscribe();
  }
}
