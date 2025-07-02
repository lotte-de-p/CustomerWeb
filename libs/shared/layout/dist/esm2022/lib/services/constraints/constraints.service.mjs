import { Injectable } from '@angular/core';
import { RegexConstants } from '../../constants/regex.constant';
import * as i0 from "@angular/core";
export class ConstraintsService {
    isValidationError(fieldName, formGroup, errorType) {
        let isValid = false;
        const control = formGroup.get(fieldName);
        if (control && control.errors) {
            isValid = (control.touched || control.dirty) && control.errors[errorType];
        }
        return isValid;
    }
    isValidationErrorWhenPristine(fieldName, formGroup, errorType) {
        const control = formGroup.get(fieldName);
        return control && control.errors ? control.errors[errorType] : false;
    }
    isValidAddressNumber(val) {
        return RegexConstants.ADDRESS_NUMBER.test(val);
    }
    isValidNationalMobileNumber(value) {
        return RegexConstants.NATIONAL_MOBILE_NUMBER.test(value);
    }
    isValidInternationalNumber(number) {
        const value = number.replace(/[-/\\,\s.]/g, '');
        return RegexConstants.INTERNATIONAL_NUMBER.test(value);
    }
    getFormattedNRN(nrn) {
        nrn = this.removeSpecialCharacters(nrn);
        const nrnLength = nrn && nrn.length;
        if (nrnLength === 11) {
            return (nrn.slice(0, 2) +
                '.' +
                nrn.slice(2, 4) +
                '.' +
                nrn.slice(4, 6) +
                '-' +
                nrn.slice(6, 9) +
                '.' +
                nrn.slice(9, nrnLength));
        }
        return nrn;
    }
    removeSpecialCharacters(val) {
        return val ? val.replace(/[^0-9a-z]/gi, '') : '';
    }
    static ɵfac = function ConstraintsService_Factory(t) { return new (t || ConstraintsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConstraintsService, factory: ConstraintsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConstraintsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RyYWludHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY29uc3RyYWludHMvY29uc3RyYWludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFLaEUsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixpQkFBaUIsQ0FBQyxTQUFpQixFQUFFLFNBQW9CLEVBQUUsU0FBaUI7UUFDMUUsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw2QkFBNkIsQ0FBQyxTQUFpQixFQUFFLFNBQW9CLEVBQUUsU0FBaUI7UUFDdEYsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdkUsQ0FBQztJQUVELG9CQUFvQixDQUFDLEdBQVc7UUFDOUIsT0FBTyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkJBQTJCLENBQUMsS0FBYTtRQUN2QyxPQUFPLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDBCQUEwQixDQUFDLE1BQWM7UUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEQsT0FBTyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxlQUFlLENBQUMsR0FBVztRQUN6QixHQUFHLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksU0FBUyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FDTCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsR0FBRztnQkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsR0FBRztnQkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsR0FBRztnQkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsR0FBRztnQkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FDeEIsQ0FBQztRQUNKLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxHQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25ELENBQUM7NEVBakRVLGtCQUFrQjtnRUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs7aUZBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlZ2V4Q29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3JlZ2V4LmNvbnN0YW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnN0cmFpbnRzU2VydmljZSB7XG4gIGlzVmFsaWRhdGlvbkVycm9yKGZpZWxkTmFtZTogc3RyaW5nLCBmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZXJyb3JUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkTmFtZSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5lcnJvcnMpIHtcbiAgICAgIGlzVmFsaWQgPSAoY29udHJvbC50b3VjaGVkIHx8IGNvbnRyb2wuZGlydHkpICYmIGNvbnRyb2wuZXJyb3JzW2Vycm9yVHlwZV07XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgaXNWYWxpZGF0aW9uRXJyb3JXaGVuUHJpc3RpbmUoZmllbGROYW1lOiBzdHJpbmcsIGZvcm1Hcm91cDogRm9ybUdyb3VwLCBlcnJvclR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkTmFtZSk7XG4gICAgcmV0dXJuIGNvbnRyb2wgJiYgY29udHJvbC5lcnJvcnMgPyBjb250cm9sLmVycm9yc1tlcnJvclR5cGVdIDogZmFsc2U7XG4gIH1cblxuICBpc1ZhbGlkQWRkcmVzc051bWJlcih2YWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBSZWdleENvbnN0YW50cy5BRERSRVNTX05VTUJFUi50ZXN0KHZhbCk7XG4gIH1cblxuICBpc1ZhbGlkTmF0aW9uYWxNb2JpbGVOdW1iZXIodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBSZWdleENvbnN0YW50cy5OQVRJT05BTF9NT0JJTEVfTlVNQkVSLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgaXNWYWxpZEludGVybmF0aW9uYWxOdW1iZXIobnVtYmVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IG51bWJlci5yZXBsYWNlKC9bLS9cXFxcLFxccy5dL2csICcnKTtcbiAgICByZXR1cm4gUmVnZXhDb25zdGFudHMuSU5URVJOQVRJT05BTF9OVU1CRVIudGVzdCh2YWx1ZSk7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWROUk4obnJuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIG5ybiA9IHRoaXMucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMobnJuKTtcbiAgICBjb25zdCBucm5MZW5ndGggPSBucm4gJiYgbnJuLmxlbmd0aDtcbiAgICBpZiAobnJuTGVuZ3RoID09PSAxMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbnJuLnNsaWNlKDAsIDIpICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgbnJuLnNsaWNlKDIsIDQpICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgbnJuLnNsaWNlKDQsIDYpICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgbnJuLnNsaWNlKDYsIDkpICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgbnJuLnNsaWNlKDksIG5ybkxlbmd0aClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBucm47XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsID8gdmFsLnJlcGxhY2UoL1teMC05YS16XS9naSwgJycpIDogJyc7XG4gIH1cbn1cbiJdfQ==