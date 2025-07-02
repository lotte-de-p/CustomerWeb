import * as Factory from 'factory.ts';
import { TimeslotAvailabilityInterface } from '.';
import { TimeslotMomentEnum } from '../../../enums';

export const timeslotAvailabilityInterfaceFactory = Factory.Sync.makeFactory<TimeslotAvailabilityInterface>({
  timeslot: TimeslotMomentEnum.MORNING,
  available: true,
  displayTime: '10:00',
  label: 'morning',
});
