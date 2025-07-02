import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { MemberNotificationHeaderComponent } from './member-notification-header.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/outofbundlelimits/Member Notification Header',
  component: MemberNotificationHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.member-notification-admin':
              'Please contact the subscription manager to make the changes.',
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
  render: (args: MemberNotificationHeaderComponent) => ({
    props: args,
  }),
  args: {},
};
