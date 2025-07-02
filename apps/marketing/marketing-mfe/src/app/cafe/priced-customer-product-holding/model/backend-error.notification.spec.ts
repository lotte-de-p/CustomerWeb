import { BackendErrorNotification } from './backend-error.notification';
import { NotificationTypeEnum } from './notification.model';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('BackendErrorNotification', () => {
  const notification = new BackendErrorNotification();

  it('should have correct label and type', () => {
    expect(notification.type).toEqual(NotificationTypeEnum.ERROR);
    expect(notification.labelKey).toEqual('general');
  });

  describe('shouldShow', () => {
    it('should return false', function () {
      notification.shouldShow().subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBe(false);
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
