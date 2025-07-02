import { Injectable, Injector } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Notification } from '../model/notification.model';
import { filter, map, mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private readonly injector: Injector) {}

  public notificationsIfConditionsMet$(notifications: Notification[]): Observable<Notification> {
    return from(notifications).pipe(
      mergeMap((notification) => {
        return notification.shouldShow(this.injector).pipe(
          filter((shouldShowNotification) => shouldShowNotification),
          map(() => notification)
        );
      }),
      take(1)
    );
  }
}
