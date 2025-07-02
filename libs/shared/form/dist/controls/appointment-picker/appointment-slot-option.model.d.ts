import { TimeslotMomentEnum } from '../../enums';
import { TransformedAvailabilityInterface } from '../../interfaces';
export declare class AppointmentSlotOption {
    date: Date | null;
    moment: TimeslotMomentEnum | null;
    slots?: TransformedAvailabilityInterface;
    constructor(date: Date | null, moment: TimeslotMomentEnum | null);
}
//# sourceMappingURL=appointment-slot-option.model.d.ts.map