import { AddressFieldValue } from './address-field-value.interface';
import { PersonalInfo } from './personal-info.interface';

export interface ChangePersonalInfoInterface {
  deliveryAddress: AddressFieldValue | null;
  personalInfo: PersonalInfo;
}
