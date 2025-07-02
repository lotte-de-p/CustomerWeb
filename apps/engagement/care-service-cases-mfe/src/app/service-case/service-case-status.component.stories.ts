import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ServiceCaseStatusComponent } from '@care-service-cases/service-case/ui';
import { Status } from '@care-service-cases/service-case/data-access';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Service Cases/Library/Service case status',
  component: ServiceCaseStatusComponent,
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
      ],
    }),
  ],
  argTypes: {
    status: {
      options: ['OPEN', 'RESOLVED'],
      control: { type: 'radio' },
    },
  },
} as Meta<ServiceCaseStatusComponent>;

export const ServiceCaseStatus = {
  render: (params: { status: Status }) => ({
    props: {
      status: params.status,
    },
  }),
  args: {
    status: 'OPEN',
  },
};
