import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductsDetailsFacade } from './products-details.facade';
import { Observable } from 'rxjs';
import { Product } from '@sales/shared/data-access';
import { selectProducts } from '../+state/products-details.selectors';
import { OmapiProductTestfactory } from '@telenet/ng-lib-omapi';

describe('ProductsDetailsFacade', () => {
  let facade: ProductsDetailsFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(ProductsDetailsFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('products$', () => {
    it('should select products', fakeAsync(() => {
      const omapiProduct = OmapiProductTestfactory.build({});
      const expected: Product[] = [
        {
          localizedOmapiProductName: omapiProduct.getLocalizedContentNames().nl,
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      store$.overrideSelector(selectProducts, expected);

      const result$: Observable<Product[]> = facade.products$;

      result$.subscribe((actual: Product[]) => {
        expect(actual).toEqual(expected);
      });
      tick();
    }));
  });
});
