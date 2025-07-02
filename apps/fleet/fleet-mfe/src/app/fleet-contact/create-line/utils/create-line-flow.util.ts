import { Category, StepCategoryData } from '../models/category.interface';
import { InputInterface, StepUserInputInterface } from '../models/input.interface';
import { Step } from '@telenet/ng-lib-step-flow';

export class CreateFleetLineFlowUtil {
  static getCategoryOfStep(categories: Category[], stepKey: string): Category {
    return categories.find((category) => category.steps.some((step: StepCategoryData) => step.key === stepKey))!;
  }

  static getStepFromCategory(category: Category, stepKey: string): StepCategoryData {
    return category.steps.find((step) => step.key === stepKey)!;
  }

  static isStepWithKeyInSteps(steps: Step[], stepKey: string): boolean {
    return steps.some((step) => step.key === stepKey);
  }

  static findAllNextStepKeys(steps: Step[], currentStep?: Step): string[] {
    const result: string[] = [];
    const currentStepIndex = steps.indexOf(currentStep);
    steps.forEach((step) => {
      const stepIndex = steps.indexOf(step);
      if (stepIndex > currentStepIndex) {
        result.push(step.key);
      }
    });
    return result;
  }

  static findAllPreviousCategoriesStepKey(categories: Category[], currentStepKey: string): Category[] {
    const result: Category[] = [];

    const currentCategory = CreateFleetLineFlowUtil.getCategoryOfStep(categories, currentStepKey);
    const currentCategoryIndex = categories.indexOf(currentCategory);

    categories.forEach((category) => {
      const categoryIndex = categories.indexOf(category);
      if (categoryIndex <= currentCategoryIndex) {
        result.push(category);
      }
    });

    return result;
  }

  static getIndexOfStep(steps: StepCategoryData[], stepKey: string): number {
    return steps?.findIndex((step) => step.key === stepKey);
  }

  static getInputDataForStep(stepUserInputs: StepUserInputInterface[], stepKey: string): InputInterface {
    return stepUserInputs.find((stepUserInput) => stepUserInput.stepKey === stepKey)!.input;
  }
}
