import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PremiumServicesMemberNotificationComponent } from './premium-services-member-notification.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/premiumservices/Premium Services Member Notification',
  component: PremiumServicesMemberNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.max-additional-premium-usages': 'Maximum additional usage',
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
  render: (args: PremiumServicesMemberNotificationComponent) => ({
    props: args,
  }),
  args: {
    currentPremiumLimit: 20,
  },
};
