import { ConstraintsService } from '../services/constraints/constraints.service';
import * as i0 from "@angular/core";
export declare class PhoneNumberTransformService {
    private readonly constraintsService;
    constructor(constraintsService: ConstraintsService);
    transform(phoneNumber: string): string;
    doNormaliseMsisdn(phoneNumber: string): string;
    autoFormatPhoneNumber(msisdn: string): string;
    private filterNationalPhoneNumber;
    private filterNationalMobileNumber;
    private filterBasePhoneNumber;
    private filterInternationalNumber;
    private contains;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneNumberTransformService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PhoneNumberTransformService>;
}
//# sourceMappingURL=phone-number-transform.service.d.ts.map