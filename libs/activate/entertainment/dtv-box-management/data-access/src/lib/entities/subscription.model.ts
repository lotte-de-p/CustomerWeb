import { DtvBox } from './dtv-box.model';

export interface DtvBoxSubscription {
  id: string;
  identifier: string;
  addressId: string;
  dtvBoxes: DtvBox[];
}
