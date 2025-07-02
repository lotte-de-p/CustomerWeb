import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { inboxMessagesReducer, unreadInboxMessagesReducer } from './+state/inbox-messages.reducer';
import { InboxMessagesEffects } from './+state/inbox-messages.effects';

export function provideInboxMessagesDomain() {
  return [
    importProvidersFrom(StoreModule.forFeature('inboxMessagesFeature', inboxMessagesReducer)),
    importProvidersFrom(StoreModule.forFeature('unreadInboxMessagesFeature', unreadInboxMessagesReducer)),
    importProvidersFrom(EffectsModule.forFeature([InboxMessagesEffects])),
  ];
}
