import { CustomerProductHolding } from '../../shared/models/customer-product-holding.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductOptionsMapper {
  public mapOptionCategory(lines: CustomerProductHolding[]): CustomerProductHolding[] {
    if (!lines || lines.length === 0) {
      return;
    }
    lines.forEach((line) => {
      line.options.forEach((option) => {
        if (option.productInfo) {
          option.productId = option.productInfo.productId;
          if (option.productInfo.subCategory) {
            option.category = option.productInfo.subCategory.localizedName;
          }
          option.name = option.productInfo.name;

          option.volume = option.productInfo.services[0]?.specifications[0]?.value;
          if (option.volume && option.productInfo.services[0].specifications[0].unit) {
            option.volume = option.volume + ' ' + option.productInfo.services[0].specifications[0].unit;
          }
        } else {
          option.name = option.label;
        }
      });
    });
    return lines;
  }
}
