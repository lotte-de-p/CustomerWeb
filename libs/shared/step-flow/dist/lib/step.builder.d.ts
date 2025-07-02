import { Step } from './step.model';
import { Observable } from 'rxjs';
import { StepLayoutOptionsInterface } from './step-layout-options.interface';
import { StepAnalyticsOptions } from './interfaces/step-analytics-options.interface';
import { Type } from '@angular/core';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
export declare class StepBuilder {
    private readonly _step;
    private constructor();
    static builder(key: string): StepBuilder;
    withLayoutOptions(layout?: StepLayoutOptionsInterface): StepBuilder;
    withAnalyticsOptions(analyticsOptions?: StepAnalyticsOptions): StepBuilder;
    withImage(image?: string): StepBuilder;
    withComponent(selector: unknown): StepBuilder;
    withOrder(order: number): StepBuilder;
    withEnabledState(state?: boolean): StepBuilder;
    withTemplate(template: Type<unknown>): StepBuilder;
    withCompletedState(state?: boolean): StepBuilder;
    withPreviousStepDisabled(state?: boolean): StepBuilder;
    withFinalState(): StepBuilder;
    withConfirmState(): StepBuilder;
    withOverwriteFlowLabel(flowLabel: string): StepBuilder;
    withTitleParameterValue(value: Observable<string>): StepBuilder;
    withChosenProductValue(value: Observable<OmapiProduct | unknown>): StepBuilder;
    withMobileImage(value: string): StepBuilder;
    withScrollableImage(scrollable?: boolean): StepBuilder;
    withAsAlternativeFirstStep(): StepBuilder;
    build(): Step;
}
//# sourceMappingURL=step.builder.d.ts.map