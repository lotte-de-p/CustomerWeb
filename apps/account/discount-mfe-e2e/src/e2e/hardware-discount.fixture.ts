import { test as baseTest } from '@tools/e2e';
import { HardwareDiscountPage } from '../page-objects/hardware-discount.po';

export type TestFixture = {
  hardwareDiscountPage: HardwareDiscountPage;
};

export const APPLICATION_PREFIX = 'discount-mfe';

export const test = baseTest.extend<TestFixture>({
  hardwareDiscountPage: async ({ page }, use: Function) => {
    await use(new HardwareDiscountPage(page));
  },
});
