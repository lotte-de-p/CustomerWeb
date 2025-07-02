import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { inboxMessagesReducer, unreadInboxMessagesReducer } from './inbox-messages.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InboxMessagesEffects } from './inbox-messages.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('inboxMessagesFeature', inboxMessagesReducer),
    StoreModule.forFeature('unreadInboxMessagesFeature', unreadInboxMessagesReducer),
    EffectsModule.forFeature([InboxMessagesEffects]),
  ],
})
export class InboxMessagesNgrxModule {}
