import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductOptionsSpecificationsComponent } from './product-options-specifications.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ServiceInterface } from '@telenet/ng-lib-omapi';

const productsMock = require('../../../mock/standalone-products-mock.json');

export default {
  title: 'Products/Option Specifications',
  component: ProductOptionsSpecificationsComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
      providers: [],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductOptionsSpecificationsComponent>;

export const Primary = {
  render: (args: ProductOptionsSpecificationsComponent) => ({
    props: args,
  }),
  args: {
    services: productsMock[0].options[1].productInfo.services as ServiceInterface[],
  },
};
