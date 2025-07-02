import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, ThankYouState } from './thank-you.state';
import { setOrderNumber, setRedirectUrl } from './thank-you.actions';
import { produce } from 'immer';
import { stateFeatureName } from '../constants/state.const';

export const reducer = createReducer(
  defaultState,
  on(setRedirectUrl, (state: ThankYouState, props: { redirectUrl: string | undefined }) => {
    return produce(state, (draft: ThankYouState) => {
      draft.redirectUrl = props.redirectUrl;
    });
  }),
  on(setOrderNumber, (state: ThankYouState, props: { orderNumber: string }) => {
    return produce(state, (draft: ThankYouState) => {
      draft.orderNumber = props.orderNumber;
    });
  })
);

export function ThankYouReducer(state: ThankYouState = defaultState, action: Action): ThankYouState {
  return reducer(state, action);
}

export const thankYouFeature = createFeature({
  name: stateFeatureName,
  reducer: ThankYouReducer,
});
