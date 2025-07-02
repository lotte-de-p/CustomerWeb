import { Step } from '../step.model';
import { StepBuilder } from '../step.builder';
import { StepFlowUtil } from './step-flow.util';

describe('StepFlowUtil', () => {
  let currentStep: Step;
  let steps: Step[];
  let expectedStep: Step;

  beforeEach(() => {
    currentStep = StepBuilder.builder('currentStep').withEnabledState(true).build();
    const inactiveStep = StepBuilder.builder('inactiveStep').withEnabledState(false).build();
    const activeStep = StepBuilder.builder('activeStep').withEnabledState(true).build();
    steps = [currentStep, inactiveStep, activeStep];
    expectedStep = activeStep;
  });

  describe('hasNextStep', () => {
    it('should return true if step status is final', function () {
      currentStep = StepBuilder.builder('currentStep').withFinalState().build();
      steps = [currentStep];
      expect(StepFlowUtil.hasNextStep(currentStep, steps)).toBe(true);
    });

    it('should return true if steps has next active step', function () {
      currentStep = StepBuilder.builder('currentStep').build();
      steps = [currentStep, StepBuilder.builder('activeStep').withEnabledState(true).build()];
      expect(StepFlowUtil.hasNextStep(currentStep, steps)).toBe(true);
    });

    it('should return false if steps has next active step', function () {
      currentStep = StepBuilder.builder('currentStep').build();
      steps = [currentStep];
      expect(StepFlowUtil.hasNextStep(currentStep, steps)).toBe(false);
    });
  });

  describe('getActiveStep', () => {
    const step1 = StepBuilder.builder('step-one').build();
    const step2 = StepBuilder.builder('step-two').build();
    const step3 = StepBuilder.builder('step-three').build();
    const steps = [step1, step2, step3];

    it('should find active step by key', function () {
      expect(StepFlowUtil.getActiveStep(steps, 'step-two')).toEqual(step2);
    });

    it('should return undefined if step with key does not exist', function () {
      expect(StepFlowUtil.getActiveStep(steps, 'step-four')).toEqual(undefined);
    });
  });

  describe('getStepIndex', () => {
    it('should return index of current step', function () {
      expect(StepFlowUtil.getStepIndex(currentStep, steps)).toEqual(0);
    });

    it('should return index of current step', function () {
      currentStep.key = 'unknown';
      expect(StepFlowUtil.getStepIndex(currentStep, steps)).toEqual(0);
    });
  });

  describe('hasPreviousStep', () => {
    it('should return false if step status is final', function () {
      currentStep = StepBuilder.builder('currentStep').withFinalState().build();
      steps = [currentStep];
      expect(StepFlowUtil.hasPreviousStep(currentStep, steps)).toBe(false);
    });

    it('should return true if current step has previous step', function () {
      currentStep = StepBuilder.builder('currentStep').build();
      steps = [StepBuilder.builder('activeStep').withEnabledState(true).build(), currentStep];
      expect(StepFlowUtil.hasPreviousStep(currentStep, steps)).toBe(true);
    });

    it('should return false if current step has previous step', function () {
      currentStep = StepBuilder.builder('currentStep').build();
      steps = [currentStep];
      expect(StepFlowUtil.hasPreviousStep(currentStep, steps)).toBe(false);
    });
  });

  describe('getStepCount', () => {
    it('should return 1 active step', function () {
      steps = [
        StepBuilder.builder('inactiveStep').withEnabledState(false).build(),
        StepBuilder.builder('activeStep').withEnabledState(true).build(),
      ];
      expect(StepFlowUtil.getStepCount(steps)).toEqual(1);
    });
  });

  describe('getActiveSteps', () => {
    it('should return 1 active step', function () {
      expectedStep = StepBuilder.builder('activeStep').withEnabledState(true).build();
      steps = [StepBuilder.builder('inactiveStep').withEnabledState(false).build(), expectedStep];
      expect(StepFlowUtil.getActiveSteps(steps)).toEqual([expectedStep]);
    });
  });

  describe('getStepByRelativeIndexOffset', () => {
    it('should return active step', function () {
      expect(StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '+', 1)).toEqual(expectedStep);
    });

    it('should return undefined step', function () {
      expect(StepFlowUtil.getStepByRelativeIndexOffset(currentStep, [currentStep], '-', 1)).toBeUndefined();
    });

    it('should return undefined step', function () {
      expect(StepFlowUtil.getStepByRelativeIndexOffset(currentStep, [currentStep], '+', 1)).toBeUndefined();
    });

    it('should return active step', function () {
      const step = StepBuilder.builder('sss').build();
      expect(StepFlowUtil.getStepByRelativeIndexOffset(currentStep, [step, currentStep], '-', 1)).toEqual(step);
    });

    it('should throw error', function () {
      expect(function () {
        StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '=', 1);
      }).toThrow(new Error('= is not a correct operator'));
    });
  });

  describe('getNextIncompletedStep', () => {
    it('should find next incomplete step', function () {
      const step = StepBuilder.builder('incomplete').withCompletedState(false).withEnabledState(true).build();
      expect(StepFlowUtil.getNextIncompletedStep([step])).toEqual(step);
    });

    it('should return undefined when step is complete', function () {
      expect(
        StepFlowUtil.getNextIncompletedStep([
          StepBuilder.builder('complete').withCompletedState(true).withEnabledState(true).build(),
        ])
      ).toBeUndefined();
    });

    it('should return undefined if no active steps found', function () {
      expect(
        StepFlowUtil.getNextIncompletedStep([StepBuilder.builder('notActive').withEnabledState(false).build()])
      ).toBeUndefined();
    });
  });
});
