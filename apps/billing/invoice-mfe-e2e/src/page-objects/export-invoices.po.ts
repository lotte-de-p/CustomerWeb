import { Locator } from '@playwright/test';

export class ExportInvoicesComponent {
  private static readonly EXPORT_INVOICES_PREFIX = 'billing-overview-export-';
  private static readonly EXPORT_INVOICES_ERROR = '[data-testid="billing-overview-export-failure"]';

  constructor(
    private readonly wrapper: Locator,
    private readonly slideIn: Locator
  ) {}

  get self() {
    return this.wrapper;
  }

  open() {
    return this.wrapper.click();
  }

  export(exportType: 'csv' | 'pdf' | 'zip') {
    return this.slideIn
      .locator(`[data-testid="${ExportInvoicesComponent.EXPORT_INVOICES_PREFIX}${exportType}"]`)
      .click();
  }

  get error() {
    return this.slideIn.locator(ExportInvoicesComponent.EXPORT_INVOICES_ERROR);
  }
}
