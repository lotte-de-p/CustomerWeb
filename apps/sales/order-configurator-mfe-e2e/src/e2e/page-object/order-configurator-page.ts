import { Page } from '@playwright/test';
import {
  CustomerOrderingAllInternetProduct,
  CustomerOrderingNotInstallableProduct,
  DATA_TESTID,
} from '../../support/app.po';

const FEAT_INSTALLATION_ADDRESS = DATA_TESTID + 'feat-installation-address';
const STEP_INSTALLATION_TYPE = DATA_TESTID + 'step-installation-type';

export class OrderConfiguratorPage {
  constructor(private readonly page: Page) {}

  async scenarioCustomerOrderingAllInternet() {
    await CustomerOrderingAllInternetProduct(this.page);
    await this.page.goto('/?sdata=XQAAAAIsAAAAAAAAAABAqYnmbFEIbVbO-Byot3B8ofI0dvkJhCpWNGa6vTUcm-wwv_wnbaHIeq___zgMAAA');
  }

  async scenarioCustomerOrderingNotInstallableProduct() {
    await CustomerOrderingNotInstallableProduct(this.page);
    await this.page.goto(
      '/?sdata=XQAAAAJPAAAAAAAAAABAqYnmbFEIbVbO-Byot3B8C0q-F_XQkKvykh2w0BsqSXOREg84N-8HwYmGrXkMha-KhkLkTQzakoKqwjSZGM6f8z-uCT6Or_6A4__8r5TA'
    );
  }

  getFeatureInstallationAddress() {
    return this.page.locator(FEAT_INSTALLATION_ADDRESS);
  }

  getStepInstallationType() {
    return this.page.locator(STEP_INSTALLATION_TYPE);
  }

  async gotoNextStep() {
    await this.page.locator('data-testid=navigation-bar-next').click();
  }
}
