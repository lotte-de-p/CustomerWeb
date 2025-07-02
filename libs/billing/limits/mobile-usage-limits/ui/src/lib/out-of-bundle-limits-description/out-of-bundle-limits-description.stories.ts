import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { OutOfBundleLimitsDescriptionComponent } from './out-of-bundle-limits-description.component';

export default {
  title: 'MobileUsageLimits/dumb/ui/outofbundlelimits/Out Of Bundle Limits Description',
  component: OutOfBundleLimitsDescriptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.title.out-of-bundle-limit': 'Manage your out-of-plan limit',
            'ng.mobile-usage-limits.title.member-out-of-bundle-limit': 'Your out-of-plan limit',
            'ng.mobile-usage-limits.lbl.out-of-bundle-description':
              'With the out-of-plan limit, you determine how much extra you want to spend. This helps you manage your budget better and avoid high bills. When the limit is reached, additional spending is blocked. You can deactivate this limit at any time. This applies to all purchases through your Telenet account and takes precedence over other limits.',
            'ng.mobile-usage-limits.lbl.member-out-of-bundle-description': 'Usage on top of your subscription',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [
        { provide: 'Window', useValue: {} },
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(BrowserAnimationsModule),
      ],
    }),
  ],
  parameters: {},
};

export const Primary = {
  render: (args: OutOfBundleLimitsDescriptionComponent) => ({
    props: args,
  }),
  args: {
    isMember: false,
  },
};

export const isMember = {
  render: (args: OutOfBundleLimitsDescriptionComponent) => ({
    props: args,
  }),
  args: {
    isMember: true,
  },
};
