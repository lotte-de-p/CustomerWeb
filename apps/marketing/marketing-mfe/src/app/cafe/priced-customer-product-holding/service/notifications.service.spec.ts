import { NotificationsService } from './notifications.service';
import { Notification, NotificationTypeEnum } from '../model/notification.model';
import { Observable, of } from 'rxjs';
import { Injector } from '@angular/core';

export class MockNotification implements Notification {
  labelKey = 'not1';
  type: NotificationTypeEnum;

  shouldShow(): Observable<boolean> {
    return of(false);
  }
}

export class MockNotification2 implements Notification {
  labelKey = 'not2';
  type: NotificationTypeEnum;

  shouldShow(): Observable<boolean> {
    return of(true);
  }
}

describe('NotificationsService', function () {
  let injector: Injector;
  let notificationsService: NotificationsService;

  beforeEach(() => {
    injector = Injector.create({
      providers: [{ provide: NotificationsService, useClass: NotificationsService }],
    });
    notificationsService = new NotificationsService(injector);
  });
  const mockNotification = new MockNotification();
  const mockNotification2 = new MockNotification2();

  describe('notificationsIfConditionsMet$', function () {
    it('should undefined if notification should not be shown', function () {
      notificationsService.notificationsIfConditionsMet$([mockNotification]).subscribe((not) => {
        expect(not).toBeUndefined();
      });
    });
    it('should return notification if shouldShown true', function () {
      mockNotification.shouldShow = jest.fn().mockReturnValue(of(true));
      notificationsService.notificationsIfConditionsMet$([mockNotification]).subscribe((not) => {
        expect(not).toEqual(mockNotification);
      });
    });
    it('should return first notification that should be shown', function () {
      mockNotification.shouldShow = jest.fn().mockReturnValue(of(true));
      notificationsService.notificationsIfConditionsMet$([mockNotification, mockNotification2]).subscribe((not) => {
        expect(not).toEqual(mockNotification);
      });
    });
  });
});
