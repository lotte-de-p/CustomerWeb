import * as Factory from 'factory.ts';
import { AppointmentTransformerSlotModelTestFactory } from '../../../models/appointment-transformer-slot.model.testfactory';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentInterface } from '.';

export const appointmentInterfaceFactory = Factory.Sync.makeFactory<AppointmentInterface>({
  date: AppointmentTransformerSlotModelTestFactory.build(),
  moment: TimeslotMomentEnum.MORNING,
});
