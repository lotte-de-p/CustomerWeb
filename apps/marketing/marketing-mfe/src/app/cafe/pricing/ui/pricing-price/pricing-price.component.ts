import { Component, Input, OnInit } from '@angular/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { isEmpty, isEqual } from 'lodash-es';
import { formatNumber, NgIf, NgClass } from '@angular/common';

export type PriceRendition = 'small' | 'large';

@Component({
  selector: 'tg-marketing-cafe-pricing-price',
  templateUrl: './pricing-price.component.html',
  standalone: true,
  imports: [NgIf, NgClass],
})
export class PricingPriceComponent implements OnInit {
  @Input() rendition: PriceRendition = 'large';
  @Input() amount: string;
  @Input() applyBaseSingleDigitStyle: boolean;

  private splitAmount: string[] = [];

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    if (!isEmpty(this.amount)) {
      this.splitAmount = this.getSplitAmount();
    }
  }

  public get integralPart(): string {
    return this.getNumber(0);
  }

  public get decimalPart(): string {
    return this.getPriceFractionDigits(this.amount);
  }

  public isRenditionSmall(): boolean {
    return isEqual(this.rendition, 'small' as PriceRendition);
  }

  public isRenditionLarge(): boolean {
    return isEqual(this.rendition, 'large' as PriceRendition);
  }

  public isFrench(): boolean {
    return this.languageService.getLanguage() === LanguageEnum.FR;
  }

  private isEnglish(): boolean {
    return this.languageService.getLanguage() === LanguageEnum.EN;
  }

  private getNumber(index: number): string {
    if (this.splitAmount[index]) {
      return this.splitAmount[index];
    }
    return '';
  }

  private getSplitAmount(): string[] {
    if (this.amount.includes('.')) {
      return this.amount.split('.');
    }
    if (this.amount.includes(',')) {
      return this.amount.split(',');
    }
    return [this.amount, '00'];
  }

  public getPriceSingleDigitCssBeforeText(): string {
    return this.applyBaseSingleDigitStyle ? 'promo-highlight__third-row--before-text-one-digit' : '';
  }

  public getPriceSingleDigitCssWithComma(): string {
    return this.applyBaseSingleDigitStyle ? 'promo-highlight__third-row--with-comma-one-digit' : '';
  }

  public getPriceSingleDigitCss(): string {
    return this.applyBaseSingleDigitStyle ? 'promo-highlight__third-row--price-one-digit' : '';
  }

  private getPriceFractionDigits(price: string) {
    price = price?.replace(',', '.');
    const priceInt: number = +price;
    const formattedPrice = formatNumber(priceInt, 'en-US', '0.2-2');
    const splitPrice = formattedPrice.split('.');
    const separator = this.isEnglish() ? '.' : ',';
    return separator + splitPrice[1];
  }
}
