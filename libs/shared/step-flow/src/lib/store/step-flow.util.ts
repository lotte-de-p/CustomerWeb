import { Step } from '../step.model';
import { findIndex } from 'lodash-es';

export class StepFlowUtil {
  public static hasNextStep(currentStep: Step, steps: Step[]): boolean {
    if (currentStep?.isFinal?.()) {
      return true;
    }
    return this.getStepByRelativeIndexOffset(currentStep, steps, '+', 1) !== undefined;
  }

  public static hasPreviousStep(currentStep: Step, steps: Step[]): boolean {
    if (currentStep?.isFinal?.()) {
      return false;
    }
    return this.getStepByRelativeIndexOffset(currentStep, steps, '-', 1) !== undefined;
  }

  public static getStepCount(steps: Step[]): number {
    return this.getActiveSteps(steps).length;
  }

  public static getActiveSteps(steps: Step[]): Step[] {
    return steps.filter((step) => {
      return step.isEnabled;
    });
  }

  public static getStepIndex(currentStep: Step, steps: Step[]): number {
    const activeSteps = this.getActiveSteps(steps);
    return findIndex(activeSteps, (step) => step.key === currentStep.key);
  }

  public static getStepByRelativeIndexOffset(
    currentStep: Step | undefined,
    steps: Step[],
    operator: string,
    offset: number
  ): Step | undefined {
    const activeSteps = this.getActiveSteps(steps);
    const currentStepIndex = findIndex(activeSteps, (step: Step) => step.key === currentStep?.key);
    switch (operator) {
      case '+':
        return currentStepIndex === undefined ? undefined : activeSteps[currentStepIndex + offset];
      case '-':
        return currentStepIndex === undefined ? undefined : activeSteps[currentStepIndex - offset];
      default:
        throw new Error(`${operator} is not a correct operator`);
    }
  }

  public static getNextIncompletedStep(steps: Step[]): Step | undefined {
    return this.getActiveSteps(steps).find((step) => !step.isCompleted);
  }

  public static getActiveStep(steps: Step[], stepKey: string): Step | undefined {
    return this.getActiveSteps(steps).find((step) => step.key === stepKey);
  }
}
