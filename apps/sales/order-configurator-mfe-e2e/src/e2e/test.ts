import { test as base } from '@tools/e2e';

import { OrderConfiguratorPage } from './page-object/order-configurator-page';
import { InstallationAddressPage } from './page-object/installation-address-page';
import { InstallationTypePage } from './page-object/installation-type-page';

export const test = base.extend<{
  orderConfigurator: OrderConfiguratorPage;
  installationAddressPage: InstallationAddressPage;
  installationTypePage: InstallationTypePage;
}>({
  orderConfigurator: async ({ page }, use) => {
    const orderConfigurator = new OrderConfiguratorPage(page);
    await use(orderConfigurator);
  },
  installationAddressPage: async ({ page }, use) => {
    const installationAddressPage = new InstallationAddressPage(page);
    await use(installationAddressPage);
  },
  installationTypePage: async ({ page }, use) => {
    const installationTypePage = new InstallationTypePage(page);
    await use(installationTypePage);
  },
});
