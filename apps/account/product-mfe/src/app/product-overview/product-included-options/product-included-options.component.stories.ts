import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductIncludedOptionsComponent } from './product-included-options.component';
import { Product } from '../models/product.model';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';

const productsMock = require('../../../mock/standalone-products-mock.json');
const productInfoSpecifications = require('../../../mock/product-info-specifications.json');

export default {
  title: 'Products/Included Options',
  component: ProductIncludedOptionsComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [
        ProductOptionsSpecificationsComponent,
        TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductIncludedOptionsComponent>;

function getStubbedProduct() {
  return {
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
  } as Product;
}

export const Primary = {
  render: (args: ProductIncludedOptionsComponent) => ({
    props: args,
  }),
  args: {
    product: getStubbedProduct(),
  },
};
