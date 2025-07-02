import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updateInternetUsage } from '../../+state/product-finder.actions';
import {
  selectHasErrorRequireAtLeastOneInternetUsageToBeSelected,
  selectInternetUsage,
} from '../../+state/product-finder.selectors';
import { Observable } from 'rxjs';
import { InternetUsageFacade } from '../internet-usage/internet-usage-facade';
import { InternetUsage } from '../../entities/internet-usage/internet-usage.interface';

describe('InternetUsageFacade', () => {
  let facade: InternetUsageFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(InternetUsageFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    it('internetUsage$', fakeAsync(() => {
      const internetUsage: InternetUsage = {
        selection: ['gaming'],
      };
      store$.overrideSelector(selectInternetUsage, internetUsage);

      const result$: Observable<InternetUsage> = facade.internetUsage$;

      result$.subscribe((actual: InternetUsage) => {
        expect(actual).toEqual(internetUsage);
      });
      tick();
    }));

    describe('hasErrorRequireAtLeastOneInternetUsageToBeSelected$', () => {
      it('should select hasErrorRequireAtLeastOneInternetUsageToBeSelected', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectHasErrorRequireAtLeastOneInternetUsageToBeSelected, expected);

        const result$: Observable<boolean> = facade.hasErrorRequireAtLeastOneInternetUsageToBeSelected$;

        result$.subscribe((actual: boolean) => {
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

    it('updateInternetUsage should update the internetUsage', () => {
      const internetUsage: InternetUsage = {
        selection: ['gaming'],
      };
      facade.updateInternetUsage(internetUsage);

      expect(store$.dispatch).toHaveBeenCalledWith(updateInternetUsage({ internetUsage }));
    });
  });
});
