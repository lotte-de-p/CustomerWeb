import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { MyBaseDashboardInternetUsageLimitedComponent } from '@mybase-dashboard/feat-mybase-dashboard-internet';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const INTERNET_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Internet/Internet usage limited',
  component: MyBaseDashboardInternetUsageLimitedComponent,
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
} as Meta<MyBaseDashboardInternetUsageLimitedComponent>;

export const UsageOK = {
  render: (args: MyBaseDashboardInternetUsageLimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      limited: {
        remainingBytes: 15_569_256_448,
        totalBytes: 32_212_254_720,
        daysUntilRenewal: 16,
      },
    },
    internetUsageUrl: INTERNET_USAGE_URL,
  },
};

export const UsageWarning = {
  render: (args: MyBaseDashboardInternetUsageLimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      limited: {
        remainingBytes: 2_834_678_415,
        totalBytes: 42_949_672_960,
        daysUntilRenewal: 9,
      },
    },
    internetUsageUrl: INTERNET_USAGE_URL,
  },
};

export const UsageLimit = {
  render: (args: MyBaseDashboardInternetUsageLimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      limited: {
        remainingBytes: 0,
        totalBytes: 42_949_672_960,
        daysUntilRenewal: 3,
      },
    },
    internetUsageUrl: INTERNET_USAGE_URL,
  },
};
