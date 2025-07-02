import { CafeTimeSlot } from './timeslot.model';
import { TimeslotMomentInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';
export declare class CallexcellTimeslot extends CafeTimeSlot {
    momentObjects?: TimeslotMomentInterface[];
    isCustomMoment: boolean;
    constructor(date?: Date, moments?: TimeslotMomentEnum[], momentObjects?: TimeslotMomentInterface[]);
}
//# sourceMappingURL=callexcell-timeslot.model.d.ts.map