import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum } from '../enums/timeslot.enum';

export class NCTimeSlotAvailability {
  timeFormat: string;
  code?: TimeslotMomentEnum;
  specUrl: string;
  availabilityId: string;
  productInfo?: OmapiProduct;
}
