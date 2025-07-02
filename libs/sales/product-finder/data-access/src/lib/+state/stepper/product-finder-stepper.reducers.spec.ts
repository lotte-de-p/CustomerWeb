import { goToPreviousStep, redoTest, setStepConfig } from './product-finder-stepper.actions';
import {
  productFinderStepperReducer,
  ProductFinderStepperState,
  stepperInitialState,
} from './product-finder-stepper.reducers';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

describe('product finder stepper reducer', () => {
  it('unknown action should return the initial state', () => {
    const action = {
      type: 'unknown',
    };

    const state: ProductFinderStepperState = productFinderStepperReducer(stepperInitialState, action);

    expect(state).toBe(stepperInitialState);
  });

  it('setSteps action should update the steps', () => {
    const steps: ProductFinderStep[] = [{ key: '1' }, { key: '2' }];
    const action = setStepConfig({
      steps,
      currentStep: steps[0],
    });

    const state: ProductFinderStepperState = productFinderStepperReducer(stepperInitialState, action);

    expect(state.steps).toEqual(steps);
    expect(state.currentStep).toEqual(steps[0]);
  });

  describe('goToPreviousStep', () => {
    it('should return current state if the current step is the first', () => {
      const state: ProductFinderStepperState = productFinderStepperReducer(stepperInitialState, goToPreviousStep);

      expect(state).toEqual(stepperInitialState);
    });

    it('should go to the previous step if the current step is not the first', () => {
      const productFinderStepperState: ProductFinderStepperState = {
        ...stepperInitialState,
        currentStep: {
          key: ProductFinderStepEnum.PREFERENCE,
        },
      };

      const state: ProductFinderStepperState = productFinderStepperReducer(productFinderStepperState, goToPreviousStep);

      expect(state.currentStep).toEqual({ key: ProductFinderStepEnum.INTRO });
    });
  });

  it('redoTest should set state to initial state and currentStep to preference', () => {
    const productFinderStepperState: ProductFinderStepperState = {
      ...stepperInitialState,
      steps: [
        { key: ProductFinderStepEnum.INTRO },
        { key: ProductFinderStepEnum.PREFERENCE },
        { key: ProductFinderStepEnum.RESULTS_SCREEN },
      ],
      currentStep: {
        key: ProductFinderStepEnum.RESULTS_SCREEN,
      },
    };

    const state: ProductFinderStepperState = productFinderStepperReducer(productFinderStepperState, redoTest);

    expect(state).toEqual({
      ...stepperInitialState,
      currentStep: { key: ProductFinderStepEnum.PREFERENCE },
    });
  });
});
