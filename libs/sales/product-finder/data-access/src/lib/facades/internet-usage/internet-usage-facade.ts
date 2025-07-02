import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { updateInternetUsage } from '../../+state/product-finder.actions';
import { Observable } from 'rxjs';
import {
  selectHasErrorRequireAtLeastOneInternetUsageToBeSelected,
  selectInternetUsage,
} from '../../+state/product-finder.selectors';
import { InternetUsage } from '../../entities/internet-usage/internet-usage.interface';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class InternetUsageFacade {
  internetUsage$: Observable<InternetUsage> = this.store
    .select(selectInternetUsage)
    .pipe(filter((internetUsage: InternetUsage | null): internetUsage is InternetUsage => internetUsage !== null));
  hasErrorRequireAtLeastOneInternetUsageToBeSelected$: Observable<boolean> = this.store.select(
    selectHasErrorRequireAtLeastOneInternetUsageToBeSelected
  );

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateInternetUsage(internetUsage: InternetUsage): void {
    this.store.dispatch(updateInternetUsage({ internetUsage }));
  }
}
