import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductExtraOptionsComponent } from './product-extra-options.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';

const productMock = require('../../../mock/product-with-extra-option.json');

export default {
  title: 'Products/Extra Options',
  component: ProductExtraOptionsComponent,
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
} as Meta<ProductExtraOptionsComponent>;

export const Primary = {
  render: (args: ProductExtraOptionsComponent) => ({
    props: args,
  }),
  args: {
    product: productMock,
  },
};
