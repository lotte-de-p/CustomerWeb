import { Component, inject, Input } from '@angular/core';
import { SlideMenuComponent } from '@billing/shared/ui';
import { WinkButton, WinkIcon, WinkNotification, WinkTitle } from '@telenet/wink-ng';
import { TranslateModule } from '@ngx-translate/core';
import {
  ExportType,
  InvoiceOverviewDatalayerService,
  InvoiceOverviewService,
} from '@billing/invoice-overview/data-access';
import { LanguageService } from '@telenet/ng-lib-page';
import FileSaver from 'file-saver';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-billing-overview-export',
  standalone: true,
  imports: [SlideMenuComponent, TranslateModule, WinkIcon, WinkButton, WinkNotification, WinkTitle, NgIf],
  templateUrl: './billing-overview-export.component.html',
  styleUrl: './billing-overview-export.component.scss',
})
export class BillingOverviewExportComponent {
  private readonly invoiceOverviewService = inject(InvoiceOverviewService);
  private readonly datalayerService = inject(InvoiceOverviewDatalayerService);
  private readonly languageService = inject(LanguageService);

  @Input() billingAccountNumber!: string;
  showMenu = false;
  downloading: ExportType | undefined;
  error: ExportType | undefined;

  open(event: Event) {
    event.stopPropagation();
    this.showMenu = true;
  }

  close() {
    this.showMenu = false;
  }

  export(exportType: ExportType) {
    this.downloading = exportType;
    this.error = undefined;
    this.datalayerService.sendExportInvoices(exportType);
    this.invoiceOverviewService
      .exportInvoices(this.billingAccountNumber, exportType, this.languageService.getLanguage())
      .subscribe({
        next: (response: Blob) => {
          const fileName = `export.${exportType}`;
          this.downloading = undefined;
          FileSaver.saveAs(response, fileName);
        },
        error: () => {
          this.error = exportType;
          this.downloading = undefined;
        },
      });
  }
}
