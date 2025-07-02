import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { MyBaseDashboardHomeNetworkComponent } from '@mybase-dashboard/ui';
import { Meta, applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

const HOME_NETWORK_PAGE_URL = 'homeNetwork.com';

export default {
  title: 'MyBase Dashboard/Level 1/Home Network Card',
  component: MyBaseDashboardHomeNetworkComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row"><div class="col-3">${story}</div></div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
} as Meta<MyBaseDashboardHomeNetworkComponent>;

export const HomeNetworkOK = {
  render: (args: MyBaseDashboardHomeNetworkComponent) => ({
    props: args,
  }),
  args: {
    homeNetworkUrl: HOME_NETWORK_PAGE_URL,
    componentPrefix: 'ng.mybase-dashboard',
  },
};
