import { ReplaySubject } from 'rxjs';
import { BasicBillingAccount } from '../interfaces/basic-billing-account.interface';
import { AccountError } from '../interfaces/account.error';
import * as i0 from "@angular/core";
export declare class AccountEventDelegator {
    private readonly billingAccount$;
    constructor();
    billingAccount(): ReplaySubject<BasicBillingAccount>;
    delegateBillingAccount(billingAccount: BasicBillingAccount): void;
    delegateBillingAccountError(error: AccountError): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountEventDelegator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountEventDelegator>;
}
//# sourceMappingURL=account-event.delegator.d.ts.map