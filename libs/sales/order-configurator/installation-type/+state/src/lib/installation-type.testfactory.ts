import { Factory } from 'fishery';
import { InstallationTypeState } from './installation-type.state';
import { installationTypesTestFactory } from '@sales/order-configurator/installation-type/domain';

export const installationTypeStateTestfactory = Factory.define<InstallationTypeState>(() => {
  return {
    installationTypes: installationTypesTestFactory.build(),
    selectedDeliveryMethod: undefined,
  };
});
