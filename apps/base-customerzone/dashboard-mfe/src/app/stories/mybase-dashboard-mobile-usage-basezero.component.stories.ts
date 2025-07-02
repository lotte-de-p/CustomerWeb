import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { MyBaseDashboardMobileUsageBaseZeroComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const MOBILE_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Mobile usage basezero',
  component: MyBaseDashboardMobileUsageBaseZeroComponent,
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
} as Meta<MyBaseDashboardMobileUsageBaseZeroComponent>;

export const UsageOK = {
  render: (args: MyBaseDashboardMobileUsageBaseZeroComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      baseZero: {
        daysUntilRenewal: 16,
        used: 12,
        status: UsageStatusEnum.OK,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};
