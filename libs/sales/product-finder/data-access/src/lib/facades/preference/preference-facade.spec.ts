import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PreferenceFacade } from '../preference/preference-facade';
import { Preference } from '../../entities/preference/preference.interface';
import { clearError, updatePreference } from '../../+state/product-finder.actions';
import {
  selectHasErrorRequireAtLeastOnePreferenceToBeSelected,
  selectHasErrorRequireInternetWhenTvIsSelected,
  selectPreference,
} from '../../+state/product-finder.selectors';
import { Observable } from 'rxjs';

describe('PreferenceFacade', () => {
  let facade: PreferenceFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(PreferenceFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    describe('preference$', () => {
      it('should select preference', fakeAsync(() => {
        const expected: Preference = {
          mobile: false,
          surfing: false,
          watchTv: false,
          fixedLine: false,
        };
        store$.overrideSelector(selectPreference, expected);

        const result$: Observable<Preference> = facade.preference$;

        result$.subscribe((actual: Preference) => {
          expect(actual).toEqual(expected);
        });

        tick();
      }));
    });

    describe('hasErrorRequireAtLeastOnePreferenceToBeSelected$', () => {
      it('should select hasErrorRequireAtLeastOnePreferenceToBeSelected$', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectHasErrorRequireAtLeastOnePreferenceToBeSelected, expected);

        const result$: Observable<boolean> = facade.hasErrorRequireAtLeastOnePreferenceToBeSelected$;

        result$.subscribe((actual: boolean) => {
          expect(actual).toEqual(expected);
        });

        tick();
      }));
    });

    describe('hasErrorRequireInternetWhenTvIsSelected$', () => {
      it('should select hasErrorRequireInternetWhenTvIsSelected$', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectHasErrorRequireInternetWhenTvIsSelected, expected);

        const result$: Observable<boolean> = facade.hasErrorRequireInternetWhenTvIsSelected$;

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

    describe('updatePreference', () => {
      it('should dispatch updatePreference', () => {
        const preference: Preference = {
          mobile: false,
          surfing: false,
          watchTv: false,
          fixedLine: false,
        };

        facade.updatePreference(preference);

        expect(store$.dispatch).toHaveBeenCalledWith(updatePreference({ preference }));
      });
    });

    describe('clearError', () => {
      it('should dispatch clearError', () => {
        facade.clearError();

        expect(store$.dispatch).toHaveBeenCalledWith(clearError());
      });
    });
  });
});
