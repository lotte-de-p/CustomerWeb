import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class AccountEventDelegator {
    billingAccount$;
    constructor() {
        this.billingAccount$ = new ReplaySubject(1);
    }
    billingAccount() {
        return this.billingAccount$;
    }
    delegateBillingAccount(billingAccount) {
        this.billingAccount$.next(billingAccount);
    }
    delegateBillingAccountError(error) {
        this.billingAccount$.error(error);
    }
    static ɵfac = function AccountEventDelegator_Factory(t) { return new (t || AccountEventDelegator)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AccountEventDelegator, factory: AccountEventDelegator.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountEventDelegator, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1ldmVudC5kZWxlZ2F0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2FjY291bnQtZXZlbnQuZGVsZWdhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFPckMsTUFBTSxPQUFPLHFCQUFxQjtJQUNmLGVBQWUsQ0FBcUM7SUFFckU7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxjQUFtQztRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkJBQTJCLENBQUMsS0FBbUI7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzsrRUFqQlUscUJBQXFCO2dFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNOztpRkFFUCxxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQmFzaWNCaWxsaW5nQWNjb3VudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYmFzaWMtYmlsbGluZy1hY2NvdW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBBY2NvdW50RXJyb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FjY291bnQuZXJyb3InO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3VudEV2ZW50RGVsZWdhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBiaWxsaW5nQWNjb3VudCQ6IFJlcGxheVN1YmplY3Q8QmFzaWNCaWxsaW5nQWNjb3VudD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaWxsaW5nQWNjb3VudCQgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgfVxuXG4gIGJpbGxpbmdBY2NvdW50KCk6IFJlcGxheVN1YmplY3Q8QmFzaWNCaWxsaW5nQWNjb3VudD4ge1xuICAgIHJldHVybiB0aGlzLmJpbGxpbmdBY2NvdW50JDtcbiAgfVxuXG4gIGRlbGVnYXRlQmlsbGluZ0FjY291bnQoYmlsbGluZ0FjY291bnQ6IEJhc2ljQmlsbGluZ0FjY291bnQpOiB2b2lkIHtcbiAgICB0aGlzLmJpbGxpbmdBY2NvdW50JC5uZXh0KGJpbGxpbmdBY2NvdW50KTtcbiAgfVxuXG4gIGRlbGVnYXRlQmlsbGluZ0FjY291bnRFcnJvcihlcnJvcjogQWNjb3VudEVycm9yKTogdm9pZCB7XG4gICAgdGhpcy5iaWxsaW5nQWNjb3VudCQuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iXX0=