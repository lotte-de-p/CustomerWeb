import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AUTH_SERVICE } from '../tokens';
import * as i0 from "@angular/core";
export class AuthenticationState {
    injector;
    authenticatedSubject = new ReplaySubject(1);
    isStatusKnown = false;
    constructor(injector) {
        this.injector = injector;
    }
    setAuthenticated(authenticated) {
        this.authenticatedSubject.next(authenticated);
        this.isStatusKnown = true;
    }
    getAuthenticated() {
        if (!this.isStatusKnown) {
            const authenticationService = this.injector.get(AUTH_SERVICE);
            return authenticationService.getAuthenticationStatus();
        }
        return this.authenticatedSubject.pipe(take(1));
    }
    static ɵfac = function AuthenticationState_Factory(t) { return new (t || AuthenticationState)(i0.ɵɵinject(i0.Injector)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthenticationState, factory: AuthenticationState.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthenticationState, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.Injector }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uL3N0YXRlL2F1dGhlbnRpY2F0aW9uLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFLekMsTUFBTSxPQUFPLG1CQUFtQjtJQUtEO0lBSlosb0JBQW9CLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7SUFFOUQsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5QixZQUE2QixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVuRCxnQkFBZ0IsQ0FBQyxhQUFzQjtRQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsT0FBTyxxQkFBcUIsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ3pELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs2RUFsQlUsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNOztpRkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBVVRIX1NFUlZJQ0UgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TdGF0ZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXV0aGVudGljYXRlZFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcblxuICBwcml2YXRlIGlzU3RhdHVzS25vd24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBzZXRBdXRoZW50aWNhdGVkKGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWRTdWJqZWN0Lm5leHQoYXV0aGVudGljYXRlZCk7XG4gICAgdGhpcy5pc1N0YXR1c0tub3duID0gdHJ1ZTtcbiAgfVxuXG4gIGdldEF1dGhlbnRpY2F0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKCF0aGlzLmlzU3RhdHVzS25vd24pIHtcbiAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFVVEhfU0VSVklDRSk7XG4gICAgICByZXR1cm4gYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEF1dGhlbnRpY2F0aW9uU3RhdHVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWRTdWJqZWN0LnBpcGUodGFrZSgxKSk7XG4gIH1cbn1cbiJdfQ==