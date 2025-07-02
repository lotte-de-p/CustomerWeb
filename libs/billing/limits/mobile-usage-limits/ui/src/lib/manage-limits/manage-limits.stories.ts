import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageLimitsComponent } from './manage-limits.component';
import { importProvidersFrom } from '@angular/core';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'MobileUsageLimits/dumb/ui/managelimits',
  component: ManageLimitsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.manage-limit': 'Manage',
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
  render: (args: ManageLimitsComponent) => ({
    props: args,
  }),
  args: {},
};
