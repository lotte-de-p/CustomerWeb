import { Injectable } from '@angular/core';
import { AttributeEnum, DataLayerService, DataLayerServiceProvider } from '@telenet/ng-lib-datalayer';

@Injectable({
  providedIn: 'root',
})
export class InboxMessagesDatalayerService {
  private readonly MESSAGE_GROUP = 'inbox-messages';
  private readonly PRIMARY_CATEGORY = 'general';

  private readonly NOTIFICATION_NAME = 'notification';
  private readonly NOTIFICATIONS_DATA = 'notifications';
  private readonly ITEM_GROUP_NEW_MESSAGES = 'new messages';
  private readonly ITEM_GROUP_NO_NEW_MESSAGES = 'no new messages';
  private readonly ITEM_GROUP_DELETE_MESSAGE = 'delete message';

  private readonly EVENT_NAME_HEADER_CLICKED = 'header clicked';
  private readonly EVENT_TYPE_CLICK = 'click';

  private readonly EVENT_NAME_NOTIFICATION_CARD = 'notification card';
  private readonly EVENT_TYPE_IMPRESSION = 'impression';

  constructor(
    private readonly dataLayerServiceProvider: DataLayerServiceProvider,
    private readonly dataLayerService: DataLayerService
  ) {}

  sendNotificationClickedEvent(url: string, unreadNotifications: boolean) {
    const { KEY_ITEM_NAME, KEY_ITEM_DATA, KEY_ITEM_GROUP, KEY_DESTINATION_URL } = AttributeEnum;

    const attributes = {
      [KEY_ITEM_NAME]: this.NOTIFICATION_NAME,
      [KEY_ITEM_DATA]: this.NOTIFICATIONS_DATA,
      [KEY_ITEM_GROUP]: unreadNotifications ? this.ITEM_GROUP_NEW_MESSAGES : this.ITEM_GROUP_NO_NEW_MESSAGES,
      [KEY_DESTINATION_URL]: url,
    };

    return this.sendEventWithAttributes(this.EVENT_NAME_HEADER_CLICKED, this.EVENT_TYPE_CLICK, attributes);
  }

  sendInboxMessageClickedEvent(title: string, url: string, buttonText?: string): void {
    const { KEY_ITEM_NAME, KEY_ITEM_DATA, KEY_DESTINATION_URL } = AttributeEnum;

    const attributes = {
      [KEY_ITEM_NAME]: title,
      [KEY_ITEM_DATA]: buttonText,
      [KEY_DESTINATION_URL]: url,
    };

    this.sendEventWithAttributes(this.EVENT_NAME_NOTIFICATION_CARD, this.EVENT_TYPE_CLICK, attributes);
  }

  sendInboxMessageDeleteEvent(id: string, title?: string): void {
    const { KEY_ITEM_NAME, KEY_ITEM_DATA, KEY_ITEM_GROUP } = AttributeEnum;

    const attributes = {
      [KEY_ITEM_NAME]: id,
      [KEY_ITEM_DATA]: title,
      [KEY_ITEM_GROUP]: this.ITEM_GROUP_DELETE_MESSAGE,
    };

    this.sendEventWithAttributes(this.EVENT_NAME_NOTIFICATION_CARD, this.EVENT_TYPE_CLICK, attributes);
  }

  sendInboxMessageImpressionEvents(titles: string[]): void {
    if (titles && titles.length > 0) {
      titles.forEach((title) => {
        this.sendInboxMessageImpressionEvent(title);
      });
    }
  }

  sendInboxMessageImpressionEvent(title: string): void {
    const { KEY_ITEM_NAME } = AttributeEnum;

    const attributes = {
      [KEY_ITEM_NAME]: title,
    };

    this.sendEventWithAttributes(this.EVENT_NAME_NOTIFICATION_CARD, this.EVENT_TYPE_IMPRESSION, attributes);
  }

  sendEventWithAttributes(name: string, type: string, attributes: Record<string, string | undefined>) {
    const category = this.dataLayerService.createCategory(this.PRIMARY_CATEGORY, this.MESSAGE_GROUP);

    const eventInfo = this.dataLayerService.createEventInfo(name, type, [this.MESSAGE_GROUP]);

    return this.dataLayerService?.sendEvent({ eventInfo, attributes, category });
  }

  initDataLayer(): void {
    this.dataLayerServiceProvider.init();
  }
}
