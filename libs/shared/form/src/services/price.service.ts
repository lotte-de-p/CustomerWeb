import { Injectable } from '@angular/core';
import { CustomerCategoryEnum, PathCategorisationService } from '@telenet/ng-lib-page';
import { isNil } from 'lodash-es';
import { TaxTypeEnum } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  constructor(private readonly pathCategorisationService: PathCategorisationService) {}

  isValidPrice(price: string): boolean {
    return !!(price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00');
  }

  getTaxType(): TaxTypeEnum {
    switch (this.pathCategorisationService.getCustomerCategory()) {
      case CustomerCategoryEnum.RESIDENTIAL:
        return TaxTypeEnum.INCLUSIVE;
      case CustomerCategoryEnum.BUSINESS:
        return TaxTypeEnum.EXCLUSIVE;
      default:
        return TaxTypeEnum.INCLUSIVE;
    }
  }

  transform(price: number | null, showZeroes: boolean = true, isEnLocale: boolean = false): string {
    if (isNil(price)) return '';

    const hasZeroes = price % 1 === 0;
    const decimalPrice = price.toFixed(showZeroes || !hasZeroes ? 2 : 0);
    return isEnLocale ? decimalPrice : decimalPrice.replace('.', ',');
  }
}
