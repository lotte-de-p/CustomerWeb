import { ValidatorFn, Validators } from '@angular/forms';
export declare class NetworkNameValidator extends Validators {
    static validNetworkName(forbiddenNames: string[], forbiddenWords: string[]): ValidatorFn;
    private static notStartingWithSpace;
    private static hasForbiiddenSSIDs;
}
//# sourceMappingURL=network-name.validator.d.ts.map