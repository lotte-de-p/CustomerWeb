import { Notification, NotificationTypeEnum } from './notification.model';
import { Observable, of } from 'rxjs';

export class BackendErrorNotification implements Notification {
  type = NotificationTypeEnum.ERROR;
  labelKey = 'general';

  shouldShow(): Observable<boolean> {
    return of(false);
  }
}
