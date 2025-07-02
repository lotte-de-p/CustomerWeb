import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { MyBaseDashboardMobileUsageBasedOnYouComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const MOBILE_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Mobile usage basedonyou',
  component: MyBaseDashboardMobileUsageBasedOnYouComponent,
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
} as Meta<MyBaseDashboardMobileUsageBasedOnYouComponent>;

export const UsageOK = {
  render: (args: MyBaseDashboardMobileUsageBasedOnYouComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      basedOnYou: {
        total: 50,
        remaining: 25,
        daysUntilRenewal: 16,
        status: UsageStatusEnum.OK,
      },
    },
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};
