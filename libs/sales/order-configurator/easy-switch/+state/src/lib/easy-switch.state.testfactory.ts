import { Factory } from 'fishery';
import { EasySwitchState } from './easy-switch.state';
import { easySwitchConfigurationTestfactory } from '@sales/order-configurator/easy-switch/domain';

export const easySwitchStateFactory = Factory.define<EasySwitchState>(() => {
  return {
    easySwitchWanted: undefined,
    easySwitchConfiguration: easySwitchConfigurationTestfactory.build(),
    loading: false,
    error: null,
  };
});
