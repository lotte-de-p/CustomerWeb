import { RawDtvBox } from './raw-dtv-box.model';

export interface RawDtvBoxSubscription {
  id: string;
  identifier: string;
  addressId: string;
  devices: RawDtvBox[];
}
