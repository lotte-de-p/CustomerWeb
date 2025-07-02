import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, delay, tap, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { InboxMessagesService } from '../services/inbox-messages.service';
import * as InboxMessagesActions from './inbox-messages.actions';
import { InboxMessagesDatalayerService } from '../services/inbox-messages-datalayer.service';
import { Store } from '@ngrx/store';
import { selectInboxMessages, selectUnreadInboxMessagesCount } from './inbox-messages.selectors';
import { UrlService } from '@telenet/ng-lib-page';

@Injectable()
export class InboxMessagesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly inboxMessagesService: InboxMessagesService,
    private readonly inboxMessagesDatalayerService: InboxMessagesDatalayerService,
    private readonly store: Store,
    private readonly urlService: UrlService
  ) {}

  fetchAllMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InboxMessagesActions.getInboxMessages),
      mergeMap(() =>
        this.inboxMessagesService.getAllInboxMessages().pipe(
          map((inboxMessagesEntries) => InboxMessagesActions.getInboxMessagesSuccess({ inboxMessagesEntries })),
          catchError((error) => of(InboxMessagesActions.getError({ error })))
        )
      )
    )
  );

  deleteMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InboxMessagesActions.deleteInboxMessage),
      mergeMap((action) =>
        this.inboxMessagesService.deleteMessageById(action.message).pipe(
          delay(500),
          withLatestFrom(this.store.select(selectInboxMessages)),
          map(([_, inboxMessagesEntries]) => {
            const { content, id } = action.message;
            const updatedMessages = inboxMessagesEntries?.otherInboxMessages.filter(
              (message) => message.id !== action.message.id
            );
            this.inboxMessagesDatalayerService.sendInboxMessageDeleteEvent(id, content ? content.title : '');

            return InboxMessagesActions.deleteInboxMessageSuccess({
              inboxMessagesEntries: { ...inboxMessagesEntries, otherInboxMessages: updatedMessages },
            });
          }),
          catchError((error) => of(InboxMessagesActions.getError({ error })))
        )
      )
    )
  );

  markAllAsRead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InboxMessagesActions.getInboxMessagesSuccess),
      mergeMap((action) =>
        of(action).pipe(
          filter((action) => !!action.inboxMessagesEntries?.unreadInboxMessages?.length),
          tap((action) => {
            const unreadMessageTitles =
              action.inboxMessagesEntries.unreadInboxMessages?.map((message) => {
                return message.content ? message.content.title : '';
              }) || [];
            if (unreadMessageTitles.length) {
              this.inboxMessagesDatalayerService.sendInboxMessageImpressionEvents(unreadMessageTitles);
            }
          }),
          mergeMap((action) => {
            const unreadMessageIds =
              action.inboxMessagesEntries.unreadInboxMessages?.map((message) => message.id) || [];
            return this.inboxMessagesService.markMessagesAsReadByIds(unreadMessageIds).pipe(
              delay(1000),
              mergeMap(() => [
                InboxMessagesActions.markMessagesAsRead({ ids: unreadMessageIds }),
                InboxMessagesActions.markMessagesAsReadSuccess(),
              ]),
              catchError((error) => of(InboxMessagesActions.markMessagesAsReadError({ error })))
            );
          })
        )
      )
    )
  );

  inboxMessagesUnreadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InboxMessagesActions.getUnreadInboxMessagesCount),
      mergeMap(() =>
        this.inboxMessagesService.getUnreadInboxMessagesCount().pipe(
          map((unreadMessageCount) =>
            InboxMessagesActions.getUnreadInboxMessagesCountSuccess({
              unreadInboxMessagesCount: unreadMessageCount?.amount,
            })
          ),
          catchError((error) => of(InboxMessagesActions.getError({ error })))
        )
      )
    )
  );

  notificationClickedEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(InboxMessagesActions.notificationClicked),
        withLatestFrom(this.store.select(selectUnreadInboxMessagesCount)),
        tap(([action, unreadMessageCount]) => {
          this.inboxMessagesDatalayerService.sendNotificationClickedEvent(action.url, !!unreadMessageCount);
          if (!action?.url) return;
          this.urlService.redirectTo(action.url);
        })
      ),
    { dispatch: false }
  );

  inboxMessageClickedEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(InboxMessagesActions.inboxMessageClicked),
        tap((action) => {
          const { content } = action.message;
          if (content && content.callToAction) {
            const { link, name } = content.callToAction;
            const { title } = content;

            this.inboxMessagesDatalayerService.sendInboxMessageClickedEvent(title, link, name);
            if (!link) return;
            this.urlService.redirectTo(link);
          }
        })
      ),
    { dispatch: false }
  );
}
