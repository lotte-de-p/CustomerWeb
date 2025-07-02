import { Store } from '@ngxs/store';
import { StepContainerDirective } from './step-container.directive';
import { OnInit } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { Step } from '../step.model';
import { AbstractBaseComponent, LoaderService } from '@telenet/ng-lib-page';
import { StepFlowAnalyticsConfig } from '../interfaces/step-flow-analytics-config.interface';
import * as i0 from "@angular/core";
export declare class StepContainerComponent extends AbstractBaseComponent implements OnInit {
    private readonly store;
    private readonly loaderService;
    private readonly dataLayerService;
    stepFlowAnalyticsConfig: StepFlowAnalyticsConfig;
    messageGroup: string;
    stepContainer: StepContainerDirective;
    previousStep: Step;
    stepNavigationEndTime: number;
    constructor(store: Store, loaderService: LoaderService, dataLayerService: DataLayerService);
    ngOnInit(): void;
    private getLastAPIExecutionTime;
    private reportStepLoadTime;
    private delayStepLoadTime;
    private fireStepLoadTimeEvent;
    private getAnalyticsStepName;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepContainerComponent, "app-step-container", never, { "stepFlowAnalyticsConfig": { "alias": "stepFlowAnalyticsConfig"; "required": false; }; "messageGroup": { "alias": "messageGroup"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=step-container.component.d.ts.map