import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PayByMobileSubscriptionComponent } from './pay-by-mobile-subscription.component';
import { provideHttpClient } from '@angular/common/http';

import companyDetailsMock from '../../../mock/company-mock.json';
import userDetailsMock from '../../../mock/userdetails-mock.json';

export default {
  title: 'PayByMobile/dumb/ui/Subscription',
  component: PayByMobileSubscriptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.pay-by-mobile.lbl.recurring-day': 'day',
            'ng.pay-by-mobile.subscription.title': 'Subscription',
            'ng.pay-by-mobile.transaction.company.name': 'Company',
            'ng.pay-by-mobile.transaction.company.email': 'Email',
            'ng.pay-by-mobile.lbl.recurring': 'Renewed after',
            'ng.pay-by-mobile.lbl.recurring-days': 'days',
            'ng.pay-by-mobile.subscription.cancel.dismiss': 'No, Keep it',
            'ng.pay-by-mobile.subscription.cancel.confirm': 'Yes, cancel',
            'ng.pay-by-mobile.btn.stop-subscription': 'Stop Subscription',
            'ng.pay-by-mobile.transaction.company.support': 'Support',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }, provideHttpClient()],
    }),
  ],
  parameters: {},
} as Meta<PayByMobileSubscriptionComponent>;

const SERVICE_NAME = 'Service Name';
export const SubscriptionRecurring = {
  render: (args: PayByMobileSubscriptionComponent) => ({
    props: args,
  }),
  args: {
    subscription: {
      serviceName: SERVICE_NAME,
      companyId: 1,
      recurring: true,
      renewalPeriod: {
        period: 1,
        units: 'days',
      },
      startDate: '2021-09-01',
      endDate: '2021-10-01',
      price: 12.5,
      priceUnit: 'EUR',
      serviceTranslation: {
        en: 'Service Name EN',
        nl: 'Service Name NL',
        fr: 'Service Name FR',
      },
      status: 'ACTIVE',
    },
  },
  parameters: {
    mockData: [userDetailsMock, companyDetailsMock],
  },
};

export const SubscriptionNonRecurring = {
  render: (args: PayByMobileSubscriptionComponent) => ({
    props: args,
  }),
  args: {
    subscription: {
      serviceName: SERVICE_NAME,
      companyId: 1,
      recurring: false,
      renewalPeriod: {
        period: 1,
        units: 'days',
      },
      startDate: '2021-09-01',
      endDate: '2021-10-01',
      price: 12.5,
      priceUnit: 'EUR',
      serviceTranslation: {
        en: SERVICE_NAME,
        nl: SERVICE_NAME,
        fr: SERVICE_NAME,
      },
      status: 'ACTIVE',
    },
  },
  parameters: {
    mockData: [userDetailsMock, companyDetailsMock],
  },
};
