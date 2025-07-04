import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FormErrorService } from '@telenet/ng-lib-form';
import { Store } from '@ngxs/store';
import { NavigationBarNextLabelEnum } from './navigation-bar-next-label.enum';
import { Step } from '../step.model';
import { LoaderService } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
export declare class NavigationBarComponent implements OnInit {
    private readonly store;
    private readonly formErrorService;
    private readonly loaderService;
    private readonly changeDetectorRef;
    dynamicShadow: boolean;
    showStepCounter: boolean;
    showStepProgressBar: boolean;
    showSalesContactNumber: boolean;
    styling: 'default' | 'buttons';
    buttonTextOverride: string;
    messageGroup: string;
    currentStep: Step;
    isConfirmationStep: boolean;
    stepCount: number;
    currentStepNumber: number;
    progressPercentage: string;
    hasNextStep: boolean;
    hasPreviousStep: boolean;
    previousStepDisabled: boolean;
    isLoading: boolean;
    nextStepLabel: NavigationBarNextLabelEnum;
    alternativeFirstStep: boolean;
    buttonTypeOverride: NavigationBarNextLabelEnum;
    constructor(store: Store, formErrorService: FormErrorService, loaderService: LoaderService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    goToNextStep(): void;
    private calculateProgress;
    getNextLabel(): NavigationBarNextLabelEnum;
    private isCurrentStepFirstStep;
    goToPreviousStep(): void;
    isCurrentStepAlternativeFirstStep(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationBarComponent, "app-step-navigation-bar-monorepo", never, { "dynamicShadow": { "alias": "dynamicShadow"; "required": false; }; "showStepCounter": { "alias": "showStepCounter"; "required": false; }; "showStepProgressBar": { "alias": "showStepProgressBar"; "required": false; }; "showSalesContactNumber": { "alias": "showSalesContactNumber"; "required": false; }; "styling": { "alias": "styling"; "required": false; }; "buttonTextOverride": { "alias": "buttonTextOverride"; "required": false; }; "messageGroup": { "alias": "messageGroup"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=navigation-bar.component.d.ts.map