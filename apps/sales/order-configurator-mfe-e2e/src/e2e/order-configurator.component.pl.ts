import { expect } from '@tools/e2e';

import { FEAT_ERROR } from '../support/app.po';
import { test } from './test';

test.describe('order-configurator-mfe: Order Configurator Page', () => {
  test.describe('INTERNET SDATA', () => {
    test.beforeEach(async ({ orderConfigurator }) => {
      await orderConfigurator.scenarioCustomerOrderingAllInternet();
    });

    test('should render the page', async ({ orderConfigurator, installationAddressPage }) => {
      await expect(orderConfigurator.getFeatureInstallationAddress()).toBeVisible();
      const addedEditAction = installationAddressPage.getAddEditInstallationAddressAction();
      await expect(addedEditAction).toBeVisible();
    });
  });

  test.describe('Products not requiring installation should skip Installation-address feature', () => {
    test.beforeEach(async ({ orderConfigurator }) => {
      await orderConfigurator.scenarioCustomerOrderingNotInstallableProduct();
    });

    test('Hardware', async ({ orderConfigurator }) => {
      await expect(orderConfigurator.getStepInstallationType()).toBeVisible();
    });
  });

  test.describe('Should render error for incorrect SDATA', () => {
    test('no SDATA', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator(FEAT_ERROR)).toBeVisible();
    });
    test('invalid SDATA', async ({ page }) => {
      await page.goto('/?sdata=invalid');
      await expect(page.locator(FEAT_ERROR)).toBeVisible();
    });
    test('empty SDATA', async ({ page }) => {
      await page.goto('/?sdata=');
      await expect(page.locator(FEAT_ERROR)).toBeVisible();
    });
  });

  test.describe('Customer ordering all internet', () => {
    test.beforeEach(async ({ orderConfigurator }) => {
      await orderConfigurator.scenarioCustomerOrderingAllInternet();
    });

    test('should see and can select installation types', async ({ orderConfigurator, installationTypePage }) => {
      await expect(orderConfigurator.getFeatureInstallationAddress()).toBeVisible();
      await orderConfigurator.gotoNextStep();
      await expect(orderConfigurator.getStepInstallationType()).toBeVisible();
      await expect(installationTypePage.deliveryMethods()).toHaveCount(3);
      await installationTypePage.selectFirstDeliveryMethod();
    });
  });
});
