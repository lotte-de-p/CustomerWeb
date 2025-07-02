import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CommonModule } from '@angular/common';

class AccountEventDelegator {
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

class AccountModule {
    static ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AccountModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountModule, { imports: [CommonModule] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountEventDelegator, AccountModule };
//# sourceMappingURL=telenet-ng-lib-account.mjs.map
