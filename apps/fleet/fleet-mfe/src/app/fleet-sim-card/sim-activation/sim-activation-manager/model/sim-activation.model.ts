import { MsisdnInterface } from '../interfaces/msisdn.interface';

export interface SingleSimActivationRequest {
  msisdnList: MsisdnInterface[];
  futureDate: Date;
  iccid: string;
}
