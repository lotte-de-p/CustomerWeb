import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductC5BundleComponent } from './product-c5-bundle.component';
import { ProductTestfactory } from '../../../mock/product.testfactory';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProductC5BundleChildComponent } from './product-c5-bundle-child/product-c5-bundle-child.component';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';

export default {
  title: 'Products/C5 Bundle',
  component: ProductC5BundleComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [
        ProductC5BundleChildComponent,
        PhoneNumberPipe,
        TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductC5BundleComponent>;

function getStreamingOption() {
  return getProductsMock()[0].options;
}

function getProductsMock() {
  return new ProductTestfactory().getProductsMockWithC5Bundle();
}

export const Primary = {
  render: (args: ProductC5BundleComponent) => ({
    props: args,
  }),
  args: {
    streamingOptions: getStreamingOption(),
    showStreamingSection: true,
    canManageProductHolding: false,
    hasSalesScope: false,
    planUpgradeUrl: 'planUpgradeUrl',
    changeDataPlanUrl: 'changeDataPlanUrl',
    managePhone2GoUrl: 'managePhone2GoUrl',
    intentRequired: false,
    manageOptionUrl: 'manageOptionUrl',
    componentInstanceID: 'componentInstanceID',
    changeTariffPlanUrl: 'changeTariffPlanUrl',
    setSelectedProducts: getProductsMock(),
  },
};
