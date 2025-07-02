import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductBundleComponent } from './product-bundle.component';
import { ProductTestfactory } from '../../../mock/product.testfactory';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductBundleChildComponent } from './product-bundle-child/product-bundle-child.component';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProductOverviewNgRxModule } from '../product-overview-ngrx.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

export default {
  title: 'Products/Bundle',
  component: ProductBundleComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [
        ProductOverviewNgRxModule,
        ProductBundleChildComponent,
        ProductSpecificationsComponent,
        TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(TranslateModule.forRoot(), StoreModule.forRoot(), EffectsModule.forRoot([])),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
} as Meta<ProductBundleComponent>;

function getProducts() {
  return new ProductTestfactory().getProductsMockWithBundle();
}

export const Primary = {
  render: (args: ProductBundleComponent) => ({
    props: args,
  }),
  args: {
    products: getProducts(),
    hasSalesScope: false,
    canManageProductHolding: false,
    changeTariffPlanUrl: '',
    manageOptionUrl: '',
    componentInstanceID: '',
    planUpgradeUrl: '',
    intentRequired: false,
  },
};
