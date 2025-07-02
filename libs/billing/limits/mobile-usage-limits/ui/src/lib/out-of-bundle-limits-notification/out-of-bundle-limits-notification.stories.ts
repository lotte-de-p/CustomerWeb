import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { OutOfBundleLimitsNotificationComponent } from './out-of-bundle-limits-notification.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/outofbundlelimits/Out Of Bundle Limits Notification',
  component: OutOfBundleLimitsNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.out-of-bundle-current-limit': 'Current limit',
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
  render: (args: OutOfBundleLimitsNotificationComponent) => ({
    props: args,
  }),
  args: {
    isOutOfBundleNoLimits: false,
    outOfBundleLimitValue: 20,
  },
};
