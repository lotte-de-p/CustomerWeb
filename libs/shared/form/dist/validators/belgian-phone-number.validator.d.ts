import { AbstractControl, Validators } from '@angular/forms';
export declare class BelgianPhoneNumberValidator extends Validators {
    static validBelgianNumber(control: AbstractControl): {
        format: boolean;
    } | null;
    static validFixedLineBelgianNumber(control: AbstractControl): {
        format: boolean;
    } | null;
    static validFixedLineOrMobileNumber(control: AbstractControl): {
        format: boolean;
    } | null;
    static testMobileNumber(value: string): boolean;
}
//# sourceMappingURL=belgian-phone-number.validator.d.ts.map