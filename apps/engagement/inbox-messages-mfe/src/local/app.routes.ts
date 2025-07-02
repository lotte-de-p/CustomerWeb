import { Routes } from '@angular/router';
import { InboxMessagesNotificationComponent } from '@inbox-messages/feat-inbox-messages-notification';
import { provideInboxMessagesDomain } from '@inbox-messages/data-access';
import { InboxMessagesOverviewComponent } from '@inbox-messages/feat-inbox-messages-overview';

export const APP_ROUTES: Routes = [
  {
    path: '',
    providers: [provideInboxMessagesDomain()],
    component: InboxMessagesOverviewComponent,
  },
  {
    path: 'inbox-messages-notification',
    providers: [provideInboxMessagesDomain()],
    component: InboxMessagesNotificationComponent,
  },
];
