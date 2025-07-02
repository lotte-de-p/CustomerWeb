import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { MyBaseDashboardMobileUsagePostpaidComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const MOBILE_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Mobile usage postpaid',
  component: MyBaseDashboardMobileUsagePostpaidComponent,
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
} as Meta<MyBaseDashboardMobileUsagePostpaidComponent>;

export const UsageOK = {
  render: (args: MyBaseDashboardMobileUsagePostpaidComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      postpaid: {
        data: { total: 26_843_545_600, carryOver: 0, remaining: 12_884_901_888 },
        daysUntilRenewal: 16,
        outOfBundleLimit: null,
        status: UsageStatusEnum.OK,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};

export const UsageWarning = {
  render: (args: MyBaseDashboardMobileUsagePostpaidComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      postpaid: {
        data: { total: 26_843_545_600, carryOver: 0, remaining: 3_758_096_384 },
        daysUntilRenewal: 4,
        outOfBundleLimit: null,
        status: UsageStatusEnum.LIMIT_ALMOST_REACHED,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};

export const UsageLimit = {
  render: (args: MyBaseDashboardMobileUsagePostpaidComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      postpaid: {
        data: { total: 26_843_545_600, carryOver: 0, remaining: 0 },
        daysUntilRenewal: 3,
        outOfBundleLimit: null,
        status: UsageStatusEnum.LIMIT_EXCEEDED,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};

export const DataJump = {
  render: (args: MyBaseDashboardMobileUsagePostpaidComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      postpaid: {
        data: { total: 33_994_666_148, carryOver: 7_247_757_312, remaining: 13_454_853_485 },
        daysUntilRenewal: 14,
        outOfBundleLimit: null,
        status: UsageStatusEnum.OK,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};

export const BudgetLimit = {
  render: (args: MyBaseDashboardMobileUsagePostpaidComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      postpaid: {
        data: { total: 26_843_545_600, carryOver: 536_870_912, remaining: 17_287_243_366 },
        daysUntilRenewal: 27,
        outOfBundleLimit: 30,
        status: UsageStatusEnum.OK,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};
