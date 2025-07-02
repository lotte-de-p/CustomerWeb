import { Locator } from '@playwright/test';

export class MfeLoginComponent {
  private static readonly COOKIES_ACCEPT = '#onetrust-accept-btn-handler';

  constructor(private readonly componentRoot: Locator) {}

  get self() {
    return this.componentRoot;
  }

  get acceptCookiesLocator(): string {
    return MfeLoginComponent.COOKIES_ACCEPT;
  }
}
