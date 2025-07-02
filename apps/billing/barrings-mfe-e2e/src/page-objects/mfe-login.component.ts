import { Locator } from '@playwright/test';

export class MfeLoginComponent {
  readonly self;
  readonly icon;
  readonly message;
  readonly button;
  readonly acceptCookiesLocator;

  constructor(private readonly componentRoot: Locator) {
    this.self = this.componentRoot;
    this.icon = this.componentRoot.locator('.icon-error-shape');
    this.message = this.componentRoot.locator('span');
    this.button = this.componentRoot.locator('[data-cy="login-button-link"]');
    this.acceptCookiesLocator = '#onetrust-accept-btn-handler';
  }
}
