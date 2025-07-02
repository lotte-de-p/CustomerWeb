import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductOverviewConstants } from '@demo/product/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass, LowerCasePipe, NgForOf, DatePipe } from '@angular/common';
import { PhoneNumberPipe, CollapsibleHeaderComponent } from '@demo/product/ui';

@Component({
  standalone: true,
  selector: 'demo-product-specifications',
  templateUrl: './product-specifications.component.html',
  imports: [
    TranslateModule,
    NgIf,
    NgClass,
    LowerCasePipe,
    NgForOf,
    PhoneNumberPipe,
    DatePipe,
    CollapsibleHeaderComponent,
  ],
})
export class ProductSpecificationsComponent {
  @Input() product!: Product;
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl!: string;
  @Input() manageOptionUrl!: string;
  @Input() componentInstanceID!: string;
  @Input() isBundle = false;

  @Output() manageOptions = new EventEmitter<Product>();

  PREPAID_MOBILE = ProductOverviewConstants.PREPAID_MOBILE;

  handleManageOptions(product: Product): void {
    this.manageOptions.emit(product);
  }
}
