import { SimStatus } from '../../enums/sim-status.enum';
import { RawSimCard } from './raw-sim-card-interface';

export interface RawMobileLine {
  tariffPlan: string | null;
  dataOnly: boolean;
  name: string | null;
  msisdn: string;
  suspended: boolean;
  identityId: string | null;
  eSimAvailable: boolean;
  isPorting: boolean | undefined;
  isPortingDetailsProvided: boolean | undefined;
  simCards: RawSimCard[];
  status: SimStatus;
}
