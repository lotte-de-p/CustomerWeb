import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { setNextPage, setPhoneNumber } from './account.actions';
export const ACCOUNT_FEATURE_KEY = 'account';

export interface AccountSlice {
  [ACCOUNT_FEATURE_KEY]: AccountState;
}

export interface AccountState {
  nextPage: string;
  phoneNumber: string;
}

export const initialState: AccountState = {
  nextPage: '',
  phoneNumber: '',
};

export const accountFeature = createFeature({
  name: ACCOUNT_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(setNextPage, (state, action) => {
      return { ...state, nextPage: action.page };
    }),
    on(setPhoneNumber, (state, action) => {
      return { ...state, phoneNumber: action.phoneNumber };
    })
  ),
});

export function accountReducer(state: AccountState = initialState, action: Action): AccountState {
  return accountFeature.reducer(state, action);
}
