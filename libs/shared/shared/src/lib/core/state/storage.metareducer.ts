import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';

function setSavedState(state: object, localStorageKey: string) {
  sessionStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string): object {
  const item = sessionStorage.getItem(localStorageKey);
  if (item) {
    return JSON.parse(item);
  }
  return {};
}

export function createStorageMetaReducer(storageKey: string, stateKeys: string[]) {
  return function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
    let onInit = true; // after load/refresh…
    return function (state: S | undefined, action: A): S {
      // reduce the nextState.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit = false;
        const savedState = getSavedState(storageKey);
        return merge(nextState, savedState);
      }
      // save the next state to the application storage.
      const stateToSave = pick(nextState, stateKeys);
      setSavedState(stateToSave, storageKey);
      return nextState;
    };
  };
}
