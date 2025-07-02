import { setNextPage, setPhoneNumber } from './account.actions';
import { accountReducer } from './account.reducers';

describe('account reducer', () => {
  const initialState = {
    nextPage: 'next-page',
    phoneNumber: '',
  };

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = accountReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('save Account actions', () => {
    it('should save nextPage to account state', () => {
      const nextPageValue = { page: 'next-page' };

      const action = setNextPage(nextPageValue);

      const state = accountReducer(initialState, action);

      expect(state.nextPage).toEqual('next-page');
    });

    it('should save nextPage to account state', () => {
      const phoneNumber = { phoneNumber: '0471232427' };

      const action = setPhoneNumber(phoneNumber);

      const state = accountReducer(initialState, action);

      expect(state.phoneNumber).toEqual('0471232427');
    });
  });
});
