import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { ProductSubscriptionsInterface } from '../../../fleet-user/shared/interfaces/product/product-subscriptions.interface';
import { FleetUserProductService } from '../../../fleet-user/shared/services/product/fleet-user-product.service';
import { AccountSelectorService } from '../../../fleet-user/shared/services/account-selector.service';
import { tap } from 'rxjs/operators';
import first from 'lodash-es/first';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { PhoneNumberPipe } from '../../../fleet-user/shared/pipes/phone-number.pipe';

@Component({
  selector: 'tg-local-mobile-line-selector',
  standalone: true,
  templateUrl: './local-mobile-line-selector.component.html',
  imports: [NgClass, AsyncPipe, TranslateModule, PhoneNumberPipe],
})
export class LocalMobileLineSelectorComponent implements OnInit {
  readonly #productService = inject(FleetUserProductService);
  readonly #accountSelectorService = inject(AccountSelectorService);

  isSelectorOpen = false;

  mobileLines$: Observable<ProductSubscriptionsInterface[]>;
  mobileLineSelected: ProductSubscriptionsInterface;
  isInitialized: boolean;

  ngOnInit(): void {
    this.mobileLines$ = this.loadMobileLines();
  }

  loadMobileLines(): Observable<ProductSubscriptionsInterface[]> {
    return this.#productService.getProductLinesByType('account-selector', 'MOBILE', '', '').pipe(
      tap({
        next: (mobileLines: ProductSubscriptionsInterface[]) => {
          this.setSelectedLine(mobileLines);
        },
      })
    );
  }

  private setSelectedLine(mobileLines: ProductSubscriptionsInterface[]): void {
    this.mobileLineSelected = first(mobileLines);
    this.isInitialized = true;
    this.setMobileLine();
  }

  private setMobileLine(): void {
    this.#accountSelectorService.setSelectedAccount<ProductSubscriptionsInterface>(this.mobileLineSelected);
  }
}
