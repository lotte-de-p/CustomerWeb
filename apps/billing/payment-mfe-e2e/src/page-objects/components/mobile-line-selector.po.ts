import { Locator } from '@playwright/test';
import NotificationBannerComponent from './notificationBanner.po';

export class MobileLineSelectorComponent {
  readonly self: Locator;
  readonly errorBanner: NotificationBannerComponent;
  readonly errorNotification: NotificationBannerComponent;
  readonly activationInProgressNotification: NotificationBannerComponent;
  readonly openButton: Locator;
  readonly sheetTitle: Locator;
  readonly list: Locator;
  readonly mobileLines: Locator;
  readonly name: Locator;
  readonly selected: Locator;

  public static readonly MOBILE_LINES_SELECTOR_OPEN_LABEL_KEY = 'Change line';
  public static readonly MOBILE_LINES_SELECTOR_NO_LINES_LABEL_KEY = "You don't have any active mobile subscriptions";
  public static readonly MOBILE_LINES_SELECTOR_NO_ACTIVE_LINES_TITLE_LABEL_KEY =
    'ng.mobile-line-selector.activation-in-progress-label';
  public static readonly MOBILE_LINES_SELECTOR_NO_ACTIVE_LINES_DESCRIPTION_LABEL_KEY =
    'ng.mobile-line-selector.activation-in-progress-description';
  public static readonly MOBILE_LINES_SELECTOR_SHEET_TITLE_LABEL_KEY = 'Select a phone number';
  public static readonly MOBILE_LINES_SELECTOR_DATA_SIM_LABEL_KEY = 'data sim';
  public static readonly MOBILE_LINES_SELECTOR_ERROR_MESSAGE_TITLE_LABEL_KEY =
    'ng.mobile-line-selector.lbl.error-label';
  public static readonly MOBILE_LINES_SELECTOR_ERROR_MESSAGE_DESCRIPTION_LABEL_KEY =
    'ng.mobile-line-selector.lbl.error-description';

  constructor(
    private readonly wrapper: Locator,
    private readonly slideIn: Locator,
    private readonly mfe: Locator
  ) {
    this.self = this.wrapper;
    this.errorBanner = new NotificationBannerComponent(this.mfe.locator('tg-error-notification'));
    this.errorNotification = new NotificationBannerComponent(this.mfe.locator('.notification'));
    this.activationInProgressNotification = new NotificationBannerComponent(
      this.mfe.locator('tg-mobile-activation-in-progress-notification')
    );
    this.openButton = this.wrapper.locator('[data-cy="change-mobile-line"]');
    this.sheetTitle = this.slideIn.locator('[data-cy="sheet-title"]');
    this.list = this.slideIn.locator('[data-cy="mobile-lines-list"]');
    this.mobileLines = this.list.locator('.mobile-line');
    this.name = this.wrapper.locator('[data-cy="selected-mobile-line-name"]');
    this.selected = this.wrapper.locator('[data-cy="selected-mobile-line-msisdn"]');
  }

  async open() {
    await this.openButton.click();
  }

  getMobileLineByIndex(index: number) {
    return this.list.locator('li').nth(index);
  }
}
