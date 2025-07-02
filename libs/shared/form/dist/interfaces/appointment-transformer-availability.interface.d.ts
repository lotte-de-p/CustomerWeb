import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum } from '../enums/timeslot.enum';
import { TimeslotMomentInterface } from './timeslot-moment.interface';
export interface TransformedAvailabilityInterface {
    code?: TimeslotMomentEnum;
    timeslotMoment?: TimeslotMomentInterface;
    specUrl?: string;
    availabiltyId?: string;
    timeFormat?: string;
    productInfo?: OmapiProduct;
}
//# sourceMappingURL=appointment-transformer-availability.interface.d.ts.map