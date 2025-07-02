import { Component, inject, Input } from '@angular/core';
import { BillingScenarioName } from '@billing/invoice-overview/data-access';
import { DatePipe, JsonPipe, NgClass, NgIf } from '@angular/common';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { WinkButton, WinkIcon, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { SlideMenuComponent } from '@billing/shared/ui';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BillingOverviewUnpaidStatusComponent } from '../billing-overview-unpaid-status/billing-overview-unpaid-status.component';

export interface ShockMessageDetails {
  headline: string;
  caption: string;
  description?: string;
  buttonText?: string;
}
@Component({
  selector: 'tg-billing-overview-bill-shock-message',
  standalone: true,
  templateUrl: './billing-overview-bill-shock-message.component.html',
  imports: [
    BillingOverviewAmountComponent,
    BillingOverviewDownloadComponent,
    BillingOverviewIconComponent,
    DatePipe,
    NgClass,
    WinkButton,
    SlideMenuComponent,
    TranslateModule,
    WinkParagraph,
    WinkTitle,
    WinkIcon,
    BillingOverviewUnpaidStatusComponent,
    NgIf,
    JsonPipe,
  ],
})
export class BillingOverviewBillShockMessageComponent {
  private readonly translateService = inject(TranslateService);
  @Input() scenario: BillingScenarioName;

  getBillShockDetails(scenarioName: BillingScenarioName): ShockMessageDetails {
    if (!scenarioName) {
      return { headline: '', description: '', buttonText: '', caption: '' };
    }

    const baseKey = `ng.billing-overview.lbl.bill-shock-${scenarioName.toString().toLowerCase().replace(/_/g, '-')}`;
    const headlineKey = `${baseKey}-headline`;
    const captionKey = `${baseKey}-caption`;
    const descriptionKey = `${baseKey}-description`;
    const buttonTextKey = `${baseKey}-button`;

    const headline = this.translateService.instant(headlineKey);
    const description = this.translateService.instant(descriptionKey);
    const buttonText = this.translateService.instant(buttonTextKey);
    const caption = this.translateService.instant(captionKey);

    return {
      headline,
      caption,
      description: description === descriptionKey ? '' : description,
      buttonText: buttonText === buttonTextKey ? '' : buttonText,
    };
  }
}
