import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesModule } from '@telenet/ng-lib-message';
import {
  AccountSelectorComponent,
  AddressComponent,
  LoginComponent,
  NoPriceChangesComponent,
  PriceChangesComponent,
  SkeletonComponent,
} from '@product/product-price-changes/ui';
import {
  Login,
  ProductPriceChangesFacade,
  ProductPriceChangesNgrxModule,
} from '@product/product-price-changes/data-access';
import { LanguageService } from '@telenet/ng-lib-page';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeFr);
registerLocaleData(localeEn);
registerLocaleData(localeNl);

@Component({
  selector: 'tg-product-price-changes',
  standalone: true,
  imports: [
    CommonModule,
    ProductPriceChangesNgrxModule,
    ReactiveFormsModule,
    TranslateModule,
    MessagesModule,
    LoginComponent,
    AccountSelectorComponent,
    SkeletonComponent,
    AddressComponent,
    PriceChangesComponent,
    NoPriceChangesComponent,
  ],
  templateUrl: './product-price-changes.component.html',
  styleUrl: './product-price-changes.component.html',
})
export class ProductPriceChangesComponent implements OnInit {
  @Input() clientNumberInformationUrl?: string;

  public readonly MESSAGE_GROUP_NAME = 'product-price-changes';
  private readonly facade: ProductPriceChangesFacade = inject(ProductPriceChangesFacade);
  private readonly languageService: LanguageService = inject(LanguageService);

  ngOnInit() {
    this.facade.validateAuthentication();
  }

  login(login: Login) {
    this.facade.login(login);
  }

  selectBillingAccount(billingAccountNumber: string) {
    this.facade.selectBillingAccount(billingAccountNumber);
  }

  get loading$() {
    return this.facade.loading$;
  }

  get isAuthenticated$() {
    return this.facade.isAuthenticated$;
  }

  get productPriceChanges$() {
    return this.facade.productPriceChanges$;
  }

  get billingAccounts$() {
    return this.facade.billingAccounts$;
  }

  get selectedBillingAccount$() {
    return this.facade.selectedBillingAccount$;
  }

  get selectedProductPriceChanges$() {
    return this.facade.selectedProductPriceChanges$;
  }

  get loadError$() {
    return this.facade.loadError$;
  }

  get authenticationError$() {
    return this.facade.authenticationError$;
  }

  get lang() {
    return this.languageService.getLanguage();
  }

  get locale() {
    return this.languageService.getLocaleString();
  }
}
