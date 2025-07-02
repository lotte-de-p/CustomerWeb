import { Observable } from 'rxjs';
import { TimeslotMomentEnum } from '../enums';
import { TimeslotMomentInterface } from '../interfaces';
import { AppointmentTransformerSlot } from '../models';
export declare class TimeslotUtil {
    static stringToEnum(moment: string): TimeslotMomentEnum | undefined;
    static enumToString(moment: TimeslotMomentEnum): string | undefined;
    static enumToMomentObject(moment: TimeslotMomentEnum | null): TimeslotMomentInterface | undefined;
    static objectToEnum(moment: TimeslotMomentInterface): TimeslotMomentEnum | undefined;
    static calculateTimeSlotsAvailability(slots: AppointmentTransformerSlot[], disableNoAvailableSlots?: boolean): Observable<boolean>;
    static shouldUpdateTimeSlots(updateSlots: AppointmentTransformerSlot[], timeSlots: AppointmentTransformerSlot[]): boolean;
}
//# sourceMappingURL=timeslot.util.d.ts.map