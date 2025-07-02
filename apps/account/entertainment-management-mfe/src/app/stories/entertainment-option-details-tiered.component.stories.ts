import { importProvidersFrom } from '@angular/core';
import { EntertainmentManagementTieredListComponent } from '@entertainment-management/feat-entertainment-management-option-details';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig, moduleMetadata } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { CommonModule, DatePipe } from '@angular/common';
import userDetailsMock from '../../mock/userdetails-mock.json';
import entertainmentOptionsTiered from '../../mock/entertainment-option-details-tiered.json';
import { RouterModule } from '@angular/router';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

function getTranslations() {
  const globals = new URLSearchParams(window.location.search).get('globals');
  const teleEnv = globals
    ?.split(';')
    .find((param) => param.startsWith('environment'))
    ?.split(':')[1];
  if (teleEnv) {
    return window['pageLocaleData'].bundle;
  }
}

export default {
  title: 'Entertainment Management Option Details',
  component: EntertainmentManagementTieredListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        RouterModule,
        TgTranslateTestingModule.forRoot({
          translations: getTranslations(),
        }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        DatePipe,
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
  parameters: {
    mockData: [userDetailsMock],
  },
} as Meta<EntertainmentManagementTieredListComponent>;

export const TieredOptions = {
  render: (args: EntertainmentManagementTieredListComponent) => ({
    props: args,
  }),
  args: {
    data: entertainmentOptionsTiered,
  },
};
