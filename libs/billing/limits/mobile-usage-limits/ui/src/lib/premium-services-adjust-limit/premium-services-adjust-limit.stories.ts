import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PremiumServicesAdjustLimitComponent } from './premium-services-adjust-limit.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/premiumservices/Premium Services Adjust Limit',
  component: PremiumServicesAdjustLimitComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.limit': '€{{value}}',
            'ng.mobile-usage-limits.lnk.edit': 'Edit',
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
  render: (args: PremiumServicesAdjustLimitComponent) => ({
    props: args,
  }),
  args: {
    currentPremiumLimit: 20,
  },
};
