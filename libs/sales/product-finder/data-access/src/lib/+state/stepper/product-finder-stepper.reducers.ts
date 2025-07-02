import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';
import { goToPreviousStep, redoTest, setStepConfig } from './product-finder-stepper.actions';
import { produce } from 'immer';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

export const PRODUCT_FINDER_STEPPER_FEATURE_KEY = 'product-finder-stepper';

export interface ProductFinderStepperSlice {
  [PRODUCT_FINDER_STEPPER_FEATURE_KEY]: ProductFinderStepperState;
}

export interface ProductFinderStepperState {
  steps: ProductFinderStep[];
  currentStep: ProductFinderStep;
}

export const stepperInitialState: ProductFinderStepperState = {
  steps: [{ key: ProductFinderStepEnum.INTRO }, { key: ProductFinderStepEnum.PREFERENCE }],
  currentStep: {
    key: ProductFinderStepEnum.INTRO,
  },
};

export const productFinderStepperReducer = createReducer(
  stepperInitialState,
  on(setStepConfig, (state: ProductFinderStepperState, { steps, currentStep }) =>
    produce(state, (draft: ProductFinderStepperState) => {
      draft.steps = steps;
      draft.currentStep = currentStep;
    })
  ),
  on(goToPreviousStep, (state: ProductFinderStepperState): ProductFinderStepperState => {
    const indexOfCurrentStep = state.steps.map((step: ProductFinderStep) => step.key).indexOf(state.currentStep.key);
    if (indexOfCurrentStep > 0) {
      return produce(state, (draft: ProductFinderStepperState) => {
        draft.currentStep = state.steps[indexOfCurrentStep - 1];
      });
    }
    return state;
  }),
  on(
    redoTest,
    (state: ProductFinderStepperState): ProductFinderStepperState =>
      produce(state, () => ({
        ...stepperInitialState,
        currentStep: { key: ProductFinderStepEnum.PREFERENCE },
      }))
  )
);

export const productFinderStepperFeature = createFeature({
  name: PRODUCT_FINDER_STEPPER_FEATURE_KEY,
  reducer: productFinderStepperReducer,
});
