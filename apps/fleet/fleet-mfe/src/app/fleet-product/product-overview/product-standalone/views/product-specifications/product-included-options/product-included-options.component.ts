import { Component, Input } from '@angular/core';
import { Product } from '../../../../../../fleet-user/shared/models/product.model';
import { TranslateModule } from '@ngx-translate/core';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'tg-product-included-options',
  templateUrl: './product-included-options.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ProductOptionsSpecificationsComponent, TranslateModule],
})
export class ProductIncludedOptionsComponent {
  @Input() product: Product;
}
