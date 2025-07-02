import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MobileUsageLimitsState } from './+state/mobile-usage-limits.reducers';
import { Observable } from 'rxjs';
import {
  selectedMobileUsageLimits,
  selectedMobileUsageLimitsLoaded,
  selectedOutOfBundleLimits,
  selectedOutOfBundleLimitsLoaded,
} from './+state/mobile-usage-limits.selectors';
import {
  fetchMobileUsageLimitsDetails,
  fetchOutOfBundleLimits,
  resetMobileUsageLimits,
  updateMobileUsageDataLayerEvent,
  updateMobileUsageLimits,
} from './+state/mobile-usage-limits.actions';
import { UsageLimits } from './entities/usage-limits/usage-limits.model';
import { UpdateUsageLimitsRequest } from './entities/usage-limits/update-usage-limits-request.model';
import { MobileLine } from '@billing/shared/data-access';

@Injectable({ providedIn: 'root' })
export class MobileUsageLimitsFacade {
  constructor(private readonly store: Store<MobileUsageLimitsState>) {}

  selectedMobileUsageLimits$: Observable<UsageLimits | null> = this.store.select(selectedMobileUsageLimits);
  selectedOutOfBundleLimits$: Observable<string[]> = this.store.select(selectedOutOfBundleLimits);
  selectedOutOfBundleLimitsLoaded$: Observable<boolean> = this.store.select(selectedOutOfBundleLimitsLoaded);
  selectedMobileUsageLimitsLoaded$: Observable<boolean> = this.store.select(selectedMobileUsageLimitsLoaded);

  loadMobileUsageLimits(params: { mobileLine: MobileLine }): void {
    this.store.dispatch(fetchMobileUsageLimitsDetails(params));
  }

  loadOutOfBundleLimits(params: { mobileLine: MobileLine }): void {
    this.store.dispatch(fetchOutOfBundleLimits(params));
  }

  updateMobileUsageLimits(params: {
    updateUsageLimitsRequest: UpdateUsageLimitsRequest;
    mobileLine: MobileLine;
  }): void {
    this.store.dispatch(updateMobileUsageLimits(params));
  }

  updateMobileUsageDataLayerEvent(params: {
    limitAlreadyExceeded: boolean;
    updateDeclined: boolean;
    cancelledLimit?: string;
    itemName?: string;
  }): void {
    this.store.dispatch(updateMobileUsageDataLayerEvent(params));
  }

  resetMobileUsageLimits(): void {
    this.store.dispatch(resetMobileUsageLimits());
  }
}
