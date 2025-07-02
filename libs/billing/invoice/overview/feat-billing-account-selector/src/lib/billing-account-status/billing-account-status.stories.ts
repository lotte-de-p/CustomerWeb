import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { BillingAccountStatusComponent } from './billing-account-status.component';
import { PaymentStatus } from '@billing/invoice-overview/data-access';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'BillingOverview/ui/Billing Account Status',
  component: BillingAccountStatusComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          translations: {
            'ng.billing-overview.billing-account-selector.lbl.status.PAID': 'Betaald',
            'ng.billing-overview.billing-account-selector.lbl.status.UNPAID': 'Te betalen',
            'ng.billing-overview.billing-account-selector.lbl.status.OVERDUE': 'Aanrekening te laat',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(),
            traceLimit: 75,
          })
        ),
        provideHttpClient(),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
} as Meta<BillingAccountStatusComponent>;

export const Status = {
  render: (params: { paymentStatus: PaymentStatus }) => ({
    props: {
      paymentStatus: params.paymentStatus,
    },
    argTypes: {
      paymentStatus: {
        options: Object.values(PaymentStatus),
        control: { type: 'radio' },
      },
    },
  }),
  args: {
    paymentStatus: 'PAID',
  },
};

export const Paid = {
  render: (args: BillingAccountStatusComponent) => ({
    props: {
      ...args,
      paymentStatus: PaymentStatus.PAID,
    },
  }),
};

export const Unpaid = {
  render: (args: BillingAccountStatusComponent) => ({
    props: {
      ...args,
      paymentStatus: PaymentStatus.UNPAID,
    },
  }),
};

export const Overdue = {
  render: (args: BillingAccountStatusComponent) => ({
    props: {
      ...args,
      paymentStatus: PaymentStatus.OVERDUE,
    },
  }),
};
