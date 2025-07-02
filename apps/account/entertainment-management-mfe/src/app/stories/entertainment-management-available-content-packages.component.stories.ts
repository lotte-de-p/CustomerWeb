import { importProvidersFrom } from '@angular/core';
import { EntertainmentManagementComponent } from '@entertainment-management/feat-entertainment-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig, moduleMetadata } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { CommonModule, DatePipe } from '@angular/common';
import userDetailsMock from '../../mock/userdetails-mock.json';
import entertainmentManagementAvailableContentPackages from '../../mock/entertainment-management-available-content-packages.json';
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
  title: 'Entertainment Management',
  component: EntertainmentManagementComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TgTranslateTestingModule.forRoot({
          translations: getTranslations(),
        }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(RouterModule.forRoot([])),
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
    mockData: [userDetailsMock, entertainmentManagementAvailableContentPackages],
  },
} as Meta<EntertainmentManagementComponent>;

export const AvailableContentPackages = {
  render: (args: EntertainmentManagementComponent) => ({
    props: args,
  }),
  args: {},
};
