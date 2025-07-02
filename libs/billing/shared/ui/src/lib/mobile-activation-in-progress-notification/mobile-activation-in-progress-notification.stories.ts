import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileActivationInProgressNotificationComponent } from './mobile-activation-in-progress-notification.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'Shared/ui/Mobile Activation In Progress Notification',
  component: MobileActivationInProgressNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-line-selector.activation-in-progress-label':
              'Hang on there! Your mobile line is not yet activated.',
            'ng.mobile-line-selector.activation-in-progress-description':
              "We're trying our best to activate your mobile line as soon as possible. We will inform you when your line is going to be active",
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
  parameters: {},
} as Meta<MobileActivationInProgressNotificationComponent>;

export const Primary = {
  render: (args: MobileActivationInProgressNotificationComponent) => ({
    props: args,
  }),
  args: {},
};
