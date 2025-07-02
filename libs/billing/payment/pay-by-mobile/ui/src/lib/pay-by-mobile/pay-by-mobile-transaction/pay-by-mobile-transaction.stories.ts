import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PayByMobileTransactionComponent } from './pay-by-mobile-transaction.component';
import { provideHttpClient } from '@angular/common/http';

import companyDetailsMock from '../../../mock/company-mock.json';
import userDetailsMock from '../../../mock/userdetails-mock.json';

export default {
  title: 'PayByMobile/dumb/ui/Transaction',
  component: PayByMobileTransactionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.pay-by-mobile.transaction.title': 'Transaction',
            'ng.pay-by-mobile.transaction.company.name': 'Company',
            'ng.pay-by-mobile.transaction.company.email': 'Email',
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
} as Meta<PayByMobileTransactionComponent>;

export const Transaction = {
  render: (args: PayByMobileTransactionComponent) => ({
    props: args,
  }),
  args: {
    transaction: {
      serviceName: 'Service Name',
      companyId: 1,
      date: new Date(),
      price: '10.5',
      priceUnit: 'EUR',
      description: 'Transaction description',
      serviceTranslation: {
        nl: 'Service Naam',
        en: 'Service Name',
        fr: 'Service Nom',
      },
    },
  },
  parameters: {
    mockData: [userDetailsMock, companyDetailsMock],
  },
};
