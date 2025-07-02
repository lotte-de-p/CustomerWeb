import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PayByMobileNoContentComponent } from './pay-by-mobile-no-content.component';

export default {
  title: 'PayByMobile/dumb/ui/NoContent',
  component: PayByMobileNoContentComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.pay-by-mobile.info.no-content.title': 'Nothing to see here',
            'ng.pay-by-mobile.info.no-content': "You haven't yet made any purchases with Telenet Pay",
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: {} }],
    }),
  ],
  parameters: {},
} as Meta<PayByMobileNoContentComponent>;

export const NoContent = {
  render: (args: PayByMobileNoContentComponent) => ({
    props: args,
  }),
};
