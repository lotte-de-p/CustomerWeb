import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareDiscount, HardwareDiscountDatalayerEvent } from '@discount/data-access';
import { WinkButton, WinkIcon, WinkNotification, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { UrlService } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-discount-overview',
  standalone: true,
  imports: [CommonModule, WinkButton, TranslateModule, WinkIcon, WinkNotification, WinkParagraph, WinkTitle],
  templateUrl: './discount-overview.component.html',
})
export class DiscountOverviewComponent {
  @Input() data!: HardwareDiscount;
  @Input() useDiscountLink!: string;
  @Input() termsConditionsLink!: string;

  @Output() analyticsData = new EventEmitter<{ event: HardwareDiscountDatalayerEvent; productId?: string }>();

  private readonly urlService: UrlService = inject(UrlService);

  redirectTo(url: string): void {
    this.urlService.redirectTo(url);
    const event: HardwareDiscountDatalayerEvent = {
      eventName: url === this.useDiscountLink ? 'use discount clicked' : 'terms and conditions clicked',
      eventType: 'click',
    };
    this.analyticsData.emit({ event });
  }
}
