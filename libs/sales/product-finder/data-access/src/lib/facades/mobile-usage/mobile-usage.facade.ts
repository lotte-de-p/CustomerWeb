import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { updateMobileLineCollapsed, updateMobileLineSelection } from '../../+state/product-finder.actions';
import { Observable } from 'rxjs';
import {
  selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine,
  selectMobileUsage,
} from '../../+state/product-finder.selectors';
import { MobileUsage } from '../../entities/mobile-usage/mobile.usage.interface';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MobileUsageFacade {
  mobileUsage$: Observable<MobileUsage> = this.store
    .select(selectMobileUsage)
    .pipe(filter((mobileUsage: MobileUsage | null): mobileUsage is MobileUsage => mobileUsage !== null));

  hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine$ = this.store.select(
    selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine
  );

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateMobileLineSelection(index: number, selection: string[]): void {
    this.store.dispatch(updateMobileLineSelection({ index, selection }));
  }

  updateMobileLineCollapsed(index: number, collapsed: boolean): void {
    this.store.dispatch(updateMobileLineCollapsed({ index, collapsed }));
  }
}
