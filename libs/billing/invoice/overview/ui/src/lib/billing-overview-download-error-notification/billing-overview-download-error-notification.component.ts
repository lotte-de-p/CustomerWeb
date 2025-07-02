import { Component } from '@angular/core';
import { WinkNotification, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'tg-billing-overview-download-error-message-notification',
  template: `<wink-notification
    appearance="error"
    has-close-icon="false"
    data-testid="billing-overview-download-error-message-notification">
    <wink-title
      slot="heading"
      html-tag="h6"
      spacing-y="bottom"
      text="{{ 'ng.billing-overview.lbl.bill-shock-download-error-notification' | translate }}"></wink-title>
  </wink-notification>`,
  imports: [NgIf, TranslateModule, WinkNotification, WinkTitle, WinkParagraph],
})
export class BillingOverviewDownloadErrorNotificationComponent {}
