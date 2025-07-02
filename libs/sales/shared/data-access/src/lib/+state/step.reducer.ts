import { Action, createFeature, createReducer, on } from '@ngrx/store';
import {
  goToFirstStep,
  goToNextStep,
  goToPreviousStep,
  goToStep,
  setBackButtonVisibility,
  setNavigationBarVisibility,
  setNextButtonLabel,
  setStepConfig,
} from './step.actions';
import { defaultState, StepState } from './step.state';
import { produce } from 'immer';

export const reducer = createReducer(
  defaultState,
  on(setStepConfig, (state, { steps }) =>
    produce(state, (draft: StepState) => {
      draft.stepFeature.stepKeys = steps;
    })
  ),
  on(goToFirstStep, (state) => {
    const stepFeature = state.stepFeature;
    if (stepFeature.stepKeys.length > 0) {
      return produce(state, (draft: StepState) => {
        draft.stepFeature.currentStepKey = stepFeature.stepKeys[0];
      });
    }
    return state;
  }),
  on(goToStep, (state, { stepKey }) => {
    return produce(state, (draft: StepState) => {
      draft.stepFeature.currentStepKey = stepKey;
    });
  }),
  on(goToNextStep, (state) => {
    const stepFeature = state.stepFeature;
    const indexOf = stepFeature.stepKeys.indexOf(stepFeature.currentStepKey);
    if (indexOf !== stepFeature.stepKeys.length - 1) {
      return produce(state, (draft: StepState) => {
        draft.stepFeature.currentStepKey = stepFeature.stepKeys[indexOf + 1];
      });
    }
    return state;
  }),
  on(goToPreviousStep, (state) => {
    const stepFeature = state.stepFeature;
    const indexOf = stepFeature.stepKeys.indexOf(stepFeature.currentStepKey);
    if (indexOf > 0) {
      return produce(state, (draft: StepState) => {
        draft.stepFeature.currentStepKey = stepFeature.stepKeys[indexOf - 1];
      });
    }
    return state;
  }),
  on(setNextButtonLabel, (state, { nextButtonLabel }) => {
    return produce(state, (draft: StepState) => {
      draft.stepFeature.nextButtonLabel = nextButtonLabel;
    });
  }),
  on(setNavigationBarVisibility, (state, { visible: visibility }) => {
    return produce(state, (draft: StepState) => {
      draft.stepFeature.showNavigation = visibility;
    });
  }),
  on(setBackButtonVisibility, (state, { visible: visibility }) => {
    return produce(state, (draft: StepState) => {
      draft.stepFeature.showBackButton = visibility;
    });
  })
);

export function stepReducer(state: StepState = defaultState, action: Action): StepState {
  return reducer(state, action);
}

export const stepfeature = createFeature({
  name: 'stepFeature',
  reducer: stepReducer,
});
