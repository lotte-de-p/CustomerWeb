import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { applicationConfig, Meta } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ProfileOverviewComponent } from '@profile-management/profile-overview/feat-profile-overview';

import userDetailsMock from '../../mock/userdetails-mock.json';
import profileOverviewMock from '../../mock/profile-overview-mock.json';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

const defaultPageUrl = '/content/www-telenet-touch/nl/default-page';

export default {
  title: 'ProfileOverview/Components/profile overview',
  component: ProfileOverviewComponent,
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
    mockData: [userDetailsMock, profileOverviewMock],
  },
} as Meta<ProfileOverviewComponent>;

export const Primary = {
  render: (args: ProfileOverviewComponent) => ({
    props: args,
  }),
  args: {
    profileOverviewUrls: {
      manageSocialLoginUrl: defaultPageUrl,
      wifiPasswordUrl: defaultPageUrl,
      memberMoreInfoLink: defaultPageUrl,
      invoiceSettingsUrl: defaultPageUrl,
      easySwitchUrl: defaultPageUrl,
      loginPasswordUrl: defaultPageUrl,
      connectedServicesUrl: defaultPageUrl,
      simManagementPageUrl: defaultPageUrl,
      privacySettingsUrl: defaultPageUrl,
      managePersonalDataUrl: defaultPageUrl,
      manageUsersUrl: defaultPageUrl,
    },
  },
};
