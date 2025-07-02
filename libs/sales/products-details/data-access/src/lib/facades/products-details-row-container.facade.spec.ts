import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import {
  selectIsFixedTelephoneRowVisible,
  selectIsInternetRowVisible,
  selectIsMobileRowVisible,
  selectIsTvFlowRowVisible,
  selectIsTvIconicRowVisible,
} from '../+state/products-details.selectors';
import { ProductsDetailsState } from '../+state/products-details.reducers';
import { ProductsDetailsRowContainerFacade } from './products-details-row-container.facade';

describe('ProductsDetailsRowContainerFacade', () => {
  let facade: ProductsDetailsRowContainerFacade;
  let store$: MockStore<ProductsDetailsState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(ProductsDetailsRowContainerFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    describe('isInternetRowVisible$', () => {
      it('should select isInternetRowVisible', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectIsInternetRowVisible, expected);

        const result$: Observable<boolean> = facade.isInternetRowVisible$;

        result$.subscribe((actual: boolean) => {
          expect(actual).toEqual(expected);
        });
        tick();
      }));
    });

    describe('isTvIconicRowVisible$', () => {
      it('should select isTvIconicRowVisible', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectIsTvIconicRowVisible, expected);

        const result$: Observable<boolean> = facade.isTvIconicRowVisible$;

        result$.subscribe((actual: boolean) => {
          expect(actual).toEqual(expected);
        });
        tick();
      }));
    });

    describe('isTvFlowRowVisible$', () => {
      it('should select isTvFlowRowVisible', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectIsTvFlowRowVisible, expected);

        const result$: Observable<boolean> = facade.isTvFlowRowVisible$;

        result$.subscribe((actual: boolean) => {
          expect(actual).toEqual(expected);
        });
        tick();
      }));
    });

    describe('isMobileRowVisible$', () => {
      it('should select isMobileRowVisible', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectIsMobileRowVisible, expected);

        const result$: Observable<boolean> = facade.isMobileRowVisible$;

        result$.subscribe((actual: boolean) => {
          expect(actual).toEqual(expected);
        });
        tick();
      }));
    });

    describe('isFixedTelephoneRowVisible$', () => {
      it('should select isFixedTelephoneRowVisible', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectIsFixedTelephoneRowVisible, expected);

        const result$: Observable<boolean> = facade.isFixedTelephoneRowVisible$;

        result$.subscribe((actual: boolean) => {
          expect(actual).toEqual(expected);
        });
        tick();
      }));
    });
  });
});
