import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillingOverviewNoBillingAccountsComponent } from './billing-overview-no-billing-accounts.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

const homePageLink = 'http://homepage-link';
export default {
  title: 'BillingOverview/ui/No Billing Accounts',
  component: BillingOverviewNoBillingAccountsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.billing-overview.no-billing-accounts-header': 'Oeps! Niets te zien hier',
            'ng.billing-overview.no-billing-accounts-description':
              'Het lijkt erop dat je nog geen account hebt voor betalingen',
            'ng.billing-overview.no-billing-accounts-link': 'My Telenet home',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
  parameters: {},
} as Meta<BillingOverviewNoBillingAccountsComponent>;

export const Primary = {
  render: (
    args: BillingOverviewNoBillingAccountsComponent,
    {
      globals: { brand },
    }: {
      globals: { brand: string };
    }
  ) => ({
    props: {
      ...args,
      isTelenetCustomer: brand === 'telenet',
    },
  }),
  args: {
    homePageLink,
  },
};

export const NoHomePageLinkConfigured = {
  render: (
    args: BillingOverviewNoBillingAccountsComponent,
    {
      globals: { brand },
    }: {
      globals: { brand: string };
    }
  ) => ({
    props: {
      ...args,
      isTelenetCustomer: brand === 'telenet',
    },
  }),
  args: {},
};
