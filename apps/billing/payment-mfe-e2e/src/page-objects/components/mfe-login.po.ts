import { Locator, Page } from '@playwright/test';

export class MfeLoginComponent {
  readonly button: Locator;
  readonly icon: Locator;
  readonly message: Locator;
  readonly acceptCookiesButton: Locator;

  constructor(
    private readonly page: Page,
    private readonly componentRoot: Locator
  ) {
    this.acceptCookiesButton = this.page.locator('#onetrust-accept-btn-handler');
    this.button = this.page.locator('[data-cy="login-button-link"]');
    this.icon = this.componentRoot.locator('class=icon icon-error-shape warn');
    this.message = this.componentRoot.locator('span');
  }
}
