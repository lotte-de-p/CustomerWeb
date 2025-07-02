export class SetStepConfigurationAction {
    stepFlowConfig;
    static type = '[StepFlow] set the step configuration';
    constructor(stepFlowConfig) {
        this.stepFlowConfig = stepFlowConfig;
    }
}
export class ReportStepLoadTimingAction {
    reportStepLoadTime;
    static type = '[StepFlow] set whether to capture step load time or not';
    constructor(reportStepLoadTime) {
        this.reportStepLoadTime = reportStepLoadTime;
    }
}
export class SetStepNavigationStartTimeAction {
    static type = '[StepFlow] set step navigation start time in milliseconds';
}
export class SetStepsAction {
    steps;
    static type = '[StepFlow] set the steps for the stepflow';
    constructor(steps) {
        this.steps = steps;
    }
}
export class GoToNextStepAction {
    isStepComplete;
    static type = '[StepFlow] Go to next step';
    constructor(isStepComplete) {
        this.isStepComplete = isStepComplete;
    }
}
export class GoToFinalStepAction {
    static type = '[StepFlow] Go to final step';
}
export class GoToPreviousStepAction {
    static type = '[StepFlow] Go to previous step';
}
export class SetStepToEditAction {
    stepKey;
    static type = '[StepFlow] set the stepflow to a certain step so it can be edited';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
export class SetStepIncompleteAction {
    stepKey;
    static type = '[StepFlow] set a certain step to the incomplete state';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
export class SetStepCompleteAction {
    stepKey;
    static type = '[StepFlow] set a certain step to the complete state';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
export class InsertStepsBeforeAction {
    steps;
    stepKey;
    static type = '[StepFlow] Insert steps before a certain step with a certain key';
    constructor(steps, stepKey) {
        this.steps = steps;
        this.stepKey = stepKey;
    }
}
export class InsertStepsAfterAction {
    steps;
    stepKey;
    static type = '[StepFlow] Insert steps behind a certain step with a certain key';
    constructor(steps, stepKey) {
        this.steps = steps;
        this.stepKey = stepKey;
    }
}
export class RemoveStepsWithStepKeysAction {
    stepKeys;
    static type = '[StepFlow] Remove the steps with a key in the given list';
    constructor(stepKeys) {
        this.stepKeys = stepKeys;
    }
}
export class SetStepsEnabledState {
    steps;
    static type = '[StepFlow] Set the enabled states of multiple steps';
    constructor(steps) {
        this.steps = steps;
    }
}
export class UpdateStepAction {
    step;
    static type = '[StepFlow] Change the properties of a certain step';
    constructor(step) {
        this.step = step;
    }
}
export class UpdateCurrentStepImageAction {
    image;
    static type = '[StepFlow] Update the current step image';
    constructor(image) {
        this.image = image;
    }
}
export class SetCurrentDecisionOnStepFlowConfig {
    stepDecision;
    currentFlowConfig;
    static type = '[StepFlow] Set the current decision on a step flow config';
    constructor(stepDecision, currentFlowConfig) {
        this.stepDecision = stepDecision;
        this.currentFlowConfig = currentFlowConfig;
    }
}
export class ETFStepValidAction {
    payload;
    static type = '[StepFlow] Set ETF step valid';
    constructor(payload) {
        this.payload = payload;
    }
}
export class GoToStepAction {
    stepKey;
    static type = '[StepFlow] Change current step with given step by key';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
export class NotifyStepRendered {
    stepKey;
    static type = '[StepFlow] Notify step rendered';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1mbG93LmFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3N0b3JlL3N0ZXAtZmxvdy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE1BQU0sT0FBTywwQkFBMEI7SUFHbEI7SUFGWixNQUFNLENBQVUsSUFBSSxHQUFHLHVDQUF1QyxDQUFDO0lBRXRFLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7O0FBR3ZELE1BQU0sT0FBTywwQkFBMEI7SUFHbEI7SUFGWixNQUFNLENBQVUsSUFBSSxHQUFHLHlEQUF5RCxDQUFDO0lBRXhGLFlBQW1CLGtCQUEyQjtRQUEzQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVM7SUFBRyxDQUFDOztBQUdwRCxNQUFNLE9BQU8sZ0NBQWdDO0lBQ3BDLE1BQU0sQ0FBVSxJQUFJLEdBQUcsMkRBQTJELENBQUM7O0FBRzVGLE1BQU0sT0FBTyxjQUFjO0lBR047SUFGWixNQUFNLENBQVUsSUFBSSxHQUFHLDJDQUEyQyxDQUFDO0lBRTFFLFlBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQzs7QUFHdEMsTUFBTSxPQUFPLGtCQUFrQjtJQUdWO0lBRlosTUFBTSxDQUFVLElBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUUzRCxZQUFtQixjQUF3QjtRQUF4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVTtJQUFHLENBQUM7O0FBR2pELE1BQU0sT0FBTyxtQkFBbUI7SUFDdkIsTUFBTSxDQUFVLElBQUksR0FBRyw2QkFBNkIsQ0FBQzs7QUFHOUQsTUFBTSxPQUFPLHNCQUFzQjtJQUMxQixNQUFNLENBQVUsSUFBSSxHQUFHLGdDQUFnQyxDQUFDOztBQUdqRSxNQUFNLE9BQU8sbUJBQW1CO0lBR1g7SUFGWixNQUFNLENBQVUsSUFBSSxHQUFHLG1FQUFtRSxDQUFDO0lBRWxHLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQzs7QUFHeEMsTUFBTSxPQUFPLHVCQUF1QjtJQUdmO0lBRlosTUFBTSxDQUFVLElBQUksR0FBRyx1REFBdUQsQ0FBQztJQUV0RixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7O0FBR3hDLE1BQU0sT0FBTyxxQkFBcUI7SUFHYjtJQUZaLE1BQU0sQ0FBVSxJQUFJLEdBQUcscURBQXFELENBQUM7SUFFcEYsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDOztBQUd4QyxNQUFNLE9BQU8sdUJBQXVCO0lBSXpCO0lBQ0E7SUFKRixNQUFNLENBQVUsSUFBSSxHQUFHLGtFQUFrRSxDQUFDO0lBRWpHLFlBQ1MsS0FBYSxFQUNiLE9BQWU7UUFEZixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNyQixDQUFDOztBQUdOLE1BQU0sT0FBTyxzQkFBc0I7SUFJeEI7SUFDQTtJQUpGLE1BQU0sQ0FBVSxJQUFJLEdBQUcsa0VBQWtFLENBQUM7SUFFakcsWUFDUyxLQUFhLEVBQ2IsT0FBZTtRQURmLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3JCLENBQUM7O0FBR04sTUFBTSxPQUFPLDZCQUE2QjtJQUdyQjtJQUZaLE1BQU0sQ0FBVSxJQUFJLEdBQUcsMERBQTBELENBQUM7SUFFekYsWUFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFHWjtJQUZaLE1BQU0sQ0FBVSxJQUFJLEdBQUcscURBQXFELENBQUM7SUFFcEYsWUFBbUIsS0FBK0I7UUFBL0IsVUFBSyxHQUFMLEtBQUssQ0FBMEI7SUFBRyxDQUFDOztBQUd4RCxNQUFNLE9BQU8sZ0JBQWdCO0lBR1I7SUFGWixNQUFNLENBQVUsSUFBSSxHQUFHLG9EQUFvRCxDQUFDO0lBRW5GLFlBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQzs7QUFHbkMsTUFBTSxPQUFPLDRCQUE0QjtJQUdwQjtJQUZaLE1BQU0sQ0FBVSxJQUFJLEdBQUcsMENBQTBDLENBQUM7SUFFekUsWUFBbUIsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBRyxDQUFDOztBQUd0QyxNQUFNLE9BQU8sa0NBQWtDO0lBSXBDO0lBQ0E7SUFKRixNQUFNLENBQVUsSUFBSSxHQUFHLDJEQUEyRCxDQUFDO0lBRTFGLFlBQ1MsWUFBMEIsRUFDMUIsaUJBQWlDO1FBRGpDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBZ0I7SUFDdkMsQ0FBQzs7QUFHTixNQUFNLE9BQU8sa0JBQWtCO0lBR1Y7SUFGWixNQUFNLENBQVUsSUFBSSxHQUFHLCtCQUErQixDQUFDO0lBRTlELFlBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFBRyxDQUFDOztBQUd6QyxNQUFNLE9BQU8sY0FBYztJQUdOO0lBRlosTUFBTSxDQUFVLElBQUksR0FBRyx1REFBdUQsQ0FBQztJQUV0RixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7O0FBR3hDLE1BQU0sT0FBTyxrQkFBa0I7SUFHVjtJQUZaLE1BQU0sQ0FBVSxJQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFFaEUsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RlcCB9IGZyb20gJy4uL3N0ZXAubW9kZWwnO1xuaW1wb3J0IHsgU3RlcEZsb3dDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0ZXAtZmxvdy1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0ZXBEZWNpc2lvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RlcC1kZWNpc2lvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBFbmFibGVkQWN0aW9uU3RhdGUge1xuICBzdGVwS2V5OiBzdHJpbmc7XG4gIHN0YXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0U3RlcENvbmZpZ3VyYXRpb25BY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBzZXQgdGhlIHN0ZXAgY29uZmlndXJhdGlvbic7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0ZXBGbG93Q29uZmlnOiBTdGVwRmxvd0NvbmZpZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlcG9ydFN0ZXBMb2FkVGltaW5nQWN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTdGVwRmxvd10gc2V0IHdoZXRoZXIgdG8gY2FwdHVyZSBzdGVwIGxvYWQgdGltZSBvciBub3QnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZXBvcnRTdGVwTG9hZFRpbWU6IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRTdGVwTmF2aWdhdGlvblN0YXJ0VGltZUFjdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU3RlcEZsb3ddIHNldCBzdGVwIG5hdmlnYXRpb24gc3RhcnQgdGltZSBpbiBtaWxsaXNlY29uZHMnO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0U3RlcHNBY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBzZXQgdGhlIHN0ZXBzIGZvciB0aGUgc3RlcGZsb3cnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGVwczogU3RlcFtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR29Ub05leHRTdGVwQWN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTdGVwRmxvd10gR28gdG8gbmV4dCBzdGVwJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXNTdGVwQ29tcGxldGU/OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR29Ub0ZpbmFsU3RlcEFjdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU3RlcEZsb3ddIEdvIHRvIGZpbmFsIHN0ZXAnO1xufVxuXG5leHBvcnQgY2xhc3MgR29Ub1ByZXZpb3VzU3RlcEFjdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU3RlcEZsb3ddIEdvIHRvIHByZXZpb3VzIHN0ZXAnO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0U3RlcFRvRWRpdEFjdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU3RlcEZsb3ddIHNldCB0aGUgc3RlcGZsb3cgdG8gYSBjZXJ0YWluIHN0ZXAgc28gaXQgY2FuIGJlIGVkaXRlZCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0ZXBLZXk6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFN0ZXBJbmNvbXBsZXRlQWN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTdGVwRmxvd10gc2V0IGEgY2VydGFpbiBzdGVwIHRvIHRoZSBpbmNvbXBsZXRlIHN0YXRlJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RlcEtleTogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0U3RlcENvbXBsZXRlQWN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTdGVwRmxvd10gc2V0IGEgY2VydGFpbiBzdGVwIHRvIHRoZSBjb21wbGV0ZSBzdGF0ZSc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0ZXBLZXk6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIEluc2VydFN0ZXBzQmVmb3JlQWN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTdGVwRmxvd10gSW5zZXJ0IHN0ZXBzIGJlZm9yZSBhIGNlcnRhaW4gc3RlcCB3aXRoIGEgY2VydGFpbiBrZXknO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzdGVwczogU3RlcFtdLFxuICAgIHB1YmxpYyBzdGVwS2V5OiBzdHJpbmdcbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zZXJ0U3RlcHNBZnRlckFjdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU3RlcEZsb3ddIEluc2VydCBzdGVwcyBiZWhpbmQgYSBjZXJ0YWluIHN0ZXAgd2l0aCBhIGNlcnRhaW4ga2V5JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3RlcHM6IFN0ZXBbXSxcbiAgICBwdWJsaWMgc3RlcEtleTogc3RyaW5nXG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVN0ZXBzV2l0aFN0ZXBLZXlzQWN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tTdGVwRmxvd10gUmVtb3ZlIHRoZSBzdGVwcyB3aXRoIGEga2V5IGluIHRoZSBnaXZlbiBsaXN0JztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RlcEtleXM6IHN0cmluZ1tdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0U3RlcHNFbmFibGVkU3RhdGUge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBTZXQgdGhlIGVuYWJsZWQgc3RhdGVzIG9mIG11bHRpcGxlIHN0ZXBzJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RlcHM6IFN0ZXBFbmFibGVkQWN0aW9uU3RhdGVbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVN0ZXBBY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBDaGFuZ2UgdGhlIHByb3BlcnRpZXMgb2YgYSBjZXJ0YWluIHN0ZXAnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGVwOiBTdGVwKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQ3VycmVudFN0ZXBJbWFnZUFjdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbU3RlcEZsb3ddIFVwZGF0ZSB0aGUgY3VycmVudCBzdGVwIGltYWdlJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW1hZ2U6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldEN1cnJlbnREZWNpc2lvbk9uU3RlcEZsb3dDb25maWcge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBTZXQgdGhlIGN1cnJlbnQgZGVjaXNpb24gb24gYSBzdGVwIGZsb3cgY29uZmlnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3RlcERlY2lzaW9uOiBTdGVwRGVjaXNpb24sXG4gICAgcHVibGljIGN1cnJlbnRGbG93Q29uZmlnOiBTdGVwRmxvd0NvbmZpZ1xuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBFVEZTdGVwVmFsaWRBY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBTZXQgRVRGIHN0ZXAgdmFsaWQnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR29Ub1N0ZXBBY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBDaGFuZ2UgY3VycmVudCBzdGVwIHdpdGggZ2l2ZW4gc3RlcCBieSBrZXknO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGVwS2V5OiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZnlTdGVwUmVuZGVyZWQge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1N0ZXBGbG93XSBOb3RpZnkgc3RlcCByZW5kZXJlZCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0ZXBLZXk6IHN0cmluZykge31cbn1cbiJdfQ==