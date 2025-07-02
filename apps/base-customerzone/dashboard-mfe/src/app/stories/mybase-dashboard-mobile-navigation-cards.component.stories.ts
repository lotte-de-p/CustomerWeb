import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { NavigationCardType } from '@mybase-dashboard/data-access';
import { MyBaseNavigationCardsComponent } from '@mybase-dashboard/ui';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Navigation cards',
  component: MyBaseNavigationCardsComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row">${story}</div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
} as Meta<MyBaseNavigationCardsComponent>;

export const AllCardsVisible = {
  render: (args: MyBaseNavigationCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [
      NavigationCardType.MOBILE_USAGE_NOTIFICATIONS,
      NavigationCardType.VOICEMAIL,
      NavigationCardType.SIM_MANAGEMENT,
      NavigationCardType.PRODUCT_OVERVIEW,
      NavigationCardType.TOPUP,
      NavigationCardType.TOPUP_HISTORY,
      NavigationCardType.USAGE_DETAILS,
      NavigationCardType.USAGE_LIMITS,
      NavigationCardType.BARRINGS,
    ],
    type: 'mobile',
    customClassGrid: 'col-lg-6',
    mobileTitle: 'Manage your mobile lines',
    mobileUsageNotificationUrl: 'https://mobile-usage-notification',
    voicemailUrl: 'https://voicemail',
    simManagementUrl: 'https://sim-management',
    productOverviewUrl: 'https://product-overview',
    mobileUsageDetailsUrl: 'https://mobileUsageDetailsUrl',
    mobileUsageLimitsUrl: 'https://mobileUsageLimitsUrl',
    barringsUrl: 'https://barringsUrl',
  },
};

export const SomeCardsVisible = {
  render: (args: MyBaseNavigationCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [NavigationCardType.MOBILE_USAGE_NOTIFICATIONS, NavigationCardType.PRODUCT_OVERVIEW],
    type: 'mobile',
    customClassGrid: 'col-lg-6',
    mobileTitle: 'Manage your mobile lines',
    mobileUsageNotificationUrl: 'https://mobile-usage-notification',
    voicemailUrl: 'https://voicemail',
    simManagementUrl: 'https://sim-management',
    productOverviewUrl: 'https://product-overview',
  },
};
