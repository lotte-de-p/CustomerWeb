import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { WatchTvOnlineComponent } from '@mybase-dashboard/ui';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 1/Watch tv online',
  component: WatchTvOnlineComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row"><div class="col-4">${story}</div></div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
} as Meta<WatchTvOnlineComponent>;

export const WatchTvOnline = {
  render: (args: WatchTvOnlineComponent) => ({
    props: args,
  }),
  args: {
    watchTvUrl: 'https://watch-tv',
    watchTvIosUrl: 'https://watchTvIosUrl',
    watchTvAndroidUrl: 'https://watchTvAndroidUrl',
  },
};

export const WatchTvOnlineWithSubtitle = {
  render: (args: WatchTvOnlineComponent) => ({
    props: args,
  }),
  args: {
    showSubtitle: true,
    watchTvUrl: 'https://watch-tv',
    watchTvIosUrl: 'https://watchTvIosUrl',
    watchTvAndroidUrl: 'https://watchTvAndroidUrl',
  },
};
