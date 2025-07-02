import { SimStatus } from '../../enums/sim-status.enum';
import { SimType } from '../../enums/sim-type.enum';

export interface RawSimCard {
  iccid: string | null;
  pin: string | null;
  puk: string | null;
  type: SimType;
  status: SimStatus;
  eSimProfileData: string | null;
}
