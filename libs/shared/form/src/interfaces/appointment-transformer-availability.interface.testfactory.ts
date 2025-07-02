import * as Factory from 'factory.ts';
import { OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum } from '../enums/timeslot.enum';
import { TransformedAvailabilityInterface } from './appointment-transformer-availability.interface';

export const transformedAvailabilityInterfaceTestfactory = Factory.Sync.makeFactory<TransformedAvailabilityInterface>({
  code: TimeslotMomentEnum.LUNCH,
  timeslotMoment: {
    key: TimeslotMomentEnum.LUNCH,
    startHours: '11',
    startMinutes: '00',
    endHours: '13',
    endMinutes: '00',
  },
  specUrl: 'http://specurl.test/test',
  availabiltyId: '123456789',
  timeFormat: '00+00',
  productInfo: OmapiProductTestfactory.build(),
});
