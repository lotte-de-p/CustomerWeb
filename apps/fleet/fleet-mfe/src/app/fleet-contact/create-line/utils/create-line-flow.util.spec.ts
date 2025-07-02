import { CreateFleetLineFlowUtil } from './create-line-flow.util';
import { InputInterface, StepUserInputInterface } from '../models/input.interface';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { expect } from '@jest/globals';
import { Category, StepCategoryData } from '../models/category.interface';
import { Step } from '@telenet/ng-lib-step-flow';

const mockSteps = require('../../../../../../../../fixtures/http/fleet/create-fleet-line/steps.json');
const mockCategories = require('../../../../../../../../fixtures/http/fleet/create-fleet-line/categories.json');
describe('CreateFleetLineUtil', () => {
  const nonexistentKey = 'nonexistentKey';
  const stepOneInput = {} as InputInterface;
  const stepTwoInput = {} as InputInterface;
  const stepThreeInput = {} as InputInterface;
  const stepUserInputs = [
    { stepKey: 'categoryOneStepOne', input: stepOneInput },
    { stepKey: 'categoryOneStepTwo', input: stepTwoInput },
    { stepKey: 'categoryOneStepThree', input: stepThreeInput },
  ] as StepUserInputInterface[];

  describe('getCategoryOfStep', () => {
    it('should return category of the given step key', () => {
      const result = CreateFleetLineFlowUtil.getCategoryOfStep(mockCategories, mockSteps[1].key);

      expect(result.key).toBe('categoryOne');
    });

    it('should return undefined if step is in not in any category', () => {
      const result = CreateFleetLineFlowUtil.getCategoryOfStep(mockCategories, nonexistentKey);

      expect(result).toBeUndefined();
    });
  });

  describe('getIndexOfStep', () => {
    it('should return the index of step if step with given key is in array', () => {
      const result = CreateFleetLineFlowUtil.getIndexOfStep(mockSteps, mockSteps[1].key);

      expect(result).toBe(1);
    });

    it('should return -1 if step with given key is not in array', () => {
      const result = CreateFleetLineFlowUtil.getIndexOfStep(mockSteps, nonexistentKey);

      expect(result).toBe(-1);
    });
  });

  describe('getInputDataForStep', () => {
    it('should get the right input for the given step', () => {
      const result = CreateFleetLineFlowUtil.getInputDataForStep(stepUserInputs, mockSteps[1].key) as InputInterface;

      expect(result).toBe(stepTwoInput);
      expect(result).not.toBe(stepOneInput);
      expect(result).not.toBe(stepThreeInput);
    });
  });

  describe('findAllNextStepKeys', () => {
    it('should get the next steps after given step', () => {
      // @ts-ignore
      const result = CreateFleetLineFlowUtil.findAllNextStepKeys(mockSteps, mockSteps[0]);

      expect(result).toEqual(mockSteps.map((step: { key: string }) => step.key).slice(1));
    });
  });

  describe('getStepFromCategory', () => {
    it('should get right step from category', () => {
      const step1 = { key: 'step-1' } as StepCategoryData;
      const step2 = { key: 'step-2' } as StepCategoryData;
      const category = {
        steps: [step1, step2],
      } as Category;
      const result = CreateFleetLineFlowUtil.getStepFromCategory(category, 'step-1');

      expect(result).toEqual(step1);
    });
  });

  describe('isStepWithKeyInSteps', () => {
    it('should return true if key is found in steps', () => {
      const step1 = { key: 'step-1' } as Step;
      const step2 = { key: 'step-2' } as Step;
      const steps = [step1, step2];
      const result = CreateFleetLineFlowUtil.isStepWithKeyInSteps(steps, 'step-1');

      expect(result).toEqual(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
