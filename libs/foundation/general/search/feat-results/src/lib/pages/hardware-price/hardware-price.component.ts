import { Component, Input } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Product } from '@general/data-access-search';
import { TranslateService } from '@ngx-translate/core';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';
import { EuroSignPipe, PricePipe } from '@telenet/ng-lib-form';

registerLocaleData(localeFr);
registerLocaleData(localeNl);
registerLocaleData(localeEn);

@Component({
  selector: 'tg-foundation-general-search-hardware-price',
  standalone: true,
  imports: [CommonModule, EuroSignPipe, PricePipe],
  template: `
    <div class="search-product__content__price mt--l display--flex align-items--end">
      <div class="promo-highlight display--flex flex-direction--row align-items--end flex-wrap--wrap">
        <div
          *ngIf="product.discountedPrice < product.originalPrice"
          [attr.data-testid]="'original-price'"
          class="promo-highlight__second-row text-decoration--line-through align-items--baseline font--caption space-nowrap">
          {{ product.originalPrice | price: false : false : locale | euroSign }}
        </div>
        <div
          [attr.data-testid]="'front-euro-sign'"
          class="promo-highlight__third-row display--flex justify-content--center space-nowrap">
          <span *ngIf="locale !== 'fr'" class="promo-highlight__third-row--before-text text--xm line-height--18"
            >€</span
          >
          <span [attr.data-testid]="'price'" class="promo-highlight__third-row--price">
            {{ ('' + product.discountedPrice).split('.')[0] }}
          </span>
          <span
            [attr.data-testid]="'price-decimals'"
            class="promo-highlight__third-row--with-comma text--m line-height--18 ">
            <ng-container *ngIf="('' + product.discountedPrice | euroSign).split('.').length > 1">
              <ng-container *ngIf="locale !== 'en'">,</ng-container
              ><ng-container *ngIf="locale === 'en'">.</ng-container
              >{{ ('' + product.discountedPrice | euroSign).split('.')[1] }}
            </ng-container>
          </span>
          <span
            [attr.data-testid]="'back-euro-sign'"
            *ngIf="locale === 'fr'"
            class="promo-highlight__third-row--before-text text--xm line-height--18"
            >€</span
          >
        </div>
      </div>
    </div>
  `,
})
export class HardwarePriceComponent {
  @Input() product = {
    originalPrice: 0,
  } as Product;

  readonly locale: string;

  constructor(private readonly translateService: TranslateService) {
    this.locale = this.translateService.currentLang;
  }
}
