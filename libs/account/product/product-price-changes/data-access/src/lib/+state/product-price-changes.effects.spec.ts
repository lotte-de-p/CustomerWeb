import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { of, take, throwError } from 'rxjs';
import { MockProvider } from 'ng-mocks';
import { ProductPriceChangesEffects } from './product-price-changes.effects';
import { ProductPriceChangesService } from '../services/product-price-changes.service';
import { MessageService } from '@telenet/ng-lib-message';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import {
  Address,
  BillingFrequency,
  ProductPriceChange,
  ProductPriceChangesByAccount,
} from '../entities/product-price-change';
import {
  loadProductPriceChanges,
  loadProductPriceChangesSuccess,
  selectBillingAccount,
  setAuthentication,
  validateAuthentication,
  validateCustomAuthentication,
} from './product-price-changes.actions';
import { HttpErrorResponse } from '@angular/common/http';

const SET_AUTHENTICATION_ACTION = '[product-price-changes] setAuthentication';
describe('ProductPriceChangesEffects', () => {
  let effects: ProductPriceChangesEffects;
  let actions$: Actions;
  let productPriceChangesService: ProductPriceChangesService;
  let messageService: MessageService;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductPriceChangesEffects,
        MockProvider(ProductPriceChangesService),
        MockProvider(MessageService),
        MockProvider(LoginService),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(ProductPriceChangesEffects);
    productPriceChangesService = TestBed.inject(ProductPriceChangesService);
    messageService = TestBed.inject(MessageService);
    loginService = TestBed.inject(LoginService);
    jest.spyOn(messageService, 'clearMessages');
    jest.spyOn(loginService, 'getLoginDetails');
  });

  describe('setAuthentication$', () => {
    it('should trigger loadProductPriceChanges', (done) => {
      jest.spyOn(productPriceChangesService, 'getProductPriceChanges').mockReturnValue(
        of([
          {
            accountNumber: '123456',
            productPriceChanges: [
              {
                address: { addressId: 'addressId' } as Address,
                billingFrequency: BillingFrequency.MONTHLY,
                priceChange: 123.45,
                segment: 'segment',
                products: [],
                vatInclusive: true,
                priceAccordingToConsumption: true,
              },
            ],
          },
        ])
      );
      actions$ = new Actions(of(setAuthentication({ isAuthenticated: true, customLogin: false })));
      effects.setAuthentication$.subscribe((action: { type: string }) => {
        expect(action.type).toBe('[product-price-changes] loadProductPriceChanges');
        done();
      });
    });

    it('should not trigger loadProductPriceChanges', () => {
      jest.spyOn(productPriceChangesService, 'getProductPriceChanges');
      actions$ = new Actions(of(setAuthentication({ isAuthenticated: false, customLogin: false })));
      expect(productPriceChangesService.getProductPriceChanges).not.toHaveBeenCalled();
    });
  });

  describe('loadProductPriceChanges$', () => {
    it('should trigger loadProductPriceChangesSuccess', (done) => {
      jest.spyOn(productPriceChangesService, 'getProductPriceChanges').mockReturnValueOnce(
        of([
          {
            accountNumber: '123456',
            productPriceChanges: [
              {
                address: { addressId: 'addressId' } as Address,
                billingFrequency: BillingFrequency.MONTHLY,
                priceChange: 123.45,
                segment: 'segment',
                products: [],
                vatInclusive: true,
                priceAccordingToConsumption: true,
              },
            ],
          },
        ])
      );
      actions$ = new Actions(of(loadProductPriceChanges()));
      effects.loadProductPriceChanges$.subscribe(
        (action: Partial<{ type: string; productPriceChanges: ProductPriceChangesByAccount[] }>) => {
          expect(action.type).toBe('[product-price-changes] loadProductPriceChangesSuccess');
          expect(action.productPriceChanges).toEqual([
            {
              accountNumber: '123456',
              productPriceChanges: [
                {
                  address: { addressId: 'addressId' } as Address,
                  billingFrequency: BillingFrequency.MONTHLY,
                  priceChange: 123.45,
                  segment: 'segment',
                  products: [],
                  vatInclusive: true,
                  priceAccordingToConsumption: true,
                },
              ],
            },
          ]);
          expect(productPriceChangesService.getProductPriceChanges).toHaveBeenCalled();
          expect(messageService.clearMessages).toHaveBeenCalledWith(ProductPriceChangesService.MESSAGE_GROUP);
          done();
        }
      );
    });

    it('should not trigger loadProductPriceChangesSuccess', (done) => {
      jest.spyOn(productPriceChangesService, 'getProductPriceChanges').mockReturnValueOnce(
        throwError(
          () =>
            new HttpErrorResponse({
              error: 'error',
            })
        )
      );
      actions$ = new Actions(of(loadProductPriceChanges()));
      effects.loadProductPriceChanges$.pipe(take(1)).subscribe((action: Partial<{ type: string; error: string }>) => {
        expect(action.type).toBe('[product-price-changes] loadProductPriceChangesFailure');
        expect(action.error).toBeTruthy();
        expect(productPriceChangesService.getProductPriceChanges).toHaveBeenCalled();
        expect(messageService.clearMessages).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('validateCustomAuthentication$', () => {
    it('should trigger setAuthentication', (done) => {
      jest.spyOn(productPriceChangesService, 'login').mockReturnValueOnce(of({} as LoginDetails));
      actions$ = new Actions(
        of(
          validateCustomAuthentication({
            customerNumber: 'customernumber',
            lastName: 'lastname',
          })
        )
      );
      effects.validateCustomAuthentication$.subscribe((action: Partial<{ type: string; isAuthenticated: boolean }>) => {
        expect(action.type).toBe(SET_AUTHENTICATION_ACTION);
        expect(action.isAuthenticated).toBe(true);
        expect(productPriceChangesService.login).toHaveBeenCalledWith({
          customerNumber: 'customernumber',
          lastName: 'lastname',
          type: '[product-price-changes] validateCustomAuthentication',
        });
        expect(messageService.clearMessages).toHaveBeenCalledWith(ProductPriceChangesService.MESSAGE_GROUP);
        done();
      });
    });

    it('should not trigger setAuthentication', (done) => {
      jest.spyOn(productPriceChangesService, 'login').mockReturnValueOnce(throwError(() => 'error'));
      actions$ = new Actions(
        of(
          validateCustomAuthentication({
            customerNumber: 'customernumber',
            lastName: 'lastname',
          })
        )
      );
      effects.validateCustomAuthentication$.pipe(take(1)).subscribe(
        (
          action: Partial<{
            type: string;
            error: string;
          }>
        ) => {
          expect(action.type).toBe('[product-price-changes] validateCustomAuthenticationFailure');
          expect(action.error).toBe('error');
          expect(productPriceChangesService.login).toHaveBeenCalled();
          expect(messageService.clearMessages).not.toHaveBeenCalled();
          done();
        }
      );
    });
  });

  describe('validateAuthentication$', () => {
    it('should trigger setAuthentication as logged in', (done) => {
      jest.spyOn(loginService, 'getLoginDetails').mockReturnValueOnce(
        of({
          isLoggedIn: () => true,
        } as LoginDetails)
      );
      actions$ = new Actions(of(validateAuthentication()));
      effects.validateAuthentication$.subscribe((action: Partial<{ type: string; isAuthenticated: boolean }>) => {
        expect(action.type).toBe(SET_AUTHENTICATION_ACTION);
        expect(action.isAuthenticated).toBe(true);
        expect(loginService.getLoginDetails).toHaveBeenCalled();
        done();
      });
    });

    it('should trigger setAuthentication as not logged in', (done) => {
      jest.spyOn(loginService, 'getLoginDetails').mockReturnValueOnce(
        of({
          isLoggedIn: () => false,
        } as LoginDetails)
      );
      actions$ = new Actions(of(validateAuthentication()));
      effects.validateAuthentication$.subscribe((action: Partial<{ type: string; isAuthenticated: boolean }>) => {
        expect(action.type).toBe(SET_AUTHENTICATION_ACTION);
        expect(action.isAuthenticated).toBe(false);
        expect(loginService.getLoginDetails).toHaveBeenCalled();
        done();
      });
    });

    it('should not trigger setAuthentication', (done) => {
      jest.spyOn(loginService, 'getLoginDetails').mockReturnValueOnce(throwError(() => 'error'));
      actions$ = new Actions(of(validateAuthentication()));
      effects.validateAuthentication$.pipe(take(1)).subscribe((action: { type: string }) => {
        expect(action.type).toBe('[product-price-changes] loadingFinished');
        expect(loginService.getLoginDetails).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('selectBillingAccount$', () => {
    it('should trigger selectProductPriceChanges', (done) => {
      const selectedBillingAccount = 'accountNumber';
      const productPriceChange: ProductPriceChange = {
        address: { addressId: 'addressId' } as Address,
      } as ProductPriceChange;
      actions$ = new Actions(
        of(
          selectBillingAccount({
            selectedBillingAccount,
          }),
          loadProductPriceChangesSuccess({
            productPriceChanges: [
              {
                accountNumber: selectedBillingAccount,
                productPriceChanges: [productPriceChange],
              },
            ],
          })
        )
      );
      effects.selectBillingAccount$.subscribe(
        (
          action: Partial<{
            type: string;
            selectedProductPriceChanges: ProductPriceChange[];
          }>
        ) => {
          expect(action.type).toBe('[product-price-changes] selectProductPriceChanges');
          expect(action.selectedProductPriceChanges).toEqual([productPriceChange]);
          done();
        }
      );
    });

    it('should trigger selectProductPriceChanges with empty product price changes', (done) => {
      const selectedBillingAccount = 'accountNumber';
      actions$ = new Actions(
        of(
          selectBillingAccount({
            selectedBillingAccount,
          }),
          loadProductPriceChangesSuccess({
            productPriceChanges: [],
          })
        )
      );
      effects.selectBillingAccount$.subscribe(
        (
          action: Partial<{
            type: string;
            selectedProductPriceChanges: ProductPriceChange[];
          }>
        ) => {
          expect(action.type).toBe('[product-price-changes] selectProductPriceChanges');
          expect(action.selectedProductPriceChanges).toEqual([]);
          done();
        }
      );
    });
  });
});
