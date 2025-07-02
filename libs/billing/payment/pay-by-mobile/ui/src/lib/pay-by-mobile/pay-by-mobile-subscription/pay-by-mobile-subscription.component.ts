import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { PricePipe } from '../../pipes/price.pipe';
import { CachedCompanyService, Company, Subscription, SubscriptionStatus } from '@billing/pay-by-mobile/data-access';
import { PayByMobileCompanyLogoComponent } from '../pay-by-mobile-transaction-logo/pay-by-mobile-company-logo.component';
import { SlideMenuComponent } from '@billing/shared/ui';
import { Subscription as RxSubscription } from 'rxjs';
import { WinkButton, WinkIcon } from '@telenet/wink-ng';

@Component({
  selector: 'tg-billing-pay-by-mobile-subscription',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    PricePipe,
    PayByMobileCompanyLogoComponent,
    SlideMenuComponent,
    WinkButton,
    WinkIcon,
  ],
  templateUrl: './pay-by-mobile-subscription.component.html',
  styles: [],
})
export class PayByMobileSubscriptionComponent implements OnDestroy {
  @Input() subscription!: Subscription;
  @Input() msisdn = '';
  @Output() confirmCancellation = new EventEmitter<Subscription>();

  private readonly languageService = inject(LanguageService);
  private readonly companyService = inject(CachedCompanyService);

  showDetails = false;
  company: Company | undefined;
  confirmation = false;
  private companySubscription: RxSubscription | undefined;

  open(event: Event) {
    event.stopPropagation();
    this.showDetails = true;
    this.companySubscription = this.companyService
      .getCompany(this.subscription.companyId, this.subscription.serviceName)
      .subscribe((company) => (this.company = company));
  }

  close() {
    this.showDetails = false;
    this.confirmation = false;
  }

  startConfirmation(event: Event) {
    event.stopPropagation();
    this.confirmation = true;
  }

  confirm(event: Event) {
    event.stopPropagation();
    this.confirmation = false;
    this.confirmCancellation.emit(this.subscription);
  }

  get expired() {
    return this.subscription.status === SubscriptionStatus.EXPIRED;
  }

  get lang() {
    return this.languageService.getLanguage();
  }

  get locale() {
    return this.languageService.getLocaleString();
  }

  get serviceName() {
    switch (this.lang) {
      case LanguageEnum.EN:
        return this.subscription.serviceTranslation.en;
      case LanguageEnum.NL:
        return this.subscription.serviceTranslation.nl;
      case LanguageEnum.FR:
        return this.subscription.serviceTranslation.fr;
    }
  }

  ngOnDestroy() {
    if (this.companySubscription) {
      this.companySubscription.unsubscribe();
    }
  }
}
