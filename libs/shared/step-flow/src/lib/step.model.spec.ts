import { StepEnum } from './step.enum';
import { Step } from './step.model';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('StepModel', () => {
  let step: Step;
  beforeEach(() => {
    step = new Step('test-step');
  });

  describe('isFinal', () => {
    it('should return true when the step type is final', () => {
      step.type = StepEnum.FINAL;
      expect(step.isFinal()).toBe(true);
    });

    it('should return false when the step type is not final', () => {
      step.type = StepEnum.DEFAULT;
      expect(step.isFinal()).toBe(false);
    });
  });

  describe('setCompleted', () => {
    it('should set the step state to be completed when given true', () => {
      step.setCompleted(true);
      expect(step.isCompleted).toBe(true);
    });

    it('should set the step state to be not completed when given false', () => {
      step.setCompleted(false);
      expect(step.isCompleted).toBe(false);
    });
  });

  describe('isConfirm', () => {
    it('should return true when the step type is confirm', () => {
      step.type = StepEnum.CONFIRM;
      expect(step.isConfirm()).toBe(true);
    });

    it('should return false when the step type is not confirm', () => {
      step.type = StepEnum.DEFAULT;
      expect(step.isConfirm()).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
