import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentState, flows, stateActions, steps } from '../+state/goliath.selectors';
import { GoliathState } from '../+state/goliath.state';

@Injectable({ providedIn: 'root' })
export class GoliathFacade {
  flows$ = this.store.select(flows);
  steps$ = this.store.select(steps);
  stateActions$ = this.store.select(stateActions);
  currentState$ = this.store.select(currentState);

  constructor(private readonly store: Store<GoliathState<unknown>>) {}
}
