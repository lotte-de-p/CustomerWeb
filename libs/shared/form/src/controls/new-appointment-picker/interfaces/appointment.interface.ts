import { AppointmentTransformerSlot } from '../../../models/appointment-transformer-slot.model';
import { TimeslotMomentEnum } from '../../../enums/timeslot.enum';

export interface AppointmentInterface {
  date?: AppointmentTransformerSlot;
  moment?: TimeslotMomentEnum;
}
