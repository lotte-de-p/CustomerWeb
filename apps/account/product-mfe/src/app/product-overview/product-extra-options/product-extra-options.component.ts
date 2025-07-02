import { Component, Input, OnInit } from '@angular/core';
import { Option, Product } from '../models/product.model';
import { TranslateModule } from '@ngx-translate/core';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'tg-product-extra-options',
  templateUrl: './product-extra-options.component.html',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ProductOptionsSpecificationsComponent, TranslateModule],
})
export class ProductExtraOptionsComponent implements OnInit {
  @Input() product: Product;
  @Input() isTelenetBrand = true;

  options: Option[] = [];

  ngOnInit(): void {
    this.options = [...this.product.options].sort((a, b) => {
      return (a.productInfo?.weight || 0) - (b.productInfo?.weight || 0);
    });
  }
}
