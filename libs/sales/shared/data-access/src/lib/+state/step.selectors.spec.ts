import { StepState } from './step.state';
import {
  isFirstStep,
  nextButtonLabel,
  selectCurrentStepKey,
  selectNexStepKey,
  selectStepKeys,
  showBackButton,
  showNavigation,
} from './step.selectors';
import { stepFactory } from './step.state.testfactory';
import { NextButtonLabelEnum } from '../enums/sales-stepper/next-button-label.enum';

describe('step selectors', () => {
  const initialState: StepState = stepFactory.build();
  const stepKeys = ['1', '2', '3'];

  it('should select Current Step from Store', () => {
    const result = selectCurrentStepKey.projector(initialState);

    const expected = '1';

    expect(result).toEqual(expected);
  });

  it('should select all Steps from Store', () => {
    const result = selectStepKeys.projector(initialState);

    const expected = ['1', '2'];

    expect(result).toEqual(expected);
  });

  it('should return true when the first step is the current step', () => {
    const result = isFirstStep.projector(initialState);

    expect(result).toEqual(true);
  });

  it('should return false when the current step is not the first step', () => {
    const updatedState = { ...initialState };
    updatedState.stepFeature.currentStepKey = '2';
    const result = isFirstStep.projector(updatedState);

    expect(result).toEqual(false);
  });

  it('should return undefined when the next button label is not set yet', () => {
    const result = nextButtonLabel.projector(initialState);

    expect(result).toBeUndefined();
  });

  it('should return the next button label', () => {
    const updatedState = stepFactory.build({ stepFeature: { nextButtonLabel: NextButtonLabelEnum.ORDER } });
    const result = nextButtonLabel.projector(updatedState);

    expect(result).toEqual(NextButtonLabelEnum.ORDER);
  });

  it('should return the key of the next step if the current step is not the last step', () => {
    // Setting the current step key to '2', so the next step key should be '3'
    const initialState = stepFactory.build({ stepFeature: { currentStepKey: '2', stepKeys: stepKeys } });
    const result = selectNexStepKey.projector(initialState);

    expect(result).toEqual('3');
  });

  it('should return undefined if the current step is the last step', () => {
    // Setting the current step key to '3', which is the last step in the list
    const initialState = stepFactory.build({ stepFeature: { currentStepKey: '3', stepKeys: stepKeys } });
    const result = selectNexStepKey.projector(initialState);

    expect(result).toBeUndefined();
  });

  it('should select visibility of the navigation bar', () => {
    const result = showNavigation.projector(initialState);
    expect(result).toBe(true);
  });

  it('should select visibility of the back button', () => {
    const result = showBackButton.projector(initialState);
    expect(result).toBe(true);
  });
});
