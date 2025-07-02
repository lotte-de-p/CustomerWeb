import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./missing-translation.service";
export class TelenetMissingTranslationHandler {
    telenetMissingTranslationService;
    handle(params) {
        return this.telenetMissingTranslationService.notTranslated(params.key);
    }
    constructor(telenetMissingTranslationService) {
        this.telenetMissingTranslationService = telenetMissingTranslationService;
    }
    static ɵfac = function TelenetMissingTranslationHandler_Factory(t) { return new (t || TelenetMissingTranslationHandler)(i0.ɵɵinject(i1.TelenetMissingTranslationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TelenetMissingTranslationHandler, factory: TelenetMissingTranslationHandler.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TelenetMissingTranslationHandler, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.TelenetMissingTranslationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2luZy10cmFuc2xhdGlvbi5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pMThuL21pc3NpbmctdHJhbnNsYXRpb24uaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLGdDQUFnQztJQUtkO0lBSjdCLE1BQU0sQ0FBQyxNQUF1QztRQUM1QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxZQUE2QixnQ0FBa0U7UUFBbEUscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztJQUFHLENBQUM7MEZBTHhGLGdDQUFnQztnRUFBaEMsZ0NBQWdDLFdBQWhDLGdDQUFnQyxtQkFGL0IsTUFBTTs7aUZBRVAsZ0NBQWdDO2NBSDVDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbGVuZXRNaXNzaW5nVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9taXNzaW5nLXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGVsZW5ldE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnRlbGVuZXRNaXNzaW5nVHJhbnNsYXRpb25TZXJ2aWNlLm5vdFRyYW5zbGF0ZWQocGFyYW1zLmtleSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRlbGVuZXRNaXNzaW5nVHJhbnNsYXRpb25TZXJ2aWNlOiBUZWxlbmV0TWlzc2luZ1RyYW5zbGF0aW9uU2VydmljZSkge31cbn1cbiJdfQ==