import { NoManagerNotification } from './no-manager.notification';
import { Injector } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PricedCphState } from '../state/priced-cph.state';
import { NotificationTypeEnum } from './notification.model';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('NoManagerNotification', function () {
  let notification: NoManagerNotification;
  let injector: Injector;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, Store, { provide: 'Window', useValue: {} }],
      imports: [NgxsModule.forRoot([PricedCphState])],
    });

    notification = new NoManagerNotification();
    injector = TestBed.inject(Injector);
    store = TestBed.inject(Store);
    injector.get = jest.fn().mockReturnValue(store);
  });

  it('should have correct label and type', () => {
    expect(notification.type).toEqual(NotificationTypeEnum.WARNING);
    expect(notification.labelKey).toEqual('no-manager');
  });

  describe('shouldShow', () => {
    it('should return false if data undefined', () => {
      store.selectSnapshot = jest.fn().mockImplementation(function (_param) {
        return undefined;
      });

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBeFalsy();
      });
    });
    it('should return false if customer is a manager', () => {
      store.selectSnapshot = jest.fn().mockImplementation(function (param) {
        if (param === PricedCphState.loginDetails) {
          return {
            hasManagerRole: function () {
              return true;
            },
          } as LoginDetails;
        }

        return {} as LoginDetails;
      });

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBe(false);
      });
    });
    it('should return true if customer is not a manager', () => {
      store.selectSnapshot = jest.fn().mockImplementation(function (param) {
        if (param === PricedCphState.loginDetails) {
          return {
            hasManagerRole: function () {
              return false;
            },
          } as LoginDetails;
        }

        return {} as LoginDetails;
      });

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBe(true);
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
