import { AppointmentTransformerSlot } from '../../../models';
import { TimeslotMomentEnum } from '../../../enums';
export declare class AppointmentPickerUtil {
    static compareDate(appointmentA: AppointmentTransformerSlot, appointmentB: AppointmentTransformerSlot): boolean;
    static getInitialSlideIndex(selectedSlotIndex: number, slidesToScroll: number): number;
    static getSelectedDateSlotIndex(timeslots: AppointmentTransformerSlot[], selectedTimeslot: AppointmentTransformerSlot): number;
    static getTimeslotLabel(timeslot: TimeslotMomentEnum, messageGroup?: string, suffix?: string): string;
}
//# sourceMappingURL=appointment-picker.util.d.ts.map