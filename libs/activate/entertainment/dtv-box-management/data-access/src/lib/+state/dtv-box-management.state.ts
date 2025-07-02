import { Address } from '../entities/address.model';
import { DtvBox } from '../entities/dtv-box.model';
import { DtvBoxSubscription } from '../entities/subscription.model';

export interface DtvBoxManagementState {
  subscriptions: DtvBoxSubscription[];
  addresses: Address[];
  selectedAddress: Address | undefined;
  selectedAddressDevices: DtvBox[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
  isPinCodeReset: boolean;
  showSecurityCode: boolean;
}

export const initialState: DtvBoxManagementState = {
  subscriptions: [],
  addresses: [],
  selectedAddressDevices: [],
  selectedAddress: undefined,
  error: undefined,
  isLoading: false,
  isPinCodeReset: false,
  showSecurityCode: false,
};

export interface DtvBoxManagementSlice {
  ['dtvBoxManagementFeature']: DtvBoxManagementState;
}
