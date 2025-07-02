import { Component, Input } from '@angular/core';
import { WinkIcon } from '@telenet/wink-ng';
import { DatePipe, NgIf, registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeFr);
registerLocaleData(localeEn);
registerLocaleData(localeNl);

@Component({
  selector: 'tg-billing-transaction-logo',
  standalone: true,
  template: ` <ng-container>
    <img *ngIf="!imageNotAvailable; else defaultLogo" [src]="imageSrc" (error)="setDefaultImage()" />
    <ng-template #defaultLogo>
      <wink-icon appearance="secondary" icon="euro"></wink-icon>
    </ng-template>
  </ng-container>`,
  imports: [NgIf, DatePipe, WinkIcon],
})
export class PayByMobileCompanyLogoComponent {
  @Input() serviceName!: string;
  imageNotAvailable = false;

  get imageSrc() {
    return `/content/dam/www-telenet-touch/nl/common/components/pay-by-mobile/${this.serviceName.toLowerCase()}.png`;
  }

  setDefaultImage() {
    this.imageNotAvailable = true;
  }
}
