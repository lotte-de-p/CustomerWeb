import { easySwitchStateFactory } from './easy-switch.state.testfactory';
import { EasySwitchConfiguration } from '@sales/order-configurator/easy-switch/domain';

export interface EasySwitchState {
  easySwitchWanted: boolean | undefined;
  easySwitchConfiguration: EasySwitchConfiguration;
  loading: boolean;
  error: string | null;
}

export const defaultState: EasySwitchState = easySwitchStateFactory.build();
