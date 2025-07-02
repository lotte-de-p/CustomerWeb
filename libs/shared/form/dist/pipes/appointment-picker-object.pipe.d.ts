import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentSlotOption } from '../controls';
import * as i0 from "@angular/core";
export interface AppointmentPickerObject {
    dateString: string;
    startTimeString: string;
    endTimeString: string;
}
export declare class AppointmentPickerObjectPipe implements PipeTransform {
    private readonly datePipe;
    constructor(datePipe: DatePipe);
    transform(appointmentSlot: AppointmentSlotOption, _args?: unknown): AppointmentPickerObject;
    private transformStartTimeToString;
    private transformEndTimeToString;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppointmentPickerObjectPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AppointmentPickerObjectPipe, "appointmentObject", false>;
}
//# sourceMappingURL=appointment-picker-object.pipe.d.ts.map