import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { Meta, applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { MyBaseDashboardMobileUsageCardComponent } from '@mybase-dashboard/feat-mybase-dashboard';

const MOBILE_USAGE_PAGE_URL = 'mobileUsage.com';

export default {
  title: 'MyBase Dashboard/Level 1/Mobile Usage Card',
  component: MyBaseDashboardMobileUsageCardComponent,
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
} as Meta<MyBaseDashboardMobileUsageCardComponent>;

export const MobileUsageOK = {
  render: (args: MyBaseDashboardMobileUsageCardComponent) => ({
    props: args,
  }),
  args: {
    mobileUsage: [
      {
        productName: 'BASE 29',
        msisdn: '0454545641',
        usageStatus: 'OK',
      },
    ],
    mobileUsagePageUrl: MOBILE_USAGE_PAGE_URL,
  },
};

export const MobileUsageWarning = {
  render: (args: MyBaseDashboardMobileUsageCardComponent) => ({
    props: args,
  }),
  args: {
    mobileUsage: [
      {
        productName: 'BASE 29',
        msisdn: '0454545641',
        usageStatus: 'LIMIT_ALMOST_REACHED',
      },
    ],
    mobileUsagePageUrl: MOBILE_USAGE_PAGE_URL,
  },
};

export const MobileUsageCritical = {
  render: (args: MyBaseDashboardMobileUsageCardComponent) => ({
    props: args,
  }),
  args: {
    mobileUsage: [
      {
        productName: 'BASE 29',
        msisdn: '0454545641',
        usageStatus: 'LIMIT_EXCEEDED',
      },
    ],
    mobileUsagePageUrl: MOBILE_USAGE_PAGE_URL,
  },
};

export const MobileUsageSlowSpeed = {
  render: (args: MyBaseDashboardMobileUsageCardComponent) => ({
    props: args,
  }),
  args: {
    mobileUsage: [
      {
        productName: 'BASE 30',
        msisdn: '0454545641',
        usageStatus: 'LIMIT_EXCEEDED_SLOW_SPEED',
      },
    ],
    mobileUsagePageUrl: MOBILE_USAGE_PAGE_URL,
  },
};

export const MultipleMobileUsageWarning = {
  render: (args: MyBaseDashboardMobileUsageCardComponent) => ({
    props: args,
  }),
  args: {
    mobileUsage: [
      {
        productName: 'BASE 29',
        msisdn: '0454545641',
        usageStatus: 'LIMIT_ALMOST_REACHED',
      },
      {
        productName: 'BASE 54',
        msisdn: '0454546711',
        usageStatus: 'LIMIT_ALMOST_REACHED',
      },
    ],
    mobileUsagePageUrl: MOBILE_USAGE_PAGE_URL,
  },
};

export const MultipleMobileUsageCritical = {
  render: (args: MyBaseDashboardMobileUsageCardComponent) => ({
    props: args,
  }),
  args: {
    mobileUsage: [
      {
        productName: 'BASE 29',
        msisdn: '0454545641',
        usageStatus: 'LIMIT_EXCEEDED',
      },
      {
        productName: 'BASE 34',
        msisdn: '0454533481',
        usageStatus: 'LIMIT_EXCEEDED',
      },
    ],
    mobileUsagePageUrl: MOBILE_USAGE_PAGE_URL,
  },
};
