import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { OneConfiguratorSlice } from '../../+state/one-configurator.reducers';
import { addSim, removeSim, updateUsageType } from '../../+state/one-configurator.actions';
import { SimsState, UsageTypeUpdate } from '../../entities/sims/sims-state.interface';
import { Observable } from 'rxjs';
import { selectEnabled, selectSimsState } from '../../+state/one-configurator.selectors';

@Injectable({ providedIn: 'root' })
export class SimsFacade {
  enabled$: Observable<boolean> = this.store.select(selectEnabled);
  simsState$: Observable<SimsState> = this.store.select(selectSimsState);

  constructor(private readonly store: Store<OneConfiguratorSlice>) {}

  addSim(): void {
    this.store.dispatch(addSim());
  }

  removeSim(): void {
    this.store.dispatch(removeSim());
  }

  updateUsageType(usageTypeUpdate: UsageTypeUpdate): void {
    this.store.dispatch(updateUsageType({ usageTypeUpdate }));
  }
}
