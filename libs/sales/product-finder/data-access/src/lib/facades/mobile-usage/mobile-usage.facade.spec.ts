import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updateMobileLineCollapsed, updateMobileLineSelection } from '../../+state/product-finder.actions';
import {
  selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine,
  selectMobileUsage,
} from '../../+state/product-finder.selectors';
import { Observable } from 'rxjs';
import { MobileUsage } from '../../entities/mobile-usage/mobile.usage.interface';
import { MobileUsageFacade } from '../mobile-usage/mobile-usage.facade';

describe('MobileUsageFacade', () => {
  let facade: MobileUsageFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(MobileUsageFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    it('mobileUsage$', fakeAsync(() => {
      const mobileUsage: MobileUsage = {
        mobileLines: [
          {
            selection: ['gaming'],
            collapsed: true,
            error: null,
          },
        ],
      };
      store$.overrideSelector(selectMobileUsage, mobileUsage);

      const result$: Observable<MobileUsage> = facade.mobileUsage$;

      result$.subscribe((actual: MobileUsage) => {
        expect(actual).toEqual(mobileUsage);
      });
      tick();
    }));

    describe('hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine$', () => {
      it('should select hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine, expected);

        const result$: Observable<boolean> = facade.hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine$;

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

    it('updateMobileLineSelection should update the selection of a mobile number', () => {
      const index = 0;
      const selection: string[] = ['gaming'];

      facade.updateMobileLineSelection(index, selection);

      expect(store$.dispatch).toHaveBeenCalledWith(updateMobileLineSelection({ index, selection }));
    });

    it('updateSelectionOfMobileNumber should update the selection of a mobile number', () => {
      const index = 0;
      const collapsed = true;

      facade.updateMobileLineCollapsed(index, collapsed);

      expect(store$.dispatch).toHaveBeenCalledWith(updateMobileLineCollapsed({ index, collapsed }));
    });
  });
});
