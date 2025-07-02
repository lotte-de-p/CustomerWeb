import { ContactInfoState, defaultState } from './contact-info.state';
import { contactInfoReducer } from './contact-info.reducer';
import { Action } from '@ngrx/store'; // Import the updated reducer

describe('contactInfoReducer', () => {
  it('should return the default state when no action is matched', () => {
    const initialState: ContactInfoState = { ...defaultState };
    const action = { type: 'UNKNOWN_ACTION' } as Action; // An unknown action

    const newState = contactInfoReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
