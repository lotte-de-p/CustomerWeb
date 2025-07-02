import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { BillingPaymentMethod } from '@mybase-dashboard/data-access';
import { MyBaseDashboardBillingCardComponent } from '@mybase-dashboard/feat-mybase-dashboard';
import { Meta, applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const BILLING_URL = 'billingUrl.com';
const PAY_NOW_URL = 'payNowUrl.com';
const VIEW_BILLS_URL = 'viewBills.com';
const VIEW_DETAILS_URL = 'viewDetails.com';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 1/Billing Card',
  component: MyBaseDashboardBillingCardComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row"><div class="col-4">${story}</div></div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'nl-BE' },
      ],
    }),
  ],
} as Meta<MyBaseDashboardBillingCardComponent>;

export const NoOpenAmount = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const DueBillsSingle = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: 6,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const DueBillsMultiple = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: 6,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
          {
            openAmount: 35.98,
            dueInDays: 13,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const OverDueBillsSinglePaymentManual = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: -8,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const OverDueBillsSinglePaymentDirectDebit = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: -8,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const OverDueBillsMultiple = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: -8,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
          {
            openAmount: 35.98,
            dueInDays: -2,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const RefundsSingle = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [],
        refunds: [
          {
            amount: 13.88,
          },
        ],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const RefundsMultiple = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [],
        refunds: [
          {
            amount: 13.88,
          },
          {
            amount: 2.51,
          },
        ],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const DueBillsMultipleMultipleAccounts = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  name: 'Due Bills Multiple (Multiple accounts)',
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: 2,
            showPayNowButton: false,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
      {
        accountNumber: '66934408',
        openBills: [
          {
            openAmount: 44.98,
            dueInDays: 3,
            showPayNowButton: false,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};

export const OverDueBillsMultipleMultipleAccounts = {
  render: (args: MyBaseDashboardBillingCardComponent) => ({
    props: args,
  }),
  name: 'Over Due Bills Multiple (Multiple accounts)',
  args: {
    billingAccounts: [
      {
        accountNumber: '783959437',
        openBills: [
          {
            openAmount: 79.42,
            dueInDays: -8,
            showPayNowButton: true,
            paymentMethod: BillingPaymentMethod.MANUAL,
          },
        ],
        refunds: [],
      },
      {
        accountNumber: '66934408',
        openBills: [
          {
            openAmount: 44.98,
            dueInDays: -3,
            showPayNowButton: false,
            paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
          },
        ],
        refunds: [],
      },
    ],
    billingUrl: BILLING_URL,
    payNowUrl: PAY_NOW_URL,
    viewBillsUrl: VIEW_BILLS_URL,
    viewDetailsUrl: VIEW_DETAILS_URL,
  },
};
