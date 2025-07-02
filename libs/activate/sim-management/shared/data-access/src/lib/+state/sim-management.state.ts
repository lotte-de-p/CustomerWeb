import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { User } from '../entities/user.interface';
import { MobileLine } from '../entities/mobile-line.interface';
import { Message } from '../entities/message.interface';
import { ActivationStep } from '../enums/activation-step.enum';

export interface SimManagementState {
  mobileLines: MobileLine[];
  selectedMobileLine: MobileLine | undefined;
  householdUsers: User[];
  loginDetails: LoginDetails | undefined;
  simSwapSalesOrderId: string | undefined;
  eSimSwapSalesOrderId: string | undefined;
  actionResultMessage: Message | undefined;
  activationStep: ActivationStep;
  lineType: string | undefined;
  orderType: string | undefined;
  isLoading: boolean;
}

export const initialState: SimManagementState = {
  mobileLines: [],
  selectedMobileLine: undefined,
  householdUsers: [],
  loginDetails: undefined,
  isLoading: false,
  simSwapSalesOrderId: undefined,
  eSimSwapSalesOrderId: undefined,
  actionResultMessage: undefined,
  activationStep: ActivationStep.VALIDATION,
  orderType: undefined,
  lineType: undefined,
};

export interface SimManagementSlice {
  ['simManagementFeature']: SimManagementState;
}
