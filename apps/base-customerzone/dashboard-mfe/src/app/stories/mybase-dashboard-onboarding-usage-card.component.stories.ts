import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { Meta, applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { MybaseDashboardOnboardingUsageCardComponent } from '@mybase-dashboard/feat-mybase-dashboard';

export default {
  title: 'MyBase Dashboard/Level 1/Onboarding',
  component: MybaseDashboardOnboardingUsageCardComponent,
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
} as Meta<MybaseDashboardOnboardingUsageCardComponent>;

export const BillingCardPending = {
  render: (args: MybaseDashboardOnboardingUsageCardComponent) => ({
    props: args,
  }),
  args: {
    title: 'ng.mybase-dashboard.billing-card.title',
    cardType: 'billing',
  },
};

export const MobileUsageCardPending = {
  render: (args: MybaseDashboardOnboardingUsageCardComponent) => ({
    props: args,
  }),
  args: {
    title: 'ng.mybase-dashboard.mobile-usage-card.title',
    cardType: 'mobile',
  },
};

export const InternetUsageCardPending = {
  render: (args: MybaseDashboardOnboardingUsageCardComponent) => ({
    props: args,
  }),
  args: {
    title: 'ng.mybase-dashboard.internet-usage-card.title',
    cardType: 'internet',
  },
};

export const HomeNetworkCardPending = {
  render: (args: MybaseDashboardOnboardingUsageCardComponent) => ({
    props: args,
  }),
  args: {
    title: 'ng.mybase-dashboard.home-network.title',
    cardType: 'home-network',
  },
};
