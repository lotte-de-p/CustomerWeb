import { ProductPriceChangesComponent } from '@product/product-price-changes/feat-product-price-changes';
import { NgModule } from '@angular/core';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

@NgModule({})
export class ProductModule {
  static components = {
    'tg-product-overview': ProductOverviewComponent,
    'tg-product-price-changes': ProductPriceChangesComponent,
  };
}
