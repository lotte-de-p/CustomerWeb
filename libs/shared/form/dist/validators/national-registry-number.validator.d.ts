import { AbstractControl, Validators } from '@angular/forms';
export declare class NationalRegistryNumberValidator extends Validators {
    static isNumberValid(control: AbstractControl): {
        invalidNrn: boolean;
    } | null;
    static isValidNrn(value: string): boolean;
}
//# sourceMappingURL=national-registry-number.validator.d.ts.map