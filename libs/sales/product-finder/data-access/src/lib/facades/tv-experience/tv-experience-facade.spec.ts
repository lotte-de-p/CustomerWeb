import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TvExperienceFacade } from '../tv-experience/tv-experience-facade';
import { updateTvExperience } from '../../+state/product-finder.actions';
import {
  selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError,
  selectTvExperience,
} from '../../+state/product-finder.selectors';
import { Observable } from 'rxjs';
import { TvExperience } from '../../entities/tv-experience/tv-experinece.interface';

describe('TvExperienceFacade', () => {
  let facade: TvExperienceFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(TvExperienceFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    it('tvExperience$', fakeAsync(() => {
      const tvExperience: TvExperience = {
        selection: [],
      };
      store$.overrideSelector(selectTvExperience, tvExperience);

      const result$: Observable<TvExperience> = facade.tvExperience$;

      result$.subscribe((actual: TvExperience) => {
        expect(tvExperience).toEqual(actual);
      });
      tick();
    }));

    describe('hasErrorRequireAtLeastOneTvExperienceToBeSelectedError$', () => {
      it('should select hasErrorRequireAtLeastOneTvExperienceToBeSelectedError', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError, expected);

        const result$: Observable<boolean> = facade.hasErrorRequireAtLeastOneTvExperienceToBeSelectedError$;

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

    it('updateTvExperience should dispatch the updated tvExperience', () => {
      const tvExperience: TvExperience = {
        selection: [],
      };

      facade.updateTvExperience(tvExperience);

      expect(store$.dispatch).toHaveBeenCalledWith(updateTvExperience({ tvExperience }));
    });
  });
});
