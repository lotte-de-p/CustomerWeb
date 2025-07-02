import { AppointmentTransformerModel } from '../models';
import { AppointmentPickerConsumerTypeEnum, TimeSlotInterface } from '../interfaces';
export declare class AppointmentTransformerUtil {
    static doTransform(timeSlots: TimeSlotInterface[], consumerType: AppointmentPickerConsumerTypeEnum): AppointmentTransformerModel;
    private static doCafeTransform;
    private static getCafeTransformedAvailability;
    private static getCafeAvailability;
    private static doNCTransform;
    private static getNCTransformedAvailability;
    private static getNCAvailability;
}
//# sourceMappingURL=appointment-transformer.util.d.ts.map