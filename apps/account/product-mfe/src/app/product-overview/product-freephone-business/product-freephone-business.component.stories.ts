import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductFreePhoneBusinessComponent } from './product-freephone-business.component';
import { Product } from '../models/product.model';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
import { ProductLevelSpecificationsComponent } from '../product-level-specifications/product-level-specifications.component';

const fpbProductsMock = require('../../../mock/fpb-products-mock.json');
const fpbSmartProductInfoSpecifications = require('../../../mock/fpb-smart-product-info-specifications.json');
const fpbBasicProductInfoSpecifications = require('../../../mock/fpb-basic-product-info-specifications.json');

export default {
  title: 'Products/Freephone Business',
  component: ProductFreePhoneBusinessComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [
        ProductSpecificationsComponent,
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
} as Meta<ProductFreePhoneBusinessComponent>;

function createFpbProduct(product: Product) {
  return {
    ...product,
    productInfo: {
      ...product.productInfo,
      isShowRates(): boolean {
        return false;
      },
    },
    isProductActive(): boolean {
      return true;
    },
  } as Product;
}

function getFpbProductsMock() {
  const product = fpbProductsMock.map((product: Product) => createFpbProduct(product));
  product[0] = {
    ...product[0],
    productInfo: {
      ...product[0].productInfo,
      getSortedSpecifications(): SpecificationInterface[] {
        return fpbBasicProductInfoSpecifications as SpecificationInterface[];
      },
    },
  };
  product[1] = {
    ...product[1],
    productInfo: {
      ...product[1].productInfo,
      getSortedSpecifications(): SpecificationInterface[] {
        return fpbSmartProductInfoSpecifications as SpecificationInterface[];
      },
    },
  };
  return product;
}

export const Primary = {
  render: (args: ProductFreePhoneBusinessComponent) => ({
    props: args,
  }),
  args: {
    fpbProducts: getFpbProductsMock(),
    freePhoneBusinessUrl: 'freePhoneBusinessMockUrl',
  },
};
