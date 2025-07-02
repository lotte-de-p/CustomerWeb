import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PremiumServicesHeaderComponent } from './premium-services-header.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/premiumservices/Premium Services Header',
  component: PremiumServicesHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.title.premium-services-limit': 'Limit for third-party services ',
            'ng.mobile-usage-limits.lbl.premium-services-description':
              'By setting a purchase limit, you will block the services of third parties (premium sms, 070x and 090x services, PayByMobile) once you have reached the chosen amount.',
            'ng.mobile-usage-limits.title.member-premium-services-limit': 'Your third-party services limit',
            'ng.mobile-usage-limits.lbl.member-premium-services-description':
              'Your usage for third-party services will be blocked once the set limit is reached.',
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
  render: (args: PremiumServicesHeaderComponent) => ({
    props: args,
  }),
  args: {
    isMember: false,
  },
};

export const isMember = {
  render: (args: PremiumServicesHeaderComponent) => ({
    props: args,
  }),
  args: {
    isMember: true,
  },
};
