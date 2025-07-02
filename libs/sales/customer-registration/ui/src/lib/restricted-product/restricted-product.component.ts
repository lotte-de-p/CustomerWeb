import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'tg-sales-restricted-product',
  templateUrl: './restricted-product.component.html',
  imports: [TranslateModule],
  standalone: true,
})
export class RestrictedProductComponent {
  @Input() currentCategory = '';
  disclaimerTitleKey = '';
  disclaimerDescriptionKey = '';
  @Input()
  marketingURL: string | null;

  constructor() {
    this.marketingURL = '';
  }
}
