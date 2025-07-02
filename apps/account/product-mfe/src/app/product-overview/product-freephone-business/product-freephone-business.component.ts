import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductOverviewService } from '../services/product-overview.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-freephone-business',
  templateUrl: 'product-freephone-business.component.html',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, ProductSpecificationsComponent, TranslateModule],
})
export class ProductFreePhoneBusinessComponent {
  @Input() fpbProducts: Product[];
  @Input() freePhoneBusinessUrl = '';

  visibilityIndices: boolean[] = [];

  constructor(private readonly productOverviewService: ProductOverviewService) {}

  getProductIcon(product: Product): string {
    return this.productOverviewService.getProductIcon(product);
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter') {
      this.visibilityIndices[index] = !this.visibilityIndices[index];
    }
  }
}
