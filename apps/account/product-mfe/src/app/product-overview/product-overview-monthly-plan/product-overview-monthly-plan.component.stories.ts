import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductOverviewMonthlyPlanComponent } from './product-overview-monthly-plan.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'Products/Overview Monthly Payment',
  component: ProductOverviewMonthlyPlanComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductOverviewMonthlyPlanComponent>;

export const Primary = {
  render: (args: ProductOverviewMonthlyPlanComponent) => ({
    props: args,
  }),
  args: {
    addSubscriptionUrl: 'google.com',
    discoverSmartPhoneUrl: 'bing.com',
  },
};
