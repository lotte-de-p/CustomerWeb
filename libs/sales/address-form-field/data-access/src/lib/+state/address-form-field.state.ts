import { AddressFieldValue } from '../interfaces/address-field-value.interface';
import { AddressUnit, Municipality } from '@sales/shared/address/data-access';

export interface AddressFormFieldState {
  finalAddress: AddressFieldValue;
  selectedStreet: string | undefined;
  selectedStreetAddressUnit: AddressUnit | undefined;
  selectedHouseNumber: string | undefined;
  selectedSubHouseNumber: string | undefined;
  selectedBoxNumber: string | undefined;
  availableMunicipalities: Municipality[];
  availableStreets: string[];
  availableHouseNumbers: AddressUnit[];
  availableSubHouseNumbers: AddressUnit[];
  availableBoxes: AddressUnit[];
}

export const defaultState: AddressFormFieldState = {
  finalAddress: {},
  selectedStreet: undefined,
  selectedStreetAddressUnit: undefined,
  selectedHouseNumber: undefined,
  selectedSubHouseNumber: undefined,
  selectedBoxNumber: undefined,
  availableMunicipalities: [],
  availableStreets: [],
  availableHouseNumbers: [],
  availableSubHouseNumbers: [],
  availableBoxes: [],
};
