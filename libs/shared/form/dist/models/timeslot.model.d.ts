import { TimeSlotInterface, TimeslotMomentInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';
export declare class CafeTimeSlot implements TimeSlotInterface {
    date: Date;
    moments: TimeslotMomentEnum[];
    momentObjects?: TimeslotMomentInterface[];
    isCustomMoment: boolean;
    constructor(date?: Date, moments?: TimeslotMomentEnum[]);
    hasAvailableMoments(): boolean;
    hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean;
}
//# sourceMappingURL=timeslot.model.d.ts.map