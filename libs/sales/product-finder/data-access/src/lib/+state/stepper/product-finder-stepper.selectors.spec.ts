import {
  selectCurrentStep,
  selectCurrentStepKey,
  selectProgressBarVisible,
  selectSteps,
  selectVisible,
} from './product-finder-stepper.selectors';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';
import { ProductFinderStepperState, stepperInitialState } from './product-finder-stepper.reducers';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

describe('product finder step selectors', () => {
  it('should select steps from Store', () => {
    const expected: ProductFinderStep[] = [
      {
        key: ProductFinderStepEnum.INTRO,
      },
      {
        key: ProductFinderStepEnum.PREFERENCE,
      },
    ];

    const result: ProductFinderStep[] = selectSteps.projector(stepperInitialState);

    expect(result).toEqual(expected);
  });

  it('should select current step from Store', () => {
    const expected: ProductFinderStep = {
      key: ProductFinderStepEnum.INTRO,
    };

    const result: ProductFinderStep = selectCurrentStep.projector(stepperInitialState);

    expect(result).toEqual(expected);
  });

  it('should select current step key from Store', () => {
    const expected = ProductFinderStepEnum.INTRO;

    const result: string = selectCurrentStepKey.projector(stepperInitialState);

    expect(result).toEqual(expected);
  });

  describe('selectProgressBarVisible', () => {
    it('should return true when current step key is not INTRO', () => {
      const key = ProductFinderStepEnum.PREFERENCE;
      const state: ProductFinderStepperState = {
        ...stepperInitialState,
        currentStep: { key },
      };
      selectCurrentStepKey.projector(state);

      const result: boolean = selectProgressBarVisible.projector(key);

      expect(result).toBe(true);
    });

    it('should return false when current step key is INTRO', () => {
      const key = ProductFinderStepEnum.INTRO;
      const state: ProductFinderStepperState = {
        ...stepperInitialState,
        currentStep: { key },
      };
      selectCurrentStepKey.projector(state);

      const result: boolean = selectProgressBarVisible.projector(key);

      expect(result).toBe(false);
    });
  });

  describe('selectVisible', () => {
    it('should return true when current step key is not results screen', () => {
      const key = ProductFinderStepEnum.PREFERENCE;
      const state: ProductFinderStepperState = {
        ...stepperInitialState,
        currentStep: { key },
      };
      selectCurrentStepKey.projector(state);

      const result: boolean = selectVisible.projector(key);

      expect(result).toBe(true);
    });

    it('should return false when current step key is results screen', () => {
      const key = ProductFinderStepEnum.RESULTS_SCREEN;
      const state: ProductFinderStepperState = {
        ...stepperInitialState,
        currentStep: { key },
      };
      selectCurrentStepKey.projector(state);

      const result: boolean = selectVisible.projector(key);

      expect(result).toBe(false);
    });
  });
});
