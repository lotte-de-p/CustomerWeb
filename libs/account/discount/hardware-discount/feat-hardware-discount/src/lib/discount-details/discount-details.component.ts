import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { WinkBadge, WinkPricing, WinkButton, WinkIcon } from '@telenet/wink-ng';
import {
  HardwareDiscountDatalayerEvent,
  HardwareDiscountService,
  ImageSrcInterceptorDirective,
  UsedDiscounts,
} from '@discount/data-access';
import { PricePipe } from '@telenet/ng-lib-form';
import { get, isEmpty } from 'lodash-es';
import FileSaver from 'file-saver';
import { HardwareDiscountDownloadErrorDialogComponent } from '../hardware-discount-download-error-dialog/hardware-discount-download-error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'tg-discount-details',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    WinkBadge,
    WinkPricing,
    WinkButton,
    WinkIcon,
    DatePipe,
    PricePipe,
    ImageSrcInterceptorDirective,
  ],
  templateUrl: './discount-details.component.html',
  styleUrl: './discount-details.component.scss',
})
export class DiscountDetailsComponent {
  @Input() data!: UsedDiscounts;
  @Input() isLast!: boolean;

  @Output() analyticsData = new EventEmitter<{ event: HardwareDiscountDatalayerEvent; productId?: string }>();

  private readonly urlService: UrlService = inject(UrlService);
  private readonly dialog = inject(MatDialog);
  private readonly hardwareDiscountService: HardwareDiscountService = inject(HardwareDiscountService);

  showDiscount = false;
  loading = false;
  discountButtonText = 'ng.hardware-discount.show-remaining-discount-btn';
  chevronIcon = 'chevron-down';

  downloadInvoices(): void {
    if (!isEmpty(this.data.invoice)) {
      this.loading = true;
      this.hardwareDiscountService.getHardwareInvoice(this.data.invoice).subscribe({
        next: (data: Blob) => {
          const fileName = `${this.data.invoice.documentReferenceNumber}.pdf`;
          FileSaver.saveAs(data, fileName);
        },
        error: () => {
          this.loading = false;
          this.dialog.open(HardwareDiscountDownloadErrorDialogComponent);
        },
        complete: () => (this.loading = false),
      });
    } else {
      this.dialog.open(HardwareDiscountDownloadErrorDialogComponent);
    }
    this.sendEvent('see hardware invoice clicked');
  }

  showRemainingDiscount(): void {
    this.showDiscount = !this.showDiscount;
    if (this.showDiscount) {
      this.discountButtonText = 'ng.hardware-discount.hide-remaining-discount-btn';
      this.chevronIcon = 'chevron-up';
      this.sendEvent('view remaining discount value clicked');
    } else {
      this.discountButtonText = 'ng.hardware-discount.show-remaining-discount-btn';
      this.chevronIcon = 'chevron-down';
    }
  }

  redirectToTrackingUrl(): void {
    this.urlService.openNewTab(this.data.deliveryOrder.tracking.url);
  }

  sendEvent(eventName: string): void {
    const event = {
      eventName: eventName,
      eventType: 'click',
    } as HardwareDiscountDatalayerEvent;
    const productId = get(this.data, 'device.itemCode');
    this.analyticsData.emit({ event, productId });
  }
}
