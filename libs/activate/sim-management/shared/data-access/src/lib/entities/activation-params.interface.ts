import { ActivationType } from '../enums/activation-type.enum';

export interface ActivationParams {
  msisdn: string | null | undefined;
  iccid: string | null | undefined;
  orderNumber: string | null | undefined;
  accountType: string | null;
  iccidThirdParty: string | null;
  accountNumberThirdParty: string | null;
  type: ActivationType | undefined;
}
