import { Page } from '@playwright/test';
import { DATA_TESTID } from '../../support/app.po';

const FEAT_INSTALLATION_TYPE_DELIVERY_METHOD = DATA_TESTID + 'installation-delivery-method';

export class InstallationTypePage {
  constructor(private readonly page: Page) {}

  deliveryMethods() {
    return this.page.locator(FEAT_INSTALLATION_TYPE_DELIVERY_METHOD);
  }

  async selectFirstDeliveryMethod() {
    await this.page.locator(FEAT_INSTALLATION_TYPE_DELIVERY_METHOD).first().click();
  }
}
