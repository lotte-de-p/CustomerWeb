import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import {
  selectEnableLoader,
  selectEnableLoaderMask,
  selectProductRecommendationResult,
} from '../../+state/product-finder.selectors';
import { ProductFinderState } from '../../+state/product-finder.reducers';
import { getProductRecommendations, order, resultDetails } from '../../+state/product-finder.actions';
import { ProductRecommendationResult } from '../../entities/results-screen/product-recommendation-result.interface';
import { ResultsScreenFacade } from './results-screen.facade';

describe('ResultsScreenFacade', () => {
  let facade: ResultsScreenFacade;
  let store$: MockStore<ProductFinderState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(ResultsScreenFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    it('enableLoader$', fakeAsync(() => {
      const enableLoader = true;
      store$.overrideSelector(selectEnableLoader, enableLoader);

      const result$: Observable<boolean> = facade.enableLoader$;

      result$.subscribe((actual: boolean) => {
        expect(actual).toEqual(enableLoader);
      });
      tick();
    }));

    it('enableLoaderMask$', fakeAsync(() => {
      const enableLoaderMask = true;
      store$.overrideSelector(selectEnableLoaderMask, enableLoaderMask);

      const result$: Observable<boolean> = facade.enableLoaderMask$;

      result$.subscribe((actual: boolean) => {
        expect(actual).toEqual(enableLoaderMask);
      });
      tick();
    }));

    it('productRecommendationResult$', fakeAsync(() => {
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [],
        mostRecommendedIndex: null,
      };
      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      const result$: Observable<ProductRecommendationResult> = facade.productRecommendationResult$;

      result$.subscribe((actual: ProductRecommendationResult) => {
        expect(actual).toEqual(productRecommendationResult);
      });
      tick();
    }));
  });

  describe('dispatch', () => {
    beforeEach(() => {
      jest.spyOn(store$, 'dispatch');
    });

    it('getProductRecommendations should get the product recommendations', () => {
      facade.getProductRecommendations();

      expect(store$.dispatch).toHaveBeenCalledWith(getProductRecommendations());
    });

    it('order should dispatch order', () => {
      const index = 0;

      facade.order(index);

      expect(store$.dispatch).toHaveBeenCalledWith(order({ index }));
    });

    it('resultDetails should dispatch resultDetails', () => {
      const index = 0;

      facade.resultDetails(index);

      expect(store$.dispatch).toHaveBeenCalledWith(resultDetails({ index }));
    });
  });
});
