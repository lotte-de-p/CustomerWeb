import { CafeTimeSlot } from './timeslot.model';
export declare class CafeTimeSlotList {
    firstDays: Date[];
    timeslots: CafeTimeSlot[];
    firstAvailableSlotMonth: number;
    getFirstTimeslot(): CafeTimeSlot;
    getLastTimeslot(): CafeTimeSlot;
    private compareTimeslot;
}
//# sourceMappingURL=cafe-timeslot-list.model.d.ts.map