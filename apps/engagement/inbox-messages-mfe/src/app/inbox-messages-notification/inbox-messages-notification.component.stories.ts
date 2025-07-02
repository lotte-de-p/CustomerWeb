import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { applicationConfig, Meta } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import inboxMessagesNotificationMock from '../../mock/inbox-messages-notification-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import { InboxMessagesNotificationComponent } from '@inbox-messages/feat-inbox-messages-notification';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'Inbox Messages/Components/Inbox messages Notification',
  component: InboxMessagesNotificationComponent,
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
    mockData: [userDetailsMock, inboxMessagesNotificationMock],
  },
} as Meta<InboxMessagesNotificationComponent>;

export const Primary = {
  render: (args: InboxMessagesNotificationComponent) => ({
    props: args,
  }),
  args: {
    inboxOverviewPageUrl: 'https://www2.telenet.be/residential/nl',
  },
};
