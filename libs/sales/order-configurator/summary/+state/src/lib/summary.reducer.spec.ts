import { defaultState, SummaryState } from './summary.state';
import { summaryReducer } from './summary.reducer';

describe('summaryReducer', () => {
  it('should return the default state when no action is matched', () => {
    const initialState: SummaryState = { ...defaultState };
    const action = { type: 'UNKNOWN_ACTION' };

    const newState = summaryReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
