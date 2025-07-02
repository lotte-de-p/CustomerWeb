import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError,
  selectTvExperience,
} from '../../+state/product-finder.selectors';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { updateTvExperience } from '../../+state/product-finder.actions';
import { TvExperience } from '../../entities/tv-experience/tv-experinece.interface';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TvExperienceFacade {
  tvExperience$: Observable<TvExperience> = this.store
    .select(selectTvExperience)
    .pipe(filter((tvExperience: TvExperience | null): tvExperience is TvExperience => tvExperience !== null));
  hasErrorRequireAtLeastOneTvExperienceToBeSelectedError$ = this.store.select(
    selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError
  );

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateTvExperience(tvExperience: TvExperience): void {
    this.store.dispatch(updateTvExperience({ tvExperience }));
  }
}
