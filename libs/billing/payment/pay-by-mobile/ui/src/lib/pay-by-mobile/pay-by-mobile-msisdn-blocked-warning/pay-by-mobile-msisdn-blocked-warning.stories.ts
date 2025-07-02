import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PayByMobileMsisdnBlockedWarningComponent } from './pay-by-mobile-msisdn-blocked-warning.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'PayByMobile/dumb/ui/Pay By Mobile MSISDN Blocked Warning',
  component: PayByMobileMsisdnBlockedWarningComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.pay-by-mobile.info.pay-warning-message.tln':
              "You have disabled Telenet Pay under 'your mobile numbers'",
            'ng.pay-by-mobile.link.mobile-barrings.tln': 'Bar Telenet Pay',
            'ng.pay-by-mobile.info.pay-warning-third-party-message.tln.title': 'You have barred this mobile line',
            'ng.pay-by-mobile.info.pay-warning-third-party-message.tln':
              "If you are using Telenet Pay for payment towards Netflix or Google Pay, then you won't be able to pay anymore.",
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: {} }],
    }),
  ],
  parameters: {},
} as Meta<PayByMobileMsisdnBlockedWarningComponent>;

export const Primary = {
  render: (args: PayByMobileMsisdnBlockedWarningComponent) => ({
    props: args,
  }),
};
