import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductSpecificationsComponent } from './product-specifications.component';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';
import { Product } from '../models/product.model';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';
import { ProductIncludedOptionsComponent } from '../product-included-options/product-included-options.component';
import { ProductLevelSpecificationsComponent } from '../product-level-specifications/product-level-specifications.component';

const productsMock = require('../../../mock/standalone-products-mock.json');
const productInfoSpecifications = require('../../../mock/product-info-specifications.json');

export default {
  title: 'Products/Specifications',
  component: ProductSpecificationsComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [
        ProductOptionsSpecificationsComponent,
        ProductIncludedOptionsComponent,
        ProductLevelSpecificationsComponent,
        TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') }),
      ],
    }),
    applicationConfig({
      providers: [
        { provide: 'Window', useValue: window },
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
      ],
    }),
  ],
} as Meta<ProductSpecificationsComponent>;

function getStubbedProducts() {
  return [
    {
      ...productsMock[0],
      productInfo: {
        ...productsMock[0].productInfo,
        hasCategory(): boolean {
          return false;
        },
        isShowRates(): boolean {
          return false;
        },
        getSortedSpecifications(): SpecificationInterface[] {
          return productInfoSpecifications as SpecificationInterface[];
        },
      },
      isC5Bundle(): boolean {
        return false;
      },
      isProductActivationInProgress(): boolean {
        return false;
      },
      isProductDisconnectionInProgress(): boolean {
        return false;
      },
      isProductModificationInProgress(): boolean {
        return false;
      },
      isProductSuspended(): boolean {
        return false;
      },
      isProductActive(): boolean {
        return true;
      },
    },
  ] as Product[];
}

export const Primary = {
  render: (args: ProductSpecificationsComponent) => ({
    props: args,
  }),
  args: {
    products: getStubbedProducts(),
    product: getStubbedProducts()[0],
    hasSalesScope: false,
    canManageProductHolding: false,
    changeTariffPlanUrl: '',
    manageOptionUrl: '',
    componentInstanceID: '',
    isBundle: false,
  },
};
