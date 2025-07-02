import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountState, ACCOUNT_FEATURE_KEY } from './account.reducers';

export const selectAccount = createFeatureSelector<AccountState>(ACCOUNT_FEATURE_KEY);

export const selectNextPage = createSelector(selectAccount, (account) => account.nextPage);
export const selectPhoneNumber = createSelector(selectAccount, (account) => account.phoneNumber);
