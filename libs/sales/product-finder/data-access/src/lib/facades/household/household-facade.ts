import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { updateHousehold } from '../../+state/product-finder.actions';
import { Household } from '../../entities/household/household.interface';
import { Observable } from 'rxjs';
import { selectHousehold } from '../../+state/product-finder.selectors';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HouseholdFacade {
  household$: Observable<Household> = this.store
    .select(selectHousehold)
    .pipe(filter((household: Household | null): household is Household => household !== null));

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateHousehold(household: Household): void {
    this.store.dispatch(updateHousehold({ household }));
  }
}
