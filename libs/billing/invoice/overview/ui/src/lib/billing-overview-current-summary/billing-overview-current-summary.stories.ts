import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { BillingOverviewCurrentSummaryComponent } from './billing-overview-current-summary.component';
import { StatusDescription, UPDATED_PAYMENT_METHOD } from '@billing/invoice-overview/data-access';

export default {
  title: 'BillingOverview/ui/current summary',
  component: BillingOverviewCurrentSummaryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.billing-overview.lbl.manage-billing-settings': 'Wijzig',
            'ng.billing-overview.lbl.payment-changed-to-manual-notification': 'Je hebt nog een openstaand saldo',
            'ng.billing-overview.lbl.payment-changed-to-direct-debit-notification': 'Binnenkort naar domiciliëring',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: {} }, importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  parameters: {},
  argTypes: {
    updatedPaymentMethod: {
      control: 'select',
      options: [`MANUAL${UPDATED_PAYMENT_METHOD}`, `DIRECT_DEBIT${UPDATED_PAYMENT_METHOD}`, ``],
    },
  },
} as Meta<BillingOverviewCurrentSummaryComponent>;

export const Primary = {
  render: (args: BillingOverviewCurrentSummaryComponent) => ({
    props: args,
  }),
  args: {
    headerText: 'Betaalwijze',
    descriptions: [{ caption: 'SMS', value: '0467712123' } as StatusDescription],
    manageSettingUrl: 'google.com',
    updatedPaymentMethod: `MANUAL${UPDATED_PAYMENT_METHOD}`,
  },
};
