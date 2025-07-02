import { Locator } from '@playwright/test';

export class DownloadErrorDialogComponent {
  private static readonly BILLING_OVERVIEW_DOWNLOAD_ERROR_DIALOG_CLOSE =
    '[data-testid="billing-overview-download-error-dialog-close"]';

  constructor(private readonly element: Locator) {}

  get self() {
    return this.element;
  }

  get close() {
    return this.element.locator(DownloadErrorDialogComponent.BILLING_OVERVIEW_DOWNLOAD_ERROR_DIALOG_CLOSE);
  }
}
