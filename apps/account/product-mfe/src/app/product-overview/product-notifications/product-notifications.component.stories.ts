import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductNotificationsComponent } from './product-notifications.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'Products/Notifications',
  component: ProductNotificationsComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductNotificationsComponent>;

export const Primary = {
  render: (args: ProductNotificationsComponent) => ({
    props: args,
  }),
  args: {
    showYUPNotificationMessage: true,
    showSuspendedPlanNotificationMessage: true,
    showMoveNotificationMessage: true,
  },
};
