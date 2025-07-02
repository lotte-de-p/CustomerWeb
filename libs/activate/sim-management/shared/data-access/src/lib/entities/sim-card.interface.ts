import { SimType } from '../enums/sim-type.enum';
import { SimStatus } from '../enums/sim-status.enum';

export interface SimCard {
  iccid: string | null;
  pin: string | null;
  puk: string | null;
  type: SimType | null;
  status: SimStatus;
  eSimProfileData: string | null;
}
