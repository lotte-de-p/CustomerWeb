import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { AppointmentPickerTypeEnum } from '../controls/appointment-picker/appointment-picker-type.enum';
import * as i0 from "@angular/core";
export declare class AppointmentPickerValidator extends Validators {
    static dayRequired(type: AppointmentPickerTypeEnum): ValidatorFn;
    private static checkDayType;
    private static checkMomentType;
    static newAppointmentRequired(control: AbstractControl): {
        moment_required: boolean;
        appointment_required?: undefined;
    } | {
        appointment_required: boolean;
        moment_required?: undefined;
    } | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppointmentPickerValidator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppointmentPickerValidator>;
}
//# sourceMappingURL=appointment-picker.validator.d.ts.map