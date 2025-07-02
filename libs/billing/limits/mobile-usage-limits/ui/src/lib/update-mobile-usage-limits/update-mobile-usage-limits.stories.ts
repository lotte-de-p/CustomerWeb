import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { UpdateMobileUsageLimitsComponent } from './update-mobile-usage-limits.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/outofbundlelimits/Update Mobile Usage Limits',
  component: UpdateMobileUsageLimitsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.btn.cancel-changes': 'Cancel',
            'ng.mobile-usage-limits.btn.save-changes': 'Save & Close',
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
  render: (args: UpdateMobileUsageLimitsComponent) => ({
    props: args,
  }),
  args: {},
};
