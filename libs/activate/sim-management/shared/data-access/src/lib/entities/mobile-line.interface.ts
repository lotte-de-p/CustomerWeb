import { SimStatus } from '../enums/sim-status.enum';
import { SimCard } from './sim-card.interface';

export interface MobileLine {
  tariffPlan: string | null;
  isDataOnlyPlan: boolean;
  isESimSmartWatchAvailable: boolean;
  isPorting: boolean | undefined;
  isPortingDetailsProvided: boolean | undefined;
  name: string | null;
  msisdn: string;
  isSuspended: boolean;
  identityId: string | null;
  status: SimStatus;
  mainSimCard: SimCard | null;
  pendingSimCard: SimCard | null;
}
