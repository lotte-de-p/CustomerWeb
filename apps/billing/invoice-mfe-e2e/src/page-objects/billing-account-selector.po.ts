import { Locator } from '@playwright/test';
import { BillingAccountComponent } from './billing-account.po';

export class BillingAccountSelectorComponent {
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTED = '[data-testid="selected-billing-account"]';
  private static readonly BILLING_OVERVIEW_CHANGE_BILLING_ACCOUNT_SELECTOR = '[data-testid="change-billing-account"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTOR_LIST = '[data-testid="billing-accounts-list"]';

  constructor(
    private readonly wrapper: Locator,
    private readonly slideIn: Locator
  ) {}

  get self() {
    return this.wrapper;
  }

  get selected() {
    return this.wrapper.locator(BillingAccountSelectorComponent.BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTED);
  }

  get change() {
    return this.wrapper.locator(BillingAccountSelectorComponent.BILLING_OVERVIEW_CHANGE_BILLING_ACCOUNT_SELECTOR);
  }

  get list() {
    return this.slideIn.locator(BillingAccountSelectorComponent.BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTOR_LIST);
  }

  get items() {
    return this.list.locator('li');
  }

  getBillingAccount(index: number) {
    return new BillingAccountComponent(this.items.nth(index));
  }

  open() {
    return this.change.click();
  }
}
