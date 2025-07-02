import { ThankYouReducer } from './thank-you.reducer';
import { ThankYouState } from './thank-you.state';
import { setRedirectUrl, setOrderNumber } from './thank-you.actions';
import { thankYouStateFactory } from './thank-you-state.testfactory';

describe('ThankYouReducer', () => {
  const initialState: ThankYouState = thankYouStateFactory.build();

  it('should return initial state when unknown action', () => {
    const action = { type: 'unknown' };

    const thankYouState: ThankYouState = ThankYouReducer(initialState, action);

    expect(thankYouState).toEqual(initialState);
  });

  describe('setRedirectUrl', () => {
    it('should set the redirect URL', () => {
      const action = setRedirectUrl({ redirectUrl: 'new url' });

      const thankYouState = ThankYouReducer(initialState, action);

      expect(thankYouState).not.toEqual(initialState);
      expect(thankYouState.redirectUrl).toEqual('new url');
    });
  });

  describe('setOrderNumber', () => {
    it('should set the order number', () => {
      const action = setOrderNumber({ orderNumber: '123' });

      const thankYouState = ThankYouReducer(initialState, action);

      expect(thankYouState).not.toEqual(initialState);
      expect(thankYouState.orderNumber).toEqual('123');
    });
  });
});
