import { orderReducer } from './order.reducer';
import { defaultState, OrderState } from './order.state';

describe('orderReducer', () => {
  it('should return the default state when no action is matched', () => {
    const initialState: OrderState = { ...defaultState };
    const action = { type: 'UNKNOWN_ACTION' };

    const newState = orderReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
