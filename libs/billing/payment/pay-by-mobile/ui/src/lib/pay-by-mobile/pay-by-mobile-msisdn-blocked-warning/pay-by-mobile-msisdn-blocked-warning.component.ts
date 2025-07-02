import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkNotification, WinkParagraph, WinkTitle } from '@telenet/wink-ng';

@Component({
  selector: 'tg-billing-pay-by-mobile-msisdn-blocked-warning',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkNotification, WinkTitle, WinkParagraph],
  templateUrl: './pay-by-mobile-msisdn-blocked-warning.component.html',
  styles: [],
})
export class PayByMobileMsisdnBlockedWarningComponent {}
