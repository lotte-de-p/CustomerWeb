import { defaultState, EasySwitchState } from './easy-switch.state';
import { easySwitchReducer } from './easy-switch.reducer';

describe('easySwitchReducer', () => {
  it('should return the default state when no action is matched', () => {
    const initialState: EasySwitchState = { ...defaultState };
    const action = { type: 'UNKNOWN_ACTION' }; // An unknown action

    const newState = easySwitchReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
