import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { applicationConfig, Meta } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { InboxMessagesOverviewComponent } from '@inbox-messages/feat-inbox-messages-overview';

import inboxMessagesOverviewMock from '../../mock/inbox-messages-overview-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'Inbox Messages/Components/Inbox messages overview',
  component: InboxMessagesOverviewComponent,
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
    mockData: [userDetailsMock, inboxMessagesOverviewMock],
  },
} as Meta<InboxMessagesOverviewComponent>;

export const Primary = {
  render: (args: InboxMessagesOverviewComponent) => ({
    props: args,
  }),
};
