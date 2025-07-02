import { Page } from '@playwright/test';
import { DATA_TESTID } from '../../support/app.po';

const FEAT_INSTALLATION_ADDRESS_ACTION = DATA_TESTID + 'feat-installation-address-add-edit-action-desktop';

export class InstallationAddressPage {
  constructor(private readonly page: Page) {}

  getAddEditInstallationAddressAction() {
    return this.page.locator(FEAT_INSTALLATION_ADDRESS_ACTION);
  }
}
