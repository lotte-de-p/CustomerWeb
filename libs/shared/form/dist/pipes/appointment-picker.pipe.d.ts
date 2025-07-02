import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentSlotOption } from '../controls';
import * as i0 from "@angular/core";
export declare class AppointmentPickerPipe implements PipeTransform {
    private readonly datePipe;
    constructor(datePipe: DatePipe);
    transform(appointmentSlot: AppointmentSlotOption, _args?: unknown[]): string;
    private transformStartTimeToString;
    private transformEndTimeToString;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppointmentPickerPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AppointmentPickerPipe, "appointmentFormat", false>;
}
//# sourceMappingURL=appointment-picker.pipe.d.ts.map