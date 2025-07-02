import { Locator } from 'playwright/test';

export default class NotificationBannerComponent {
  readonly errorIcon: Locator;
  readonly errorImage: Locator;
  readonly errorIconShape: Locator;
  readonly alertIconShape: Locator;
  readonly successIconShape: Locator;
  readonly infoIconShape: Locator;
  readonly messageSpan: Locator;
  readonly messageDiv: Locator;
  readonly entirePageMessageTitle: Locator;
  readonly entirePageMessageDescription: Locator;
  readonly messageTitle: Locator;
  readonly messageDescription: Locator;
  readonly self: Locator;

  public static readonly NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY = 'ng.mobile-barrings.suspended-mobile-line';
  public static readonly NOTIFICATION_BANNER_MEMBER_MESSAGE_LABEL_KEY = 'ng.mobile-barrings.member-read-only';
  public static readonly NOTIFICATION_BANNER_FRAUD_MESSAGE_TITLE_LABEL_KEY =
    'ng.mobile-barrings.disabled-by-fraud.title';
  public static readonly NOTIFICATION_BANNER_FRAUD_MESSAGE_DESCRIPTION_LABEL_KEY =
    'ng.mobile-barrings.disabled-by-fraud.explanation';
  static readonly NOTIFICATION_BANNER_ACTIVATION_IN_PROGRESS_TITLE_LABEL_KEY =
    'ng.mobile-line-selector.activation-in-progress-label';
  static readonly NOTIFICATION_BANNER_ACTIVATION_IN_PROGRESS_DESCRIPTION_LABEL_KEY =
    'ng.mobile-line-selector.activation-in-progress-description';
  static readonly NOTIFICATION_BANNER_ERROR_MESSAGE_TITLE_LABEL_KEY = 'ng.mobile-barrings.error-barrings-label';
  static readonly NOTIFICATION_BANNER_ERROR_MESSAGE_DESCRIPTION_LABEL_KEY =
    'ng.mobile-barrings.error-barrings-description';
  static readonly NOTIFICATION_BANNER_GLOBAL_BARRINGS_MESSAGE_LABEL_KEY = 'ng.mobile-barrings.global-barring-enabled';
  static readonly NOTIFICATION_BANNER_SAVE_SUCCESSFUL_LABEL_KEY = 'ng.mobile-barrings.save-successful';

  constructor(private readonly componentRoot: Locator) {
    this.self = this.componentRoot;
    this.errorIcon = this.componentRoot.locator('.icon-error');
    this.errorImage = this.componentRoot.locator('.cmp-image');
    this.errorIconShape = this.componentRoot.locator('.icon-error-shape');
    this.alertIconShape = this.componentRoot.locator('.icon-alert-shape');
    this.successIconShape = this.componentRoot.locator('.icon-check-shape');
    this.infoIconShape = this.componentRoot.locator('.icon-information-shape');
    this.messageSpan = this.componentRoot.locator('span');
    this.messageDiv = this.componentRoot.locator('div');
    this.entirePageMessageTitle = this.componentRoot.locator('div[class="text-align--center"]').locator('div').nth(0);
    this.entirePageMessageDescription = this.componentRoot
      .locator('div[class="text-align--center"]')
      .locator('div')
      .nth(1);
    this.messageTitle = this.componentRoot.locator('.heading--6');
    this.messageDescription = this.componentRoot.locator('.font--body-regular');
  }
}
