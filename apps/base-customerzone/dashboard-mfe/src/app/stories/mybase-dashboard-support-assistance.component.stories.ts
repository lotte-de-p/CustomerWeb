import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { SupportAssistanceType } from '@mybase-dashboard/data-access';
import { MyBaseDashboardSupportAssistanceComponent } from '@mybase-dashboard/feat-mybase-dashboard';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 1/Support & Assistance',
  component: MyBaseDashboardSupportAssistanceComponent,
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
} as Meta<MyBaseDashboardSupportAssistanceComponent>;

export const AllCardsVisible = {
  render: (args: MyBaseDashboardSupportAssistanceComponent) => ({
    props: args,
  }),
  args: {
    data: [
      SupportAssistanceType.BEST_TARIFF,
      SupportAssistanceType.EASY_SWITCH,
      SupportAssistanceType.SUPPORT,
      SupportAssistanceType.WATCH_TV,
    ],
    watchTvUrl: 'https://watch-tv',
    bestTariffUrl: 'https://best-tariff',
    easySwitchUrl: 'https://easy-switch',
    supportUrl: 'https://support',
  },
};

export const SomeCardsVisible = {
  render: (args: MyBaseDashboardSupportAssistanceComponent) => ({
    props: args,
  }),
  args: {
    data: [SupportAssistanceType.EASY_SWITCH, SupportAssistanceType.WATCH_TV],
    watchTvUrl: 'https://watch-tv',
    bestTariffUrl: 'https://best-tariff',
    easySwitchUrl: 'https://easy-switch',
    supportUrl: 'https://support',
  },
};
