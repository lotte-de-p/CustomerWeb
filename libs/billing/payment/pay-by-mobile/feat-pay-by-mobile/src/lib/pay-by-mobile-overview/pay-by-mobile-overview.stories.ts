import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { PayByMobileOverviewComponent } from './pay-by-mobile-overview.component';

import userDetailsMock from '../../mock/userdetails-mock.json';
import mobileLinesMock from '../../mock/mobile-lines-mock.json';
import mobileLinesMockForOrphanCustomer from '../../mock/mobile-lines-mock-for-orphan-customer.json';
import initialTransactions from '../../mock/initial-transactions-mock.json';
import transactionsMock from '../../mock/transactions-mock.json';
import transactionsMockSecondLine from '../../mock/transactions-mock-second-line.json';
import emptyInitialTransactionsMock from '../../mock/empty-initial-transactions-mock.json';
import emptySubscriptionsMock from '../../mock/empty-subscriptions-mock.json';
import msisdnBarredMock from '../../mock/msisdn-barred-mock.json';
import msisdnNotBarredMock from '../../mock/msisdn-not-barred-mock.json';
import msisdnNotBarredMockSecondLine from '../../mock/msisdn-not-barred-mock-second-line.json';
import subscriptionsMock from '../../mock/subscriptions-mock.json';
import subscriptionsMockSecondLine from '../../mock/subscriptions-mock-second-line.json';
import cancelSubscriptionMock from '../../mock/cancel-subscription-mock.json';
import companyDetailsMock1 from '../../mock/company-mock-1.json';
import companyDetailsMock2 from '../../mock/company-mock-2.json';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

const localhost = 'http://localhost:8080';

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
  title: 'PayByMobile/feature',
  component: PayByMobileOverviewComponent,
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
} as Meta<PayByMobileOverviewComponent>;

export const WithTransactionsAndSubscriptions = {
  render: (args: PayByMobileOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [
      mobileLinesMock,
      initialTransactions,
      transactionsMock,
      transactionsMockSecondLine,
      subscriptionsMock,
      subscriptionsMockSecondLine,
      userDetailsMock,
      companyDetailsMock1,
      msisdnNotBarredMock,
      msisdnNotBarredMockSecondLine,
      companyDetailsMock2,
      cancelSubscriptionMock,
    ],
  },
};

export const NoTransactionsOrSubscriptions = {
  render: (args: PayByMobileOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [
      userDetailsMock,
      mobileLinesMock,
      emptyInitialTransactionsMock,
      emptySubscriptionsMock,
      msisdnNotBarredMock,
    ],
  },
};
export const MobileLineIsBarred = {
  render: (args: PayByMobileOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [
      userDetailsMock,
      mobileLinesMock,
      emptyInitialTransactionsMock,
      emptySubscriptionsMock,
      msisdnBarredMock,
    ],
  },
};
export const OrphanCustomerWithNoMobileLines = {
  render: (args: PayByMobileOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, mobileLinesMockForOrphanCustomer],
  },
};
