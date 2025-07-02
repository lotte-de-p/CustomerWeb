import { Locator } from 'playwright/test';

export default class NotificationBannerComponent {
  readonly self: Locator;
  readonly errorIcon: Locator;
  readonly errorImage: Locator;
  readonly errorIconShape: Locator;
  readonly alertIconShape: Locator;
  readonly successIconShape: Locator;
  readonly infoIconShape: Locator;
  readonly message: Locator;
  readonly messageDiv: Locator;
  readonly messageTitle: Locator;
  readonly messageDescription: Locator;

  constructor(private readonly componentRoot: Locator) {
    const centered_div = 'div[class="text-align--center"]';
    this.self = this.componentRoot;
    this.errorIcon = this.componentRoot.locator('.icon-error');
    this.errorImage = this.componentRoot.locator('.cmp-image');
    this.errorIconShape = this.componentRoot.locator('.icon-error-shape');
    this.alertIconShape = this.componentRoot.locator('.icon-alert-shape');
    this.successIconShape = this.componentRoot.locator('.icon-check-shape');
    this.infoIconShape = this.componentRoot.locator('.icon-information-shape');
    this.message = this.componentRoot.locator('span');
    this.messageDiv = this.componentRoot.locator(centered_div);
    this.messageTitle = this.componentRoot.locator(centered_div).locator('div').nth(0);
    this.messageDescription = this.componentRoot.locator(centered_div).locator('div').nth(1);
  }
}
