import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { MyBaseDashboardMobileUsageUnlimitedComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const MOBILE_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Mobile usage unlimited',
  component: MyBaseDashboardMobileUsageUnlimitedComponent,
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
} as Meta<MyBaseDashboardMobileUsageUnlimitedComponent>;

export const UsageOK = {
  render: (args: MyBaseDashboardMobileUsageUnlimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      unlimited: {
        daysUntilRenewal: 22,
        used: 10_415_295_692,
        status: UsageStatusEnum.OK,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};

export const UsageWarning = {
  render: (args: MyBaseDashboardMobileUsageUnlimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      unlimited: {
        daysUntilRenewal: 11,
        used: 122_906_567_936,
        status: UsageStatusEnum.LIMIT_ALMOST_REACHED,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};

export const UsageLimit = {
  render: (args: MyBaseDashboardMobileUsageUnlimitedComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      unlimited: {
        daysUntilRenewal: 4,
        used: 197_868_495_616,
        status: UsageStatusEnum.LIMIT_EXCEEDED,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};
