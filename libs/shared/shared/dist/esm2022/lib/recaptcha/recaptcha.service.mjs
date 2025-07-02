import { Inject, Injectable } from '@angular/core';
import { bindCallback, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class RecaptchaService {
    window;
    constructor(window) {
        this.window = window;
    }
    getRecaptchaToken(action, siteKey) {
        const recaptchaReadyAsObservable = bindCallback((callback) => this.getRecaptcha().ready(callback));
        return recaptchaReadyAsObservable().pipe(mergeMap(() => from(this.executeRecaptcha(action, siteKey))));
    }
    getRecaptcha() {
        return this.window['grecaptcha'];
    }
    executeRecaptcha(action, siteKey) {
        return this.getRecaptcha().execute(siteKey, { action: action });
    }
    static ɵfac = function RecaptchaService_Factory(t) { return new (t || RecaptchaService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecaptchaService, factory: RecaptchaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecaptchaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXB0Y2hhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3JlY2FwdGNoYS9yZWNhcHRjaGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBTTFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDb0I7SUFBL0MsWUFBK0MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRWpFLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxPQUFlO1FBQy9DLE1BQU0sMEJBQTBCLEdBQUcsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFbkcsT0FBTywwQkFBMEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVPLFlBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsT0FBZTtRQUN0RCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzswRUFmVSxnQkFBZ0IsY0FDUCxRQUFRO2dFQURqQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07O2lGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUVjLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmluZENhbGxiYWNrLCBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdSZWNhcHRjaGFJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvZ3JlY2FwdGNoYS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVjYXB0Y2hhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBXaW5kb3cpIHt9XG5cbiAgZ2V0UmVjYXB0Y2hhVG9rZW4oYWN0aW9uOiBzdHJpbmcsIHNpdGVLZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVjYXB0Y2hhUmVhZHlBc09ic2VydmFibGUgPSBiaW5kQ2FsbGJhY2soKGNhbGxiYWNrKSA9PiB0aGlzLmdldFJlY2FwdGNoYSgpLnJlYWR5KGNhbGxiYWNrKSk7XG5cbiAgICByZXR1cm4gcmVjYXB0Y2hhUmVhZHlBc09ic2VydmFibGUoKS5waXBlKG1lcmdlTWFwKCgpID0+IGZyb20odGhpcy5leGVjdXRlUmVjYXB0Y2hhKGFjdGlvbiwgc2l0ZUtleSkpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlY2FwdGNoYSgpOiBHUmVjYXB0Y2hhSW50ZXJmYWNlIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dbJ2dyZWNhcHRjaGEnXTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVJlY2FwdGNoYShhY3Rpb246IHN0cmluZywgc2l0ZUtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWNhcHRjaGEoKS5leGVjdXRlKHNpdGVLZXksIHsgYWN0aW9uOiBhY3Rpb24gfSk7XG4gIH1cbn1cbiJdfQ==