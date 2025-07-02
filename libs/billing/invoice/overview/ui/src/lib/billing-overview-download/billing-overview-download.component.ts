import { Component, inject, Input } from '@angular/core';
import { WinkButton, WinkIcon } from '@telenet/wink-ng';
import { NgIf } from '@angular/common';
import {
  Invoice,
  InvoiceOverviewDatalayerService,
  InvoiceOverviewService,
} from '@billing/invoice-overview/data-access';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BillingOverviewDownloadErrorDialogComponent } from '../billing-overview-download-error-dialog/billing-overview-download-error-dialog.component';
import { BillingOverviewLoadingComponent } from '../billing-overview-loading/billing-overview-loading.component';
import FileSaver from 'file-saver';

@Component({
  standalone: true,
  selector: 'tg-billing-overview-download',
  template: ` <ng-container>
    <wink-button
      *ngIf="invoice && !loading"
      data-testid="billing-overview-download"
      appearance="tertiary"
      icon="download"
      size="md"></wink-button>
    <tg-billing-overview-loading *ngIf="loading"></tg-billing-overview-loading>
  </ng-container>`,
  imports: [WinkIcon, NgIf, MatDialogModule, BillingOverviewLoadingComponent, WinkButton],
})
export class BillingOverviewDownloadComponent {
  @Input() invoice!: Invoice;
  loading = false;
  private readonly invoiceService = inject(InvoiceOverviewService);
  private readonly datalayerService = inject(InvoiceOverviewDatalayerService);
  private readonly dialog = inject(MatDialog);

  downloadDocument(): void {
    this.loading = true;
    this.datalayerService.sendDownloadInvoice();
    this.invoiceService.downloadDocument(this.invoice).subscribe({
      next: (response: Blob) => {
        const fileName = `${this.invoice.invoiceNumber}.pdf`;
        FileSaver.saveAs(response, fileName);
      },
      error: () => {
        this.loading = false;
        this.dialog.open(BillingOverviewDownloadErrorDialogComponent);
      },
      complete: () => (this.loading = false),
    });
  }
}
