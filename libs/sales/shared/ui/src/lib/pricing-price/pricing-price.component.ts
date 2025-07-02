import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { isEmpty, isEqual } from 'lodash-es';
import { NgClass, NgIf } from '@angular/common';

export type PriceRendition = 'small' | 'large';

@Component({
  selector: 'tg-sales-pricing-price',
  standalone: true,
  templateUrl: './pricing-price.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgIf],
})
export class PricingPriceComponent implements OnInit {
  @Input() rendition: PriceRendition = 'large';
  @Input() amount!: string;

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
    return this.getNumber(1);
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
}
