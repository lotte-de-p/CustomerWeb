import { installationTypeStateTestfactory } from './installation-type.testfactory';
import { DeliveryMethod, InstallationTypes } from '@sales/order-configurator/installation-type/domain';

export interface InstallationTypeState {
  installationTypes: InstallationTypes;
  selectedDeliveryMethod: DeliveryMethod | undefined;
}

export const defaultState: InstallationTypeState = installationTypeStateTestfactory.build();
