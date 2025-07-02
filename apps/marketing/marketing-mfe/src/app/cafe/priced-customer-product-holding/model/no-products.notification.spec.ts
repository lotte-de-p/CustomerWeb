import { Injector } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PricedCphState } from '../state/priced-cph.state';
import { NotificationTypeEnum } from './notification.model';
import { NoProductsNotification } from './no-products.notification';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { PricedCphOverview } from './priced-cph-data.model';

describe('NoProductsNotification', function () {
  let notification: NoProductsNotification;
  let injector: Injector;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, Store, { provide: 'Window', useValue: {} }],
      imports: [NgxsModule.forRoot([PricedCphState])],
    });

    notification = new NoProductsNotification();
    injector = TestBed.inject(Injector);
    store = TestBed.inject(Store);
    injector.get = jest.fn().mockReturnValue(store);
  });

  it('should have correct label and type', () => {
    expect(notification.type).toEqual(NotificationTypeEnum.ERROR);
    expect(notification.labelKey).toEqual('no-products');
  });

  describe('shouldShow', () => {
    it('should return false if data undefined', () => {
      store.selectSnapshot = jest.fn().mockImplementation(function (param) {
        if (param === PricedCphState.overview) {
          return undefined;
        }
        return [{} as PricedCphOverview];
      });

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBeTruthy();
      });
    });
    it('should return false if products are available', () => {
      store.selectSnapshot = jest.fn().mockImplementation(function (param) {
        if (param === PricedCphState.overview) {
          return [
            {
              products: [{ key: 'test', amount: 1, specifications: [], weight: 1 }],
              options: [],
            } as PricedCphOverview,
          ];
        }

        return [{} as PricedCphOverview];
      });

      notification.shouldShow(injector).subscribe((shouldShow: boolean) => {
        expect(shouldShow).toBe(false);
      });
    });
    it('should return true if no products are available', () => {
      store.selectSnapshot = jest.fn().mockImplementation(function (param) {
        if (param === PricedCphState.overview) {
          return [
            {
              products: [],
              options: [],
            } as PricedCphOverview,
          ];
        }

        return [{} as PricedCphOverview];
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
