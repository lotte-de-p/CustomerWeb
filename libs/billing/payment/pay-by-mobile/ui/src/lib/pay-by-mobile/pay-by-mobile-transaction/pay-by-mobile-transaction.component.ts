import { Component, inject, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PricePipe } from '../../pipes/price.pipe';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { CachedCompanyService, Company, Transaction } from '@billing/pay-by-mobile/data-access';
import { WinkIcon } from '@telenet/wink-ng';
import { PayByMobileCompanyLogoComponent } from '../pay-by-mobile-transaction-logo/pay-by-mobile-company-logo.component';
import { SlideMenuComponent } from '@billing/shared/ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tg-billing-pay-by-mobile-transaction',
  standalone: true,
  imports: [CommonModule, TranslateModule, PricePipe, WinkIcon, PayByMobileCompanyLogoComponent, SlideMenuComponent],
  templateUrl: './pay-by-mobile-transaction.component.html',
  styles: [],
})
export class PayByMobileTransactionComponent implements OnDestroy {
  @Input() transaction!: Transaction;
  private readonly languageService = inject(LanguageService);
  private readonly companyService = inject(CachedCompanyService);
  showDetails = false;
  company: Company | undefined;
  private companySubscription: Subscription | undefined;

  open(event: Event) {
    event.stopPropagation();
    this.showDetails = true;
    this.companySubscription = this.companyService
      .getCompany(this.transaction.companyId, this.transaction.serviceName)
      .subscribe((company) => (this.company = company));
  }

  close() {
    this.showDetails = false;
  }

  get lang() {
    return this.languageService.getLanguage();
  }

  get locale() {
    return this.languageService.getLocaleString();
  }

  ngOnDestroy() {
    if (this.companySubscription) {
      this.companySubscription.unsubscribe();
    }
  }

  protected readonly LanguageEnum = LanguageEnum;
}
