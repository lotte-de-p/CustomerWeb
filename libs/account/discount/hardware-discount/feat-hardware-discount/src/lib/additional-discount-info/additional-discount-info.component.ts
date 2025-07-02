import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareDiscountDatalayerEvent, ImageSrcInterceptorDirective } from '@discount/data-access';
import { WinkIcon } from '@telenet/wink-ng';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-additional-discount-info',
  standalone: true,
  imports: [CommonModule, ImageSrcInterceptorDirective, TranslateModule, WinkIcon],
  templateUrl: './additional-discount-info.component.html',
})
export class AdditionalDiscountInfoComponent {
  @Input() hardwareInvoicesLink!: string;

  @Output() analyticsData = new EventEmitter<{ event: HardwareDiscountDatalayerEvent; productId?: string }>();

  private readonly urlService: UrlService = inject(UrlService);

  redirectToHardwareBills(): void {
    this.urlService.redirectTo(this.hardwareInvoicesLink);
    const event = {
      eventName: 'view hardware invoices clicked',
      eventType: 'click',
    } as HardwareDiscountDatalayerEvent;
    this.analyticsData.emit({ event });
  }
}
