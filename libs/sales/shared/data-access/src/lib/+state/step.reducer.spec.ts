import { stepReducer } from './step.reducer';
import { StepState } from './step.state';
import {
  goToFirstStep,
  goToNextStep,
  goToPreviousStep,
  setBackButtonVisibility,
  setNavigationBarVisibility,
  setNextButtonLabel,
  setStepConfig,
} from './step.actions';
import { stepFactory } from './step.state.testfactory';
import { NextButtonLabelEnum } from '../enums/sales-stepper/next-button-label.enum';

describe('customer registration reducer', () => {
  let initialState: StepState;
  beforeEach(() => {
    initialState = stepFactory.build();
  });

  function setCurrentStepToLast() {
    return stepFactory.build({
      stepFeature: {
        currentStepKey: '2',
      },
    });
  }

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = stepReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('setStepConfig action', () => {
    it('should update the steps', () => {
      const action = setStepConfig({
        steps: ['3', '4'],
      });

      const state = stepReducer(initialState, action);

      expect(state.stepFeature.stepKeys[0]).toEqual('3');
      expect(state.stepFeature.stepKeys[1]).toEqual('4');
    });
  });

  describe('setNextButtonLabel action', () => {
    it('should update next button label', () => {
      const action = setNextButtonLabel({
        nextButtonLabel: NextButtonLabelEnum.ORDER,
      });

      const state = stepReducer(initialState, action);

      expect(state.stepFeature.nextButtonLabel).toEqual(NextButtonLabelEnum.ORDER);
    });
  });

  describe('goToFirstStep action', () => {
    it('should go to the first step', () => {
      const state = stepReducer(initialState, goToFirstStep());

      expect(state.stepFeature.currentStepKey).toEqual('1');
    });
  });

  describe('goToNextStep action', () => {
    it('should go to the next step if the current step is not the last', () => {
      const state = stepReducer(initialState, goToNextStep());

      expect(state.stepFeature.currentStepKey).toEqual('2');
    });

    it('should return initial state if the current step is the last', () => {
      initialState = setCurrentStepToLast();

      const state = stepReducer(initialState, goToNextStep());

      expect(state).toEqual(initialState);
    });
  });

  describe('goToPreviousStep action', () => {
    it('should return initial state if the current step is the first', () => {
      const state = stepReducer(initialState, goToPreviousStep());

      expect(state).toEqual(initialState);
    });

    it('should go to the previous step if the current step is not the first', () => {
      const initialState = setCurrentStepToLast();

      const state = stepReducer(initialState, goToPreviousStep());

      expect(state.stepFeature.currentStepKey).toEqual('1');
    });
  });

  describe('setNavigationBarVisibility', () => {
    it('should set the visibility to false', () => {
      const newState = stepReducer(initialState, setNavigationBarVisibility({ visible: false }));

      expect(newState.stepFeature.showNavigation).toBe(false);
    });
  });

  describe('setBackButtonVisibility', () => {
    it('should set the visibility to false', () => {
      const newState = stepReducer(initialState, setBackButtonVisibility({ visible: false }));

      expect(newState.stepFeature.showBackButton).toBe(false);
    });
  });
});
