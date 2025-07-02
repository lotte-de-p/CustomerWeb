import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { BillingAccountSelectorComponent } from './billing-account-selector.component';

import billingAccountsMock from '../../mock/billing-accounts-mock.json';
import noBillingAccountsMock from '../../mock/no-billing-accounts-mock.json';
import billingAccountsFailureMock from '../../mock/billing-accounts-failure-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import { InvoiceOverviewStore } from '@billing/invoice-overview/data-access';

const localhost = 'http://localhost:8080';
const homePageLink = 'http://homepage-link';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'BillingOverview/feature/selector',
  component: BillingAccountSelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          translations: {
            'ng.billing-overview.billing-account-selector.lbl.billing-account': 'Billing Account',
            'ng.billing-overview.billing-account-selector.lbl.change-account': 'Wijzig',
            'ng.billing-overview.billing-account-selector.lbl.title': 'Kies billing account',
            'ng.billing-overview.billing-account-selector.lbl.status.PAID': 'Betaald',
            'ng.billing-overview.billing-account-selector.lbl.status.UNPAID': 'Te betalen',
            'ng.billing-overview.billing-account-selector.lbl.status.PARTIALLY_PAID': 'Te betalen',
            'ng.billing-overview.billing-account-selector.lbl.status.OVERDUE': 'Aanrekening te laat',
            'ng.billing-overview.no-billing-accounts': 'Geen billing accounts gevonden',
            'ng.billing-overview.billing-account-selector.lbl.error-label':
              'We vinden je gegevens helaas even niet terug',
            'ng.billing-overview.billing-account-selector.lbl.error-description':
              'Door een technisch probleem bij Telenet, kunnen we je billing accounts momenteel niet opvragen.',
            'ng.billing-overview.no-billing-accounts-header': 'Oeps! Niets te zien hier',
            'ng.billing-overview.no-billing-accounts-description':
              'Het lijkt erop dat je nog geen account hebt voor betalingen',
            'ng.billing-overview.no-billing-accounts-link': 'My Telenet home',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [
        InvoiceOverviewStore,
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
} as Meta<BillingAccountSelectorComponent>;

export const BillingAccountSelector = {
  render: (args: BillingAccountSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccountsMock],
  },
};

export const BillingAccountSelectorNoAccounts = {
  render: (
    args: BillingAccountSelectorComponent,
    {
      globals: { brand },
    }: {
      globals: { brand: string };
    }
  ) => ({
    props: {
      ...args,
      isTelenetCustomer: brand === 'telenet',
    },
  }),
  args: {
    homePageLink,
  },
  parameters: {
    mockData: [userDetailsMock, noBillingAccountsMock],
  },
};

export const BillingAccountSelectorFailure = {
  render: (args: BillingAccountSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccountsFailureMock],
  },
};
