import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { NavigationCardType } from '@mybase-dashboard/data-access';
import { MyBaseNavigationCardsComponent } from '@mybase-dashboard/ui';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 2 - DTV/Navigation cards',
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
      NavigationCardType.PRODUCT_OVERVIEW,
      NavigationCardType.ADD_TV_BOX,
      NavigationCardType.MANAGE_CONTENT_PACKS,
      NavigationCardType.MANAGE_YOUR_DEVICE,
    ],
    type: 'dtv',
    customClassGrid: 'col-lg-4',
    manageContentPacksUrl: 'http://www.manageContentPacksUrl.com',
    watchTvOnlineUrl: 'http://www.watchTvOnlineUrl.com',
    manageYourDeviceUrl: 'http://www.manageYourDeviceUrl.com',
    addTvBoxUrl: 'http://www.addTvBoxUrl.com',
    productOverviewUrl: 'http://www.productOverviewUrl.com',
  },
};

export const SomeCardsVisible = {
  render: (args: MyBaseNavigationCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [NavigationCardType.PRODUCT_OVERVIEW, NavigationCardType.ADD_TV_BOX],
    type: 'dtv',
    customClassGrid: 'col-lg-4',
    manageContentPacksUrl: 'http://www.manageContentPacksUrl.com',
    watchTvOnlineUrl: 'http://www.watchTvOnlineUrl.com',
    manageYourDeviceUrl: 'http://www.manageYourDeviceUrl.com',
    addTvBoxUrl: 'http://www.addTvBoxUrl.com',
    productOverviewUrl: 'http://www.productOverviewUrl.com',
  },
};
