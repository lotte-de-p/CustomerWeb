import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe, NgClass, NgForOf } from '@angular/common';
import { ProductPriceChange } from '@product/product-price-changes/data-access';

@Component({
  standalone: true,
  selector: 'care-price-changes',
  imports: [TranslateModule, CurrencyPipe, NgForOf, NgClass],
  styleUrls: ['./price-changes.component.scss'],
  templateUrl: 'price-changes.component.html',
})
export class PriceChangesComponent {
  @Input() productPriceChange!: ProductPriceChange;
  @Input() lang = 'nl';
  @Input() locale = 'nl-BE';

  getVAT(productPriceChange: ProductPriceChange) {
    return productPriceChange.vatInclusive ? 'vat-inclusive' : 'vat-exclusive';
  }

  get products() {
    return this.productPriceChange.products;
  }
}
