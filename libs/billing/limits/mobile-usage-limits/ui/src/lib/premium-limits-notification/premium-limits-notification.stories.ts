import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { PremiumLimitsNotificationComponent } from './premium-limits-notification.component';

export default {
  title: 'MobileUsageLimits/dumb/ui/premiumservices/Premium Limits Notification',
  component: PremiumLimitsNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.premium-services-current-limit': 'Current limit',
            'ng.mobile-usage-limits.lbl.limit': '€{{value}}',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: {} }, importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  parameters: {},
};

export const Primary = {
  render: (args: PremiumLimitsNotificationComponent) => ({
    props: args,
  }),
  args: {
    currentPremiumLimit: 20,
  },
};
