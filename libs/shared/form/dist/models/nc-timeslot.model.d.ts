import { NCTimeSlotAvailability } from './timeslot-availability.model';
import { TimeslotMomentEnum } from '../enums';
import { TimeSlotInterface } from '../interfaces';
export declare class NCTimeSlot implements TimeSlotInterface {
    date: Date;
    timeSlots: NCTimeSlotAvailability[];
    hasAvailableMoments(): boolean;
    hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean;
}
//# sourceMappingURL=nc-timeslot.model.d.ts.map