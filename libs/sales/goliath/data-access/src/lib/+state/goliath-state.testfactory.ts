import { Sync } from 'factory.ts';
import { GoliathState } from './goliath.state';
import { StateActionEnum } from '../enums/state-action.enum';

export const goliathStateTestfactory = Sync.makeFactory<GoliathState<unknown>>({
  flows: [],
  steps: [],
  stateActions: [],
  currentState: StateActionEnum.EMPTY,
});
