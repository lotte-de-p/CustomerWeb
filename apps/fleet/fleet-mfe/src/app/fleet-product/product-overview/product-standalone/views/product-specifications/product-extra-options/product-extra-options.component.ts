import { Component, Input, OnInit } from '@angular/core';
import { Option, Product } from '../../../../../../fleet-user/shared/models/product.model';
import { TranslateModule } from '@ngx-translate/core';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-extra-options',
  templateUrl: './product-extra-options.component.html',
  standalone: true,
  imports: [NgFor, NgIf, ProductOptionsSpecificationsComponent, TranslateModule],
})
export class ProductExtraOptionsComponent implements OnInit {
  @Input() product: Product;

  options: Option[] = [];

  ngOnInit(): void {
    this.options = [...this.product.options].sort((a, b) => {
      return (a.productInfo?.weight || 0) - (b.productInfo?.weight || 0);
    });
  }
}
