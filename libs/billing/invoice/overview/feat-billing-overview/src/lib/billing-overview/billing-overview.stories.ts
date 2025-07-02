import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PathCategorisationService, TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { BillingOverviewComponent } from './billing-overview.component';

import userDetailsMock from '../../mock/userdetails-mock.json';
import billingAccounts from '../../mock/billing-accounts-mock.json';
import invoicesOneUnpaid from '../../mock/invoices-1-unpaid-mock.json';
import invoicesOne from '../../mock/invoices-1-mock.json';
import invoicesTwo from '../../mock/invoices-2-mock.json';
import invoicesThree from '../../mock/invoices-3-mock.json';
import noInvoicesMock from '../../mock/invoices-none-mock.json';
import noUnpaidInvoicesMock from '../../mock/invoices-no-unpaid-mock.json';
import reimbursementInvoicesMock from '../../mock/invoices-reimbursement-mock.json';
import noPaidInvoicesMock from '../../mock/invoices-no-paid-mock.json';
import errorInvoicesMock from '../../mock/invoices-error-mock.json';
import downloadInvoice from '../../mock/invoices-download.json';
import downloadInvoice2 from '../../mock/invoices-download-2.json';
import invoicesExport from '../../mock/invoices-export.json';
import invoicesBillScenarioOne from '../../mock/invoices-bill-scenario-1-mock.json';
import dayjs from 'dayjs';
import { InvoiceOverview, InvoiceOverviewStore } from '@billing/invoice-overview/data-access';

const localhost = 'http://localhost:8080';

interface MockedInvoiceResponse {
  url: string;
  method: string;
  status: number;
  response: InvoiceOverview;
}

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

function getTranslations() {
  const globals = new URLSearchParams(window.location.search).get('globals');
  const teleEnv = globals
    ?.split(';')
    .find((param) => param.startsWith('environment'))
    ?.split(':')[1];
  if (teleEnv) {
    return window['pageLocaleData'].bundle;
  }
  return require('../../assets/i18n/en.json');
}

export default {
  title: 'BillingOverview/feature/overview',
  component: BillingOverviewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          translations: getTranslations(),
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
  backgrounds: {
    default: 'grey',
    values: [
      { name: 'grey', value: '#f5f5f5' },
      { name: 'white', value: '#ffffff' },
    ],
  },
} as Meta<BillingOverviewComponent>;

const DATE_FORMAT = 'YYYY-MM-DD';
const billingSettingsLink = '/iframe.html?id=billingoverview-feature-overview--billing-overview-skeleton';
const onlinePaymentLink = '/iframe.html?id=billingoverview-feature-overview--billing-overview-no-paid-invoices';
const showBillScenario = true;

export const BillingOverview = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  args: {
    billingSettingsLink,
    onlinePaymentLink,
    showBillScenario,
  },
  parameters: {
    mockData: [
      userDetailsMock,
      billingAccounts,
      downloadInvoice,
      downloadInvoice2,
      mapInvoices(invoicesOne as unknown as MockedInvoiceResponse),
      mapInvoices(invoicesTwo as unknown as MockedInvoiceResponse),
      mapInvoices(invoicesThree as unknown as MockedInvoiceResponse),
      invoicesExport,
    ],
  },
};

export const BillingOverviewOneUnpaidInvoice = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  args: {
    billingSettingsLink,
    onlinePaymentLink,
    showBillScenario,
  },
  parameters: {
    mockData: [userDetailsMock, billingAccounts, downloadInvoice, invoicesOneUnpaid],
  },
};

export const BillingOverviewSoho = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
    applicationConfig: {
      providers: [
        {
          provide: PathCategorisationService,
          useValue: {
            isCustomerOfType: () => true,
            getPostfixVariables: () => ({}),
            getCustomerBrand: () => 'telenet',
          },
        },
      ],
    },
  }),
  args: {
    billingSettingsLink,
    onlinePaymentLink,
    showBillScenario,
  },
  parameters: {
    mockData: [
      userDetailsMock,
      billingAccounts,
      downloadInvoice,
      downloadInvoice2,
      mapInvoices(invoicesOne as unknown as MockedInvoiceResponse),
      mapInvoices(invoicesTwo as unknown as MockedInvoiceResponse),
      mapInvoices(invoicesThree as unknown as MockedInvoiceResponse),
    ],
  },
};

export const BillingOverviewSohoOneUnpaidInvoice = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
    applicationConfig: {
      providers: [
        {
          provide: PathCategorisationService,
          useValue: {
            isCustomerOfType: () => true,
            getPostfixVariables: () => ({}),
            getCustomerBrand: () => 'telenet',
          },
        },
      ],
    },
  }),
  args: {
    billingSettingsLink,
    onlinePaymentLink,
    showBillScenario,
  },
  parameters: {
    mockData: [userDetailsMock, billingAccounts, downloadInvoice, invoicesOneUnpaid],
  },
};

function mapInvoices(invoices: MockedInvoiceResponse) {
  return {
    ...invoices,
    response: JSON.parse(
      JSON.stringify(invoices.response)
        .replaceAll('{latest}', dayjs(new Date(2024, 5, 26)).format(DATE_FORMAT))
        .replaceAll('{latestMinusOne}', dayjs(new Date(2024, 4, 26)).format(DATE_FORMAT))
        .replaceAll('{today}', dayjs(new Date()).format(DATE_FORMAT))
        .replaceAll('{twentyFourthOfJune}', dayjs(new Date(new Date().getFullYear() + 1, 5, 24)).format(DATE_FORMAT))
        .replaceAll('{twentyFifthOfJune}', dayjs(new Date(new Date().getFullYear() + 1, 5, 25)).format(DATE_FORMAT))
    ),
  };
}

export const BillingOverviewNoInvoices = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccounts, noInvoicesMock],
  },
};

export const BillingOverviewNoUnpaidInvoices = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccounts, noUnpaidInvoicesMock],
  },
};

export const BillingOverviewReimbursementInvoices = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [
      userDetailsMock,
      billingAccounts,
      mapInvoices(reimbursementInvoicesMock as unknown as MockedInvoiceResponse),
    ],
  },
};

export const BillingOverviewNoPaidInvoices = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccounts, noPaidInvoicesMock],
  },
};

export const BillingOverviewError = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccounts, errorInvoicesMock],
  },
};

export const BillingOverviewPaymentMethodChanged = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, billingAccounts, noUnpaidInvoicesMock],
  },
};

export const BillingOverviewWithBillScenarios = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  args: {
    billingSettingsLink,
    onlinePaymentLink,
    showBillScenario,
  },
  parameters: {
    mockData: [
      userDetailsMock,
      billingAccounts,
      downloadInvoice,
      downloadInvoice2,
      mapInvoices(invoicesBillScenarioOne as unknown as MockedInvoiceResponse),
      invoicesExport,
    ],
  },
};
