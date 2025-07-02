import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { MockProvider } from 'ng-mocks';
import { Address, BillingFrequency } from '../entities/product-price-change';
import {
  loadProductPriceChangesFailure,
  loadProductPriceChangesSuccess,
  selectBillingAccount,
  setAuthentication,
} from './product-price-changes.actions';
import { ProductPriceChangesDatalayerEffects } from './product-price-changes-datalayer.effects';
import { ProductPriceChangesDatalayerService } from '../services/product-price-changes-datalayer.service';

describe('ProductPriceChangesDatalayerEffects', () => {
  let effects: ProductPriceChangesDatalayerEffects;
  let actions$: Actions;
  let productPriceChangesDatalayerService: ProductPriceChangesDatalayerService;
  const accountNumber = '12345';
  const productPriceChanges = [
    {
      accountNumber,
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
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductPriceChangesDatalayerEffects,
        MockProvider(ProductPriceChangesDatalayerService),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(ProductPriceChangesDatalayerEffects);
    productPriceChangesDatalayerService = TestBed.inject(ProductPriceChangesDatalayerService);
  });

  describe('productPriceChangesLoaded$', () => {
    it('should trigger sendSelectProductPriceChange', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendSelectProductPriceChange');
      actions$ = new Actions(
        of(
          loadProductPriceChangesSuccess({
            productPriceChanges,
          })
        )
      );
      effects.productPriceChangesLoaded$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendSelectProductPriceChange).toHaveBeenCalledWith(
          productPriceChanges[0].productPriceChanges[0]
        );
        done();
      });
    });

    it('should trigger sendSelectProductPriceChange with undefined', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendSelectProductPriceChange');
      actions$ = new Actions(
        of(
          loadProductPriceChangesSuccess({
            productPriceChanges: [],
          })
        )
      );
      effects.productPriceChangesLoaded$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendSelectProductPriceChange).toHaveBeenCalledWith(undefined);
        done();
      });
    });

    it('should trigger sendSelectProductPriceChange with undefined', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendSelectProductPriceChange');
      actions$ = new Actions(
        of(
          loadProductPriceChangesSuccess({
            productPriceChanges: [...productPriceChanges, ...productPriceChanges],
          })
        )
      );
      effects.productPriceChangesLoaded$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendSelectProductPriceChange).toHaveBeenCalledWith(
          productPriceChanges[0].productPriceChanges[0]
        );
        done();
      });
    });
  });

  describe('productPriceChangesNotLoaded$', () => {
    it('should trigger sendDataLayerEventWithAttributes', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendImpression');
      actions$ = new Actions(
        of(
          loadProductPriceChangesFailure({
            error: 'error',
            status: 403,
          })
        )
      );
      effects.productPriceChangesNotLoaded$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendImpression).toHaveBeenCalledWith(
          ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME,
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LIMITED_ACCESS
        );
        done();
      });
    });

    it('should not trigger sendDataLayerEventWithAttributes', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendImpression');
      actions$ = new Actions(
        of(
          loadProductPriceChangesFailure({
            error: 'error',
            status: 400,
          })
        )
      );
      effects.productPriceChangesNotLoaded$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendImpression).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('selectBillingAccount$', () => {
    it('should trigger sendSelectProductPriceChange', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendSelectProductPriceChange');
      actions$ = new Actions(
        of(
          selectBillingAccount({
            selectedBillingAccount: accountNumber,
          }),
          loadProductPriceChangesSuccess({
            productPriceChanges,
          })
        )
      );
      effects.selectBillingAccount$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendSelectProductPriceChange).toHaveBeenCalledWith(
          productPriceChanges[0].productPriceChanges[0]
        );
        done();
      });
    });

    it('should not trigger sendSelectProductPriceChange', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendSelectProductPriceChange');
      actions$ = new Actions(
        of(
          selectBillingAccount({
            selectedBillingAccount: accountNumber,
          }),
          loadProductPriceChangesSuccess({
            productPriceChanges: [],
          })
        )
      );
      effects.selectBillingAccount$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendSelectProductPriceChange).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('inPageLoginShown$', () => {
    it('should trigger sendImpression', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendImpression');
      actions$ = new Actions(of(setAuthentication({ isAuthenticated: false, customLogin: false })));
      effects.inPageLoginShown$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendImpression).toHaveBeenCalledWith(
          ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME,
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN
        );
        done();
      });
    });

    it('should not trigger sendImpression', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendImpression');
      actions$ = new Actions(of(setAuthentication({ isAuthenticated: true, customLogin: false })));
      effects.inPageLoginShown$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendImpression).not.toHaveBeenCalled();
        done();
      });
    });

    it('should trigger sendClick', (done) => {
      jest.spyOn(productPriceChangesDatalayerService, 'sendClick');
      actions$ = new Actions(of(setAuthentication({ isAuthenticated: true, customLogin: true })));

      effects.inPageLoginShown$.subscribe(() => {
        expect(productPriceChangesDatalayerService.sendClick).toHaveBeenCalledWith(
          ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME,
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN
        );
        done();
      });
    });
  });
});
