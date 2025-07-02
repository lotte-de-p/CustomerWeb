import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { Meta, applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { MyBaseDashboardInternetUsageCardComponent } from '@mybase-dashboard/feat-mybase-dashboard';

const INTERNET_USAGE_PAGE_URL = 'internetUsage.com';

export default {
  title: 'MyBase Dashboard/Level 1/Internet Usage Card',
  component: MyBaseDashboardInternetUsageCardComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row"><div class="col-3">${story}</div></div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
} as Meta<MyBaseDashboardInternetUsageCardComponent>;

export const InternetUsageOK = {
  render: (args: MyBaseDashboardInternetUsageCardComponent) => ({
    props: args,
  }),
  args: {
    internetUsage: [
      {
        productName: 'BASE 29',
        address: {
          street: 'Liersesteenweg',
          houseNumber: '1',
          subHouseNumber: '10',
          boxNumber: '30',
          floor: '0',
          municipality: 'Mechelen',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'OK',
      },
    ],
    internetUsagePageUrl: INTERNET_USAGE_PAGE_URL,
  },
};

export const InternetUsageWarning = {
  render: (args: MyBaseDashboardInternetUsageCardComponent) => ({
    props: args,
  }),
  args: {
    internetUsage: [
      {
        productName: 'BASE 29',
        address: {
          street: 'Liersesteenweg',
          houseNumber: '1',
          subHouseNumber: '10',
          boxNumber: '30',
          floor: '0',
          municipality: 'Mechelen',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'LIMIT_ALMOST_REACHED',
      },
    ],
    internetUsagePageUrl: INTERNET_USAGE_PAGE_URL,
  },
};

export const InternetUsageCritical = {
  render: (args: MyBaseDashboardInternetUsageCardComponent) => ({
    props: args,
  }),
  args: {
    internetUsage: [
      {
        productName: 'BASE 29',
        address: {
          street: 'Liersesteenweg',
          houseNumber: '1',
          subHouseNumber: '10',
          boxNumber: '30',
          floor: '0',
          municipality: 'Mechelen',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'LIMIT_EXCEEDED',
      },
    ],
    internetUsagePageUrl: INTERNET_USAGE_PAGE_URL,
  },
};

export const InternetUsageFUPLimitReached = {
  render: (args: MyBaseDashboardInternetUsageCardComponent) => ({
    props: args,
  }),
  args: {
    internetUsage: [
      {
        productName: 'BASE 29',
        usageStatus: 'LIMIT_EXCEEDED_SLOW_SPEED',
      },
    ],
    internetUsagePageUrl: INTERNET_USAGE_PAGE_URL,
  },
};

export const MultipleInternetUsageWarning = {
  render: (args: MyBaseDashboardInternetUsageCardComponent) => ({
    props: args,
  }),
  args: {
    internetUsage: [
      {
        productName: 'BASE 29',
        address: {
          street: 'Liersesteenweg',
          houseNumber: '1',
          subHouseNumber: '10',
          boxNumber: '30',
          floor: '0',
          municipality: 'Mechelen',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'LIMIT_ALMOST_REACHED',
      },
      {
        productName: 'BASE 43',
        address: {
          street: 'Kerkstraat',
          houseNumber: '5',
          floor: '0',
          municipality: 'Buggenhout',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'LIMIT_ALMOST_REACHED',
      },
    ],
    internetUsagePageUrl: INTERNET_USAGE_PAGE_URL,
  },
};

export const MultipleInternetUsageCritical = {
  render: (args: MyBaseDashboardInternetUsageCardComponent) => ({
    props: args,
  }),
  args: {
    internetUsage: [
      {
        productName: 'BASE 29',
        address: {
          street: 'Liersesteenweg',
          houseNumber: '1',
          subHouseNumber: '10',
          boxNumber: '30',
          floor: '0',
          municipality: 'Mechelen',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'LIMIT_EXCEEDED',
      },
      {
        productName: 'BASE 22',
        address: {
          street: 'Stationstraat',
          houseNumber: '66',
          floor: '0',
          municipality: 'Gent',
          country: 'België',
          postalCode: '2800',
        },
        usageStatus: 'LIMIT_EXCEEDED',
      },
    ],
    internetUsagePageUrl: INTERNET_USAGE_PAGE_URL,
  },
};
