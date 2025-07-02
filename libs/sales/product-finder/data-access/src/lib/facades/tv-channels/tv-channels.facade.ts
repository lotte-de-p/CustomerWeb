import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError,
  selectTvChannels,
} from '../../+state/product-finder.selectors';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { TvChannels } from '../../entities/tv-channels/tv-channels.interface';
import { updateTvChannels } from '../../+state/product-finder.actions';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TvChannelsFacade {
  tvChannels$: Observable<TvChannels> = this.store
    .select(selectTvChannels)
    .pipe(filter((tvChannels: TvChannels | null): tvChannels is TvChannels => tvChannels !== null));
  hasErrorRequireAtLeastOneTvChannelToBeSelectedError$ = this.store.select(
    selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError
  );

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateTvChannels(tvChannels: TvChannels): void {
    this.store.dispatch(updateTvChannels({ tvChannels }));
  }
}
