import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductFinderConfigFacade } from './product-finder-config.facade';
import {
  updateHumanCheckoutUrl,
  updateOneConfiguratorUrl,
  updateProductsDetailsUrl,
  updateSalesCheckoutUrl,
} from '../../+state/product-finder.actions';

describe('ProductFinderConfigFacade', () => {
  let facade: ProductFinderConfigFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(ProductFinderConfigFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('dispatch', () => {
    beforeEach(() => {
      jest.spyOn(store$, 'dispatch');
    });

    it('updateSalesCheckoutUrl should dispatch updateSalesCheckoutUrl', () => {
      const salesCheckoutUrl = 'url';

      facade.updateSalesCheckoutUrl(salesCheckoutUrl);

      expect(store$.dispatch).toHaveBeenCalledWith(updateSalesCheckoutUrl({ salesCheckoutUrl }));
    });

    it('updateHumanCheckoutUrl should dispatch updateHumanCheckoutUrl', () => {
      const humanCheckoutUrl = 'url';

      facade.updateHumanCheckoutUrl(humanCheckoutUrl);

      expect(store$.dispatch).toHaveBeenCalledWith(updateHumanCheckoutUrl({ humanCheckoutUrl }));
    });

    it('updateOneConfiguratorUrl should dispatch updateOneConfiguratorUrl', () => {
      const oneConfiguratorUrl = 'url';

      facade.updateOneConfiguratorUrl(oneConfiguratorUrl);

      expect(store$.dispatch).toHaveBeenCalledWith(updateOneConfiguratorUrl({ oneConfiguratorUrl }));
    });

    it('updateProductsDetailsUrl should dispatch updateProductsDetailsUrl', () => {
      const productsDetailsUrl = 'url';

      facade.updateProductsDetailsUrl(productsDetailsUrl);

      expect(store$.dispatch).toHaveBeenCalledWith(updateProductsDetailsUrl({ productsDetailsUrl }));
    });
  });
});
