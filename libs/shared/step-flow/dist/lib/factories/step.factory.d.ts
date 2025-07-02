import { Store } from '@ngxs/store';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { Step } from '../step.model';
import { StepConfig } from '../interfaces/step-config.interface';
import { StepDecision } from '../interfaces/step-decision.interface';
import { TemplateFactory } from './template.factory';
import * as i0 from "@angular/core";
export declare class StepFactory {
    private readonly templateFactory;
    constructor(templateFactory: TemplateFactory);
    createFlow(store: Store, stepFlowConfig: StepFlowConfig): Step[];
    createStep(stepConfig: StepConfig): Step;
    decideFlow(store: Store, stepDecision: StepDecision): Step[];
    static ɵfac: i0.ɵɵFactoryDeclaration<StepFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepFactory>;
}
//# sourceMappingURL=step.factory.d.ts.map