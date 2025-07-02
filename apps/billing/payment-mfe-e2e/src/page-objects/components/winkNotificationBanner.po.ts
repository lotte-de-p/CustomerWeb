import { Locator } from 'playwright/test';

export default class WinkNotificationBannerComponent {
  readonly self: Locator;
  readonly title: Locator;
  readonly description: Locator;

  constructor(private readonly componentRoot: Locator) {
    this.self = this.componentRoot;
    this.title = this.componentRoot.locator('wink-title');
    this.description = this.componentRoot.locator('wink-paragraph');
  }
}
