import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ConstraintsService {
    isValidationError(fieldName: string, formGroup: FormGroup, errorType: string): boolean;
    isValidationErrorWhenPristine(fieldName: string, formGroup: FormGroup, errorType: string): boolean;
    isValidAddressNumber(val: string): boolean;
    isValidNationalMobileNumber(value: string): boolean;
    isValidInternationalNumber(number: string): boolean;
    getFormattedNRN(nrn: string): string;
    private removeSpecialCharacters;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConstraintsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConstraintsService>;
}
//# sourceMappingURL=constraints.service.d.ts.map