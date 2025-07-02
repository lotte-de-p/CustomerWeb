import { Factory } from 'fishery';
import {
  createInstallationTypes,
  InstallationType,
  InstallationTypeEnum,
  InstallationTypes,
  RawInstallationType,
} from './installation-type.interface';
import {
  rawInstallationTypeOptionComfortTestFactory,
  rawInstallationTypeOptionHomeDeliveryTestFactory,
  rawInstallationTypeOptionPickupTestFactory,
} from './delivery-method.testfactory';

export const rawInstallationTypeSelfInstallTestFactory = Factory.define<RawInstallationType>(() => {
  return {
    type: InstallationTypeEnum.SELF_INSTALLATION,
    options: [
      rawInstallationTypeOptionPickupTestFactory.build(),
      rawInstallationTypeOptionHomeDeliveryTestFactory.build(),
    ],
  };
});

export const rawInstallationTypeTechnicalInstallTestFactory = Factory.define<RawInstallationType>(() => {
  return {
    type: InstallationTypeEnum.TECHNICAL_INSTALLATION,
    options: [rawInstallationTypeOptionComfortTestFactory.build()],
  };
});

export const installationTypeTestFactory = Factory.define<InstallationType>(() => {
  return {
    type: InstallationTypeEnum.SELF_INSTALLATION,
    deliveryMethods: [],
  };
});

export const installationTypesTestFactory = Factory.define<InstallationTypes>(() => {
  return createInstallationTypes([
    rawInstallationTypeSelfInstallTestFactory.build(),
    rawInstallationTypeTechnicalInstallTestFactory.build(),
  ]);
});
