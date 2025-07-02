import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { TvChannelsFacade } from '../tv-channels/tv-channels.facade';
import { TvChannels } from '../../entities/tv-channels/tv-channels.interface';
import {
  selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError,
  selectTvChannels,
} from '../../+state/product-finder.selectors';
import { ProductFinderState } from '../../+state/product-finder.reducers';
import { updateTvChannels } from '../../+state/product-finder.actions';

describe('TvChannelsFacade', () => {
  let facade: TvChannelsFacade;
  let store$: MockStore<ProductFinderState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(TvChannelsFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    it('tvChannels$', fakeAsync(() => {
      const tvChannels: TvChannels = {
        selection: [],
      };
      store$.overrideSelector(selectTvChannels, tvChannels);

      const result$: Observable<TvChannels> = facade.tvChannels$;

      result$.subscribe((actual: TvChannels) => {
        expect(actual).toEqual(tvChannels);
      });
      tick();
    }));

    describe('hasErrorRequireAtLeastOneTvChannelToBeSelectedError$', () => {
      it('should select hasErrorRequireAtLeastOneTvChannelToBeSelectedError', fakeAsync(() => {
        const expected = true;
        store$.overrideSelector(selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError, expected);

        const result$: Observable<boolean> = facade.hasErrorRequireAtLeastOneTvChannelToBeSelectedError$;

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

    it('updateTvChannels should update the tvChannels', () => {
      const tvChannels: TvChannels = {
        selection: ['belgium'],
      };

      facade.updateTvChannels(tvChannels);

      expect(store$.dispatch).toHaveBeenCalledWith(updateTvChannels({ tvChannels }));
    });
  });
});
