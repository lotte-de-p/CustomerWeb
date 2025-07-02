import { TimeSlotInterface, TimeslotMomentInterface, TransformedAvailabilityInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';
export declare class AppointmentTransformerSlot implements TimeSlotInterface {
    date: Date;
    timeSlots: TransformedAvailabilityInterface[];
    isCustomMoment?: boolean | undefined;
    hasAvailableMoments(): boolean;
    hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean;
    getTimeslotMoment(momentKey: TimeslotMomentEnum): TimeslotMomentInterface | undefined;
}
//# sourceMappingURL=appointment-transformer-slot.model.d.ts.map