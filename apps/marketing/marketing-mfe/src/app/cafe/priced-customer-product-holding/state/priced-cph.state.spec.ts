import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { PricedCphState } from './priced-cph.state';
import { ProductHoldingAdaptorService } from '../../../http/cafe/product-holding/services/product-holding-adaptor.service';
import { PricedCphService } from '../service/priced-cph.service';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import { Initialize, SetLoginDetails, SetNotificationIfNotSet, SetOverview } from './priced-cph.actions';
import { PricedCphStateModel } from './priced-cph-state.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeBillsService } from '../../../http/cafe/bills/services/cafe-bills.service';
import { ProductHolding } from '../../../http/cafe/product-holding/models/product-holding.model';
import { BackendErrorNotification } from '../model/backend-error.notification';
import { NoManagerNotification } from '../model/no-manager.notification';
import { PricedCphOverview } from '../model/priced-cph-data.model';
import { Log, LogFactory } from '@telenet/ng-lib-shared';
import { take } from 'rxjs/operators';

describe('PricedCphState', function () {
  let store: Store;
  let loginService: LoginService;
  let productHoldingService: ProductHoldingAdaptorService;
  let pricedCphService: PricedCphService;
  let billsService: CafeBillsService;
  let log: Log;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        ProductHoldingAdaptorService,
        PricedCphService,
        CafeBillsService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([PricedCphState])],
    });
    jest.spyOn(console, 'error').mockImplementation(jest.fn);
    log = {} as Log;
    log.logDebug = jest.fn();
    LogFactory.createLogger = jest.fn().mockReturnValue(log);
  });

  beforeEach(() => {
    loginService = TestBed.inject(LoginService);
    pricedCphService = TestBed.inject(PricedCphService);
    productHoldingService = TestBed.inject(ProductHoldingAdaptorService);
    billsService = TestBed.inject(CafeBillsService);

    store = TestBed.inject(Store);
  });

  describe('initialise', () => {
    let loginDetails: LoginDetails;

    describe('error handling', () => {
      it('should have empty overview if login fails', (done) => {
        loginDetails = new LoginDetails(401);
        loginService.getLoginDetails = jest.fn().mockReturnValue(of(loginDetails));
        pricedCphService.getOverview = jest.fn().mockReturnValue([]);
        productHoldingService.getCustomerProductHolding = jest.fn();
        billsService.getBills = jest.fn();

        store.dispatch(new Initialize());

        expect(loginService.getLoginDetails).toHaveBeenCalled();
        expect(pricedCphService.getOverview).toHaveBeenCalled();
        expect(productHoldingService.getCustomerProductHolding).not.toHaveBeenCalled();
        expect(billsService.getBills).not.toHaveBeenCalled();

        store
          .selectOnce(PricedCphState)
          .pipe(take(1))
          .subscribe((state: PricedCphStateModel) => {
            expect(state.overview).toEqual([]);
            expect(state.notification).toBeUndefined();
            done();
          });
      });

      describe('login succeeds', function () {
        beforeEach(() => {
          pricedCphService.getOverview = jest.fn().mockReturnValue([]);
          productHoldingService.getCustomerProductHolding = jest.fn().mockReturnValue(of(new ProductHolding()));
        });
        describe('member', function () {
          beforeEach(() => {
            loginDetails = new LoginDetails(200);
            loginService.getLoginDetails = jest.fn().mockReturnValue(of(loginDetails));
          });

          it('should have empty overview if no products and should not call bills if not manager', (done) => {
            billsService.getBills = jest.fn();

            store.dispatch(new Initialize());

            expect(loginService.getLoginDetails).toHaveBeenCalled();
            expect(pricedCphService.getOverview).toHaveBeenCalled();
            expect(productHoldingService.getCustomerProductHolding).toHaveBeenCalled();
            expect(billsService.getBills).not.toHaveBeenCalled();

            store
              .selectOnce(PricedCphState)
              .pipe(take(1))
              .subscribe((state: PricedCphStateModel) => {
                expect(state.overview).toEqual([]);
                expect(state.notification).toBeUndefined();
                done();
              });
          });
        });
        describe('manager', function () {
          beforeEach(() => {
            loginDetails = new LoginDetails(200);
            loginDetails.role = 'MANAGER';
            loginService.getLoginDetails = jest.fn().mockReturnValue(of(loginDetails));
          });

          it('should have empty overview if no products and should call bills if manager', (done) => {
            billsService.getBills = jest.fn().mockReturnValue(of([]));
            pricedCphService.getOverview = jest.fn().mockReturnValue([]);
            store.dispatch(new Initialize());

            expect(loginService.getLoginDetails).toHaveBeenCalled();
            expect(pricedCphService.getOverview).toHaveBeenCalled();
            expect(productHoldingService.getCustomerProductHolding).toHaveBeenCalled();
            expect(billsService.getBills).toHaveBeenCalled();

            store
              .selectOnce(PricedCphState)
              .pipe(take(1))
              .subscribe((state: PricedCphStateModel) => {
                expect(state.overview).toEqual([]);
                expect(state.notification).toBeUndefined();
                done();
              });
          });

          it('should have notification error if something goes wrong', (done) => {
            billsService.getBills = jest.fn().mockReturnValue(of([]));
            pricedCphService.getOverview = () => {
              throw new Error('oops something is wrong');
            };
            store.dispatch(new Initialize());
            store
              .selectOnce(PricedCphState)
              .pipe(take(1))
              .subscribe((state: PricedCphStateModel) => {
                expect(state.notification).toEqual(new BackendErrorNotification());
                expect(state.overview).toBeUndefined();
                done();
              });
          });
        });
      });
    });
  });

  describe('SetNotificationIfNotSet', function () {
    const backendErrorNotification = new BackendErrorNotification();
    const noManagerNotification = new NoManagerNotification();

    it('should set notification if notification in store is undefined', function () {
      store.reset({ notification: undefined } as PricedCphStateModel);

      store.dispatch(new SetNotificationIfNotSet(backendErrorNotification)).subscribe(() => {
        expect(store.selectSnapshot(PricedCphState.notification)).toEqual(backendErrorNotification);
      });
    });
    it('should not set notification if notification in store is already set', function () {
      store.reset({ notification: noManagerNotification } as PricedCphStateModel);

      store.dispatch(new SetNotificationIfNotSet(backendErrorNotification)).subscribe(() => {
        expect(store.selectSnapshot(PricedCphState.notification)).toEqual(noManagerNotification);
      });
    });
  });

  describe('SetOverview', function () {
    const overview = [{ products: [], options: [], lastBillPrice: '55' } as PricedCphOverview];
    it('should set overview on state', function () {
      store.reset({ overview: [] });

      store.dispatch(new SetOverview(overview)).subscribe(() => {
        expect(store.selectSnapshot(PricedCphState.overview)).toEqual(overview);
      });
    });
  });

  describe('LoginDetails', function () {
    it('should set login details on state', function () {
      const loginDetails = {} as LoginDetails;
      loginDetails.isLoggedIn = jest.fn().mockReturnValue(true);
      loginDetails.role = 'MANAGER';
      store.reset({ loginDetails: undefined } as PricedCphStateModel);

      store.dispatch(new SetLoginDetails(loginDetails)).subscribe(() => {
        expect(store.selectSnapshot(PricedCphState.loginDetails)).toEqual(loginDetails);
      });
    });
    it('should return true if login details isLoggedIn is true', function () {
      const loginDetails = {} as LoginDetails;
      loginDetails.isLoggedIn = jest.fn().mockReturnValue(true);
      store.dispatch(new SetLoginDetails(loginDetails)).subscribe(() => {
        expect(store.selectSnapshot(PricedCphState.isLoggedIn)).toEqual(true);
      });
    });
    it('should return false if login details isLoggedIn is false', function () {
      const loginDetails = {} as LoginDetails;
      loginDetails.isLoggedIn = jest.fn().mockReturnValue(false);
      store.dispatch(new SetLoginDetails(loginDetails)).subscribe(() => {
        expect(store.selectSnapshot(PricedCphState.isLoggedIn)).toEqual(false);
      });
    });
  });
});
