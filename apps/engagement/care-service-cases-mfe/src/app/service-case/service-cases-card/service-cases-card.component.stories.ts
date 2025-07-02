import { applicationConfig, Meta } from '@storybook/angular';
import { ServiceCasesCardComponent } from './service-cases-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

import serviceCasesMock from '../../../mock/service-cases-mock.json';
import serviceCasesOdataMock from '../../../mock/service-cases-odata-mock.json';
import oneServiceCaseMock from '../../../mock/one-service-case-mock.json';
import oneServiceCaseOdataMock from '../../../mock/one-service-case-odata-mock.json';
import noServiceCasesMock from '../../../mock/no-service-cases-mock.json';
import noServiceCasesOdataMock from '../../../mock/no-service-cases-odata-mock.json';
import userDetailsMock from '../../../mock/userdetails-mock.json';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Service Cases/Components/Service case card',
  component: ServiceCasesCardComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(
          TgTranslateTestingModule.forRoot({
            translations: require('../../../assets/i18n/en.json'),
          })
        ),
        provideHttpClient(),
      ],
    }),
  ],
} as Meta<ServiceCasesCardComponent>;

export const OpenCases = {
  render: (args: ServiceCasesCardComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [serviceCasesMock, serviceCasesOdataMock, userDetailsMock],
  },
};

export const OneOpenCase = {
  render: (args: ServiceCasesCardComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [oneServiceCaseMock, oneServiceCaseOdataMock, userDetailsMock],
  },
};

export const NoOpenCases = {
  render: (args: ServiceCasesCardComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [noServiceCasesMock, noServiceCasesOdataMock, userDetailsMock],
  },
};
