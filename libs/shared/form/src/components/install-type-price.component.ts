import { Component, Input, OnInit } from '@angular/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { InstallTypePriceModel } from '../models';

@Component({
  selector: 'app-install-type-price',
  templateUrl: './install-type-price.component.html',
})
export class InstallTypePriceComponent implements OnInit {
  @Input() installTypePrice: InstallTypePriceModel;

  integer: string;
  decimal: string;
  strikeThroughPrice: string;

  isFrench: boolean;

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.splitPriceIntoIntegerAndDecimal();

    this.strikeThroughPrice = this.installTypePrice.originalPrice || '';
    this.isFrench = this.languageService.getLanguage() === LanguageEnum.FR;
  }

  private splitPriceIntoIntegerAndDecimal() {
    const priceArray: string[] = this.installTypePrice.price.split('.');
    this.integer = priceArray[0];
    this.decimal = priceArray[1];
  }
}
