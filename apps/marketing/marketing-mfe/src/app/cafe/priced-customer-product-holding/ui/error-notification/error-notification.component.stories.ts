import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { ErrorNotificationComponent } from './error-notification.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'PricedCustomerProductHolding/ErrorNotificationComponent',
  component: ErrorNotificationComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<ErrorNotificationComponent>;

type Story = StoryObj<ErrorNotificationComponent>;

export const Primary: Story = {
  args: {
    labelKey: 'business-customer',
  },
};
