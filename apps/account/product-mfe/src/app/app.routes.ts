import { Routes } from '@angular/router';
import { ProductPriceChangesComponent } from '@product/product-price-changes/feat-product-price-changes';
import { provideProductPriceChangesDomain } from '@product/product-price-changes/data-access';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

export const APP_ROUTES: Routes = [
  {
    path: 'product-price-changes',
    component: ProductPriceChangesComponent,
    providers: [provideProductPriceChangesDomain()],
  },
  { path: 'product-overview', component: ProductOverviewComponent },
];
