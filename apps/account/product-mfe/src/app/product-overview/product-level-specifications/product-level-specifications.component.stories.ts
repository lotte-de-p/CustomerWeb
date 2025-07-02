import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductLevelSpecificationsComponent } from './product-level-specifications.component';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';
import { Product } from '../models/product.model';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

const productsMock = require('../../../mock/standalone-products-mock.json');
const productInfoSpecifications = require('../../../mock/product-info-specifications.json');

export default {
  title: 'Products/Level Specifications',
  component: ProductLevelSpecificationsComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
    }),
    applicationConfig({
      providers: [
        { provide: 'Window', useValue: window },
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
      ],
    }),
  ],
} as Meta<ProductLevelSpecificationsComponent>;

function getStubbedProduct() {
  return {
    ...productsMock[0],
    productInfo: {
      ...productsMock[0].productInfo,
      getSortedSpecifications(): SpecificationInterface[] {
        return productInfoSpecifications as SpecificationInterface[];
      },
    },
  } as Product;
}

export const Primary = {
  render: (args: ProductLevelSpecificationsComponent) => ({
    props: args,
  }),
  args: {
    product: getStubbedProduct(),
    isBundle: false,
  },
};
