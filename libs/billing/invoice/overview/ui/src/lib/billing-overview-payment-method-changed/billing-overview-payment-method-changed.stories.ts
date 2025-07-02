import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { BillingOverviewPaymentMethodChangedComponent } from './billing-overview-payment-method-changed.component';
import { UPDATED_PAYMENT_METHOD } from '@billing/invoice-overview/data-access';

export default {
  title: 'BillingOverview/ui/payment method changed',
  component: BillingOverviewPaymentMethodChangedComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.billing-overview.lbl.payment-changed-to-manual-info':
              'Je hebt nog een openstaand saldo.  Als je onlangs overschakelde naar domiciliëring, vragen we je om de oudere openstaande facturen nog handmatig te betalen. Zo kunnen we je betalingsoverzicht updaten.',
            'ng.billing-overview.lbl.payment-changed-to-direct-debit-info': 'Actief vanaf volgende aanrekening',
            'ng.billing-overview.lbl.payment-changed-to-direct-debit-header': 'Domiciliëring',
            'ng.billing-overview.lbl.payment-changed-to-manual-header': 'Overschrijving',
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
      options: [`MANUAL${UPDATED_PAYMENT_METHOD}`, `DIRECT_DEBIT${UPDATED_PAYMENT_METHOD}`],
    },
  },
} as Meta<BillingOverviewPaymentMethodChangedComponent>;

export const Primary = {
  render: (args: BillingOverviewPaymentMethodChangedComponent) => ({
    props: args,
  }),
  args: {
    updatedPaymentMethod: `MANUAL${UPDATED_PAYMENT_METHOD}`,
  },
};
