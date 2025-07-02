import { CafeTimeSlot } from './timeslot.model';
import { TimeslotMomentInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';

export class CallexcellTimeslot extends CafeTimeSlot {
  override momentObjects?: TimeslotMomentInterface[] = [];
  override isCustomMoment = true;

  constructor(date?: Date, moments?: TimeslotMomentEnum[], momentObjects?: TimeslotMomentInterface[]) {
    super(date, moments);

    if (momentObjects) {
      this.momentObjects = momentObjects;
    }
  }
}
