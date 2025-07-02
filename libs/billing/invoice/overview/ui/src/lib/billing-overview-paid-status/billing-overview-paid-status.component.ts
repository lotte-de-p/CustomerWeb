import { Component } from '@angular/core';
import { WinkIcon, WinkParagraph } from '@telenet/wink-ng';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeFr);
registerLocaleData(localeNl);
registerLocaleData(localeEn);

@Component({
  standalone: true,
  selector: 'tg-billing-overview-paid-status',
  templateUrl: './billing-overview-paid-status.component.html',
  imports: [WinkIcon, CommonModule, TranslateModule, WinkParagraph],
})
export class BillingOverviewPaidStatusComponent {}
