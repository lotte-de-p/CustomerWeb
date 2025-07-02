import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { ProductsDetailsOrderFacade } from './products-details-order.facade';
import { SalesOffer } from '@sales/shared/data-access';
import { selectSalesOffer } from '../+state/products-details.selectors';
import { ProductsDetailsState } from '../+state/products-details.reducers';
import { order, updateHumanCheckoutUrl, updateSalesCheckoutUrl } from '../+state/products-details.actions';

describe('ProductsDetailsOrderFacade', () => {
  let facade: ProductsDetailsOrderFacade;
  let store$: MockStore<ProductsDetailsState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(ProductsDetailsOrderFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    describe('salesOffer$', () => {
      it('should select salesOffer', fakeAsync(() => {
        const expected: SalesOffer = {
          price: 10,
          promo: null,
        };
        store$.overrideSelector(selectSalesOffer, expected);

        const result$: Observable<SalesOffer | undefined> = facade.salesOffer$;

        result$.subscribe((actual: SalesOffer | undefined) => {
          expect(actual).toEqual(expected);
        });
        tick();
      }));
    });
  });

  describe('dispatch', () => {
    beforeEach(() => {
      jest.spyOn(store$, 'dispatch');
    });

    describe('updateSalesCheckoutUrl', () => {
      it('should dispatch updateSalesCheckoutUrl', () => {
        const salesCheckoutUrl = 'url';

        facade.updateSalesCheckoutUrl(salesCheckoutUrl);

        expect(store$.dispatch).toHaveBeenCalledWith(updateSalesCheckoutUrl({ salesCheckoutUrl }));
      });
    });

    describe('updateHumanCheckoutUrl', () => {
      it('should dispatch updateHumanCheckoutUrl', () => {
        const humanCheckoutUrl = 'url';

        facade.updateHumanCheckoutUrl(humanCheckoutUrl);

        expect(store$.dispatch).toHaveBeenCalledWith(updateHumanCheckoutUrl({ humanCheckoutUrl }));
      });
    });

    describe('order', () => {
      it('should dispatch order', () => {
        facade.order();

        expect(store$.dispatch).toHaveBeenCalledWith(order());
      });
    });
  });
});
