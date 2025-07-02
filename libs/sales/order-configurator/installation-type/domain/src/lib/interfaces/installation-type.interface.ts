import { createDeliveryMethod, DeliveryMethod, RawDeliveryMethod } from './delivery-method.interface';

export enum InstallationTypeEnum {
  SELF_INSTALLATION = 'SELF-INSTALLATION',
  TECHNICAL_INSTALLATION = 'TECHNICAL-INSTALLATION',
}

export interface RawInstallationType {
  type: InstallationTypeEnum;
  options: RawDeliveryMethod[];
}

export interface InstallationType {
  type: InstallationTypeEnum;
  deliveryMethods: DeliveryMethod[];
}

export interface InstallationTypes {
  list: InstallationType[];
  totalAmountOfOptions: number;
}

function createInstallationType(installationType: RawInstallationType): InstallationType {
  return {
    type: installationType.type || InstallationTypeEnum.SELF_INSTALLATION,
    deliveryMethods: installationType.options.map((option) => createDeliveryMethod(option)),
  };
}

export function createInstallationTypes(rawInstallationTypes: RawInstallationType[]): InstallationTypes {
  return {
    list: rawInstallationTypes.map((installationType) => createInstallationType(installationType)),
    totalAmountOfOptions: rawInstallationTypes.reduce((acc, type) => acc + type.options.length, 0),
  };
}
