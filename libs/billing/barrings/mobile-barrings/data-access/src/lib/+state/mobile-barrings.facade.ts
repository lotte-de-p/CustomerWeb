import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MobileBarrings, UpdateMobileBarrings } from '../entities/mobile-barrings.interface';
import { MobileBarringsService } from '../services/mobile-barrings.service';
import { fetchMobileBarringsSuccess, setSelectedMobileLine, triggerLoading } from './mobile-barrings.actions';
import { MobileBarringsState } from './mobile-barrings.reducers';
import {
  selectLoadingState,
  selectMobileBarringError,
  selectMobileBarringGroups,
  selectMobileBarringProductStatus,
  selectMobileBarringReadOnly,
  selectMobileBarringSelectedMobileLine,
} from './mobile-barrings.selectors';
import { MobileLine } from '@billing/shared/data-access';

@Injectable({ providedIn: 'root' })
export class MobileBarringsFacade {
  private readonly store = inject(Store<MobileBarringsState>);
  private readonly mobileBarringService = inject(MobileBarringsService);

  selectMobileBarringSelectedMobileLine$ = this.store.select(selectMobileBarringSelectedMobileLine);
  mobileBarringGroups$ = this.store.select(selectMobileBarringGroups);
  mobileBarringReadOnly$ = this.store.select(selectMobileBarringReadOnly);
  mobileBarringProductStatus$ = this.store.select(selectMobileBarringProductStatus);
  mobileBarringError$ = this.store.select(selectMobileBarringError);
  loadingState$ = this.store.select(selectLoadingState);

  setSelectedMobileLine(selectedMobileLine: MobileLine) {
    this.store.dispatch(setSelectedMobileLine({ selectedMobileLine }));
  }

  updateBarrings(payload: UpdateMobileBarrings, msisdn: string) {
    return this.mobileBarringService.updateMobileBarrings(payload, msisdn);
  }

  triggerLoading(value: boolean) {
    this.store.dispatch(triggerLoading({ value }));
  }

  setMobileBarrings(mobileBarringObject: MobileBarrings) {
    this.store.dispatch(fetchMobileBarringsSuccess({ mobileBarringObject }));
  }
}
