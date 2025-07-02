import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { MyBaseDashboardMobileUsagePrepaidComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const TOP_UP_URL = 'https://top-up-url';
const MOBILE_USAGE_URL = 'https://mobile-usage-url';

registerLocaleData(localeNlBe);

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Mobile usage prepaid',
  component: MyBaseDashboardMobileUsagePrepaidComponent,
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
} as Meta<MyBaseDashboardMobileUsagePrepaidComponent>;

export const Basic = {
  render: (args: MyBaseDashboardMobileUsagePrepaidComponent) => ({
    props: args,
  }),
  args: {
    data: {
      showCard: true,
      prepaid: {
        balance: 89.95,
        expiryDate: '2024-03-14T12:58:26.817Z',
      },
    },
    topUpUrl: TOP_UP_URL,
    mobileUsageUrl: MOBILE_USAGE_URL,
  },
};
