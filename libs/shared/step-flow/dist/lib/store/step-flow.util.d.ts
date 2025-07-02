import { Step } from '../step.model';
export declare class StepFlowUtil {
    static hasNextStep(currentStep: Step, steps: Step[]): boolean;
    static hasPreviousStep(currentStep: Step, steps: Step[]): boolean;
    static getStepCount(steps: Step[]): number;
    static getActiveSteps(steps: Step[]): Step[];
    static getStepIndex(currentStep: Step, steps: Step[]): number;
    static getStepByRelativeIndexOffset(currentStep: Step | undefined, steps: Step[], operator: string, offset: number): Step | undefined;
    static getNextIncompletedStep(steps: Step[]): Step | undefined;
    static getActiveStep(steps: Step[], stepKey: string): Step | undefined;
}
//# sourceMappingURL=step-flow.util.d.ts.map