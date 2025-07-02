import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaymentEncouragementComponent } from './billing-overview-payment-encouragement.component';
import { DispatchMethod, PaymentMethod } from '@billing/invoice-overview/data-access';

export default {
  title: 'BillingOverview/ui/Payment Encouragement',
  component: PaymentEncouragementComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          translations: {
            'ng.billing-overview.payment-encouragement.direct-debit':
              'Automatisch betalen? Een slimme keuze! <a class="link" href="https://google.com">Domiciliëring nemen</a>',
            'ng.billing-overview.payment-encouragement.doccle':
              'Communiceer nu veiliger via Doccle <a class="link" href="https://google.com">Meer weten</a>',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(RouterModule.forRoot([])),
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
  backgrounds: {
    default: 'grey',
    values: [
      { name: 'grey', value: '#f5f5f5' },
      { name: 'white', value: '#ffffff' },
    ],
  },
} as Meta<PaymentEncouragementComponent>;

export const PaymentEncouragement = {
  render: (args: PaymentEncouragementComponent) => ({
    props: args,
  }),
  argTypes: {
    paymentMethod: {
      options: Object.values(PaymentMethod),
      control: { type: 'radio' },
    },
    dispatchMethod: {
      options: Object.values(DispatchMethod),
      control: { type: 'radio' },
    },
  },
  args: {
    paymentMethod: 'MANUAL',
    dispatchMethod: 'EMAIL',
  },
};
