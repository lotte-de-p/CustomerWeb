import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Address, BillingFrequency } from './entities/product-price-change';
import { ProductPriceChangesFacade } from './product-price-changes.facade';
import {
  selectBillingAccount,
  validateAuthentication,
  validateCustomAuthentication,
} from './+state/product-price-changes.actions';
import { PRODUCT_PRICE_CHANGES_FEATURE_KEY } from './+state/product-price-changes.reducers';

describe('ProductPriceChangesFacade', () => {
  let store$: MockStore;
  let productPriceChangesFacade: ProductPriceChangesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductPriceChangesFacade, provideMockStore()],
    });
    store$ = TestBed.inject(MockStore);
    productPriceChangesFacade = TestBed.inject(ProductPriceChangesFacade);

    jest.spyOn(store$, 'select');
    jest.spyOn(store$, 'dispatch');
  });

  it('validateAuthentication', () => {
    productPriceChangesFacade.validateAuthentication();
    expect(store$.dispatch).toHaveBeenCalledWith(validateAuthentication());
  });

  it('login', () => {
    productPriceChangesFacade.login({
      lastName: 'lastname',
      customerNumber: 'customernumber',
    });
    expect(store$.dispatch).toHaveBeenCalledWith(
      validateCustomAuthentication({
        lastName: 'lastname',
        customerNumber: 'customernumber',
      })
    );
  });

  it('selectBillingAccount', () => {
    productPriceChangesFacade.selectBillingAccount('12345');
    expect(store$.dispatch).toHaveBeenCalledWith(
      selectBillingAccount({
        selectedBillingAccount: '12345',
      })
    );
  });

  it('billingAccounts$', (done) => {
    const productPriceChanges = [
      {
        accountNumber: '123456',
        productPriceChanges: [
          {
            address: {
              addressId: 'addressId',
            } as Address,
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
    store$.setState({
      [PRODUCT_PRICE_CHANGES_FEATURE_KEY]: {
        productPriceChanges,
      },
    });

    productPriceChangesFacade.billingAccounts$.subscribe((billingAccounts) => {
      expect(billingAccounts).toEqual(['123456']);
      done();
    });
  });
});
