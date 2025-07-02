import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { NavigationCardType } from '@mybase-dashboard/data-access';
import { MyBaseNavigationCardsComponent } from '@mybase-dashboard/ui';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 2 - Internet/Navigation cards',
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
      NavigationCardType.INTERNET_USAGE_NOTIFICATIONS,
      NavigationCardType.SPEEDTEST,
      NavigationCardType.MANAGE_YOUR_PRODUCT,
      NavigationCardType.MY_DEVICE,
      NavigationCardType.DEVICES_USING_YOUR_NETWORK,
    ],
    type: 'internet',
    customClassGrid: 'col-lg-4',
    mobileTitle: 'Manage your internet lines',
    internetUsageNotificationUrl: 'https://internet-usage-notification',
    speedTestUrl: 'https://speedtest',
    productOverviewUrl: 'https://product-overview',
    myDeviceUrl: 'https://my-device',
    devicesUsingNetworkUrl: 'https://devicesUsingNetworkUrl',
  },
};

export const SomeCardsVisible = {
  render: (args: MyBaseNavigationCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [NavigationCardType.INTERNET_USAGE_NOTIFICATIONS, NavigationCardType.SPEEDTEST],
    type: 'internet',
    customClassGrid: 'col-lg-4',
    mobileTitle: 'Manage your internet lines',
    internetUsageNotificationUrl: 'https://internet-usage-notification',
    speedTestUrl: 'https://speedtest',
    productOverviewUrl: 'https://product-overview',
    myDeviceUrl: 'https://my-device',
    devicesUsingNetworkUrl: 'https://devicesUsingNetworkUrl',
  },
};
