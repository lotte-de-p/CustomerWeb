import { Factory } from 'fishery';
import { EasySwitchConfiguration } from './easy-switch.interface';

export const easySwitchConfigurationTestfactory = Factory.define<EasySwitchConfiguration>(() => {
  return {
    name: 'easy-switch',
  };
});
