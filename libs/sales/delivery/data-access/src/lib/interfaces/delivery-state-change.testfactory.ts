import { ViewStateEnum } from '../enums/view-state.enum';
import { ChangePersonalInfoInterface } from './change-personal-info-model.interface';
import { Sync } from 'factory.ts';
import { DeliveryStateChangeInterface } from './delivery-state-change.interface';
import { personalInfoFactory } from './personal-info.testfactory';
import { addressFieldValueTestFactory } from './address-field-value.testfactory';

export const changePersonalInfoInterfaceFactory = Sync.makeFactory<ChangePersonalInfoInterface>({
  deliveryAddress: addressFieldValueTestFactory.build(),
  personalInfo: personalInfoFactory.build(),
});

export const changePersonalInfoManualAddressFactory = Sync.makeFactory<ChangePersonalInfoInterface>({
  deliveryAddress: addressFieldValueTestFactory.build(),
  personalInfo: personalInfoFactory.build(),
});

export const deliveryStateChangeInterfaceFactory = Sync.makeFactory<DeliveryStateChangeInterface>({
  state: ViewStateEnum.OVERLAY_CLOSED,
  personalInfo: changePersonalInfoInterfaceFactory.build(),
});
