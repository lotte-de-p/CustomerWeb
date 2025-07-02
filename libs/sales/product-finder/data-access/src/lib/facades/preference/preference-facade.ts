import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Preference } from '../../entities/preference/preference.interface';
import {
  selectHasErrorRequireAtLeastOnePreferenceToBeSelected,
  selectHasErrorRequireInternetWhenTvIsSelected,
  selectPreference,
} from '../../+state/product-finder.selectors';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { clearError, updatePreference } from '../../+state/product-finder.actions';

@Injectable({ providedIn: 'root' })
export class PreferenceFacade {
  preference$: Observable<Preference> = this.store.select(selectPreference);
  hasErrorRequireAtLeastOnePreferenceToBeSelected$: Observable<boolean> = this.store.select(
    selectHasErrorRequireAtLeastOnePreferenceToBeSelected
  );
  hasErrorRequireInternetWhenTvIsSelected$: Observable<boolean> = this.store.select(
    selectHasErrorRequireInternetWhenTvIsSelected
  );

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updatePreference(preference: Preference): void {
    this.store.dispatch(updatePreference({ preference }));
  }

  clearError(): void {
    this.store.dispatch(clearError());
  }
}
