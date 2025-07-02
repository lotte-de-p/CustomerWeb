import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { applicationConfig, Meta } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ServiceCaseOverviewComponent } from '@care-service-cases/service-case/feat-service-cases-overview';

import serviceCasesMock from '../../mock/service-cases-mock.json';
import serviceCasesOdataMock from '../../mock/service-cases-odata-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';

const localhost = 'http://localhost:8080';

// @ts-ignore
window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'Service Cases/Components/Service case overview',
  component: ServiceCaseOverviewComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(
          TgTranslateTestingModule.forRoot({
            translations: require('../../assets/i18n/en.json'),
          })
        ),
        provideHttpClient(),
        { provide: LOCALE_ID, useValue: 'en' },
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
  parameters: {
    mockData: [serviceCasesMock, serviceCasesOdataMock, userDetailsMock],
  },
} as Meta<ServiceCaseOverviewComponent>;

export const Primary = {
  render: (args: ServiceCaseOverviewComponent) => ({
    props: args,
  }),
};
