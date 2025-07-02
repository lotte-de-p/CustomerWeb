import { makeFactory } from 'factory.ts';
import { SimType } from '../enums/sim-type.enum';
import { SimStatus } from '../enums/sim-status.enum';
import { RawMobileLine } from './raw/raw-mobile-line.interface';
import { RawSimCard } from './raw/raw-sim-card-interface';

export const simCardFactory = makeFactory<RawSimCard>({
  iccid: '123456789',
  pin: '1234',
  puk: '123456',
  type: SimType.PHYSICAL_SIM,
  status: SimStatus.COMPLETED,
  eSimProfileData: null,
});

export const mobileLineFactory = makeFactory<RawMobileLine>({
  name: 'Test Line',
  tariffPlan: 'Test Plan',
  dataOnly: false,
  eSimAvailable: true,
  isPorting: undefined,
  isPortingDetailsProvided: undefined,
  msisdn: '0499999999',
  suspended: false,
  identityId: '123456789',
  status: SimStatus.COMPLETED,
  simCards: [simCardFactory.build()],
});

export const mobileLineSuspended = mobileLineFactory.build({
  name: 'Suspended Line',
  msisdn: '0469423654',
  suspended: true,
});
