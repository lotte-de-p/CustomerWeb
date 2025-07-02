import { Locator } from '@playwright/test';

export class MfeLoginComponent {
  private static readonly LOGIN_BUTTON = '[data-cy="login-button-link"]';
  private static readonly LOGIN_TEXT = 'span';
  private static readonly ICON = 'class=icon icon-error-shape warn';
  private static readonly COOKIES_ACCEPT = '#onetrust-accept-btn-handler';

  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get icon() {
    return this.componentRoot.locator(MfeLoginComponent.ICON);
  }

  get message() {
    return this.componentRoot.locator(MfeLoginComponent.LOGIN_TEXT);
  }

  get button() {
    return this.componentRoot.locator(MfeLoginComponent.LOGIN_BUTTON);
  }

  get acceptCookiesLocator(): string {
    return MfeLoginComponent.COOKIES_ACCEPT;
  }
}
