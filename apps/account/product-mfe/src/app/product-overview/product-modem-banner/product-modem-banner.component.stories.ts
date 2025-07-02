import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductModemBannerComponent } from './product-modem-banner.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'Products/Modem Banner',
  component: ProductModemBannerComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductModemBannerComponent>;

export const Primary = {
  render: (args: ProductModemBannerComponent) => ({
    props: args,
  }),
  args: {
    locationId: '',
    changeTariffPlanUrl: 'upgradeModemDummyUrl',
    componentInstanceID: '',
  },
};
