import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkButton, WinkImg, WinkParagraph } from '@telenet/wink-ng';
import { BrandImageDirective, UrlService } from '@telenet/ng-lib-page';

export const BRAND_TELENET = 'TELENET';

@Component({
  selector: 'tg-billing-overview-no-billing-accounts',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkImg, WinkButton, WinkParagraph, BrandImageDirective],
  templateUrl: 'billing-overview-no-billing-accounts.component.html',
})
export class BillingOverviewNoBillingAccountsComponent {
  @Input() homePageLink: string;
  @Input() isTelenetCustomer: boolean;
  private readonly urlService = inject(UrlService);

  redirectToConsultInvoice(): void {
    this.urlService.redirectTo(this.homePageLink);
  }
}
