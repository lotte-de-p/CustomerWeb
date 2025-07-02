import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ErrorNotificationComponent } from './error-notification.component';

export default {
  title: 'Shared/ui/Error Notification',
  component: ErrorNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.error-limits-label': "Oops! We couldn't retrieve your product",
            'ng.mobile-usage-limits.error-limits-description':
              "Due to technical issue on our end we couldn't retrieve your data.",
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: {} }, importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  parameters: {},
} as Meta<ErrorNotificationComponent>;

export const Primary = {
  render: (args: ErrorNotificationComponent) => ({
    props: args,
  }),
  args: {
    label: 'ng.mobile-usage-limits.error-limits-label',
    description: 'ng.mobile-usage-limits.error-limits-description',
  },
};
