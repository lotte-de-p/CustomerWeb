import { CommonModule } from '@angular/common';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { UpdateWarningDialogComponent } from './update-warning-dialog.component';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'MobileUsageLimits/dumb/ui/outofbundlelimits/Update Warning Dialog',
  component: UpdateWarningDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-usage-limits.lbl.usage-limits-warning': 'Save changes',
            'ng.mobile-usage-limits.lbl.out-of-bundle-warning-description':
              'You have already exceeded this out-of-plan limit. If you continue, we will block your out-of-plan usage immediately.',
            'ng.mobile-usage-limits.btn.cancel': 'Back',
            'ng.mobile-usage-limits.btn.ok': 'Submit',
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
  render: (args: UpdateWarningDialogComponent) => ({
    props: args,
  }),
  args: {
    showWarningDialog: true,
    dialogData: {
      warningText: 'ng.mobile-usage-limits.lbl.usage-limits-warning',
      warningDetails: 'ng.mobile-usage-limits.lbl.out-of-bundle-warning-description',
      cancelButtonText: 'ng.mobile-usage-limits.btn.cancel',
      confirmButtonText: 'ng.mobile-usage-limits.btn.ok',
    },
  },
};
