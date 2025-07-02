import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { MyBaseDashboardInternetUsageUnlimitedComponent } from '@mybase-dashboard/feat-mybase-dashboard-internet';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const INTERNET_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Internet/Internet usage unlimited',
  component: MyBaseDashboardInternetUsageUnlimitedComponent,
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
} as Meta<MyBaseDashboardInternetUsageUnlimitedComponent>;

export const UsageOK = {
  render: (args: MyBaseDashboardInternetUsageUnlimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      unlimited: {
        usedBytes: 824_955_843_379,
        daysUntilRenewal: 11,
        status: UsageStatusEnum.OK,
      },
    },
    internetUsageUrl: INTERNET_USAGE_URL,
  },
};

export const UsageWarning = {
  render: (args: MyBaseDashboardInternetUsageUnlimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      unlimited: {
        usedBytes: 2_692_345_678_901,
        daysUntilRenewal: 5,
        status: UsageStatusEnum.LIMIT_ALMOST_REACHED,
      },
    },
    internetUsageUrl: INTERNET_USAGE_URL,
  },
};

export const UsageLimit = {
  render: (args: MyBaseDashboardInternetUsageUnlimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      unlimited: {
        usedBytes: 3_221_225_472_000,
        daysUntilRenewal: 2,
        status: UsageStatusEnum.LIMIT_EXCEEDED,
      },
    },
    internetUsageUrl: INTERNET_USAGE_URL,
  },
};
