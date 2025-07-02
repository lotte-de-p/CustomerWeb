import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { stateFeatureName } from '../constants/state.const';
import { AddressFormFieldState, defaultState } from './address-form-field.state';
import {
  clearAvailableBoxes,
  clearAvailableHouseNumbers,
  clearAvailableMunicipalities,
  clearAvailableStreets,
  clearAvailableSubHouseNumbers,
  setAvailableBoxes,
  setAvailableHouseNumbers,
  setAvailableMunicipalities,
  setAvailableStreets,
  setAvailableSubHouseNumbers,
  setSelectedBoxNumber,
  setSelectedHouseNumber,
  setSelectedMunicipality,
  setSelectedStreet,
  setSelectedStreetAddressUnit,
  setSelectedSubHouseNumber,
} from './address-form-field.actions';
import { AddressUnit, Municipality } from '@sales/shared/address/data-access';

export const reducer = createReducer(
  defaultState,
  on(setAvailableMunicipalities, (state: AddressFormFieldState, props: { municipalities: Municipality[] }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableMunicipalities = props.municipalities;
    });
  }),
  on(setAvailableStreets, (state: AddressFormFieldState, props: { streets: string[] }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableStreets = props.streets;
    });
  }),
  on(clearAvailableStreets, (state: AddressFormFieldState) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableStreets = [];
    });
  }),
  on(setAvailableHouseNumbers, (state: AddressFormFieldState, props: { houseNumberAddressUnits: AddressUnit[] }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableHouseNumbers = props.houseNumberAddressUnits;
    });
  }),
  on(setAvailableSubHouseNumbers, (state: AddressFormFieldState, props: { subHouseNumbers: AddressUnit[] }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableSubHouseNumbers = props.subHouseNumbers;
    });
  }),
  on(setAvailableBoxes, (state: AddressFormFieldState, props: { boxes: AddressUnit[] }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableBoxes = props.boxes;
    });
  }),
  on(setSelectedMunicipality, (state: AddressFormFieldState, props: { municipality: Municipality }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.finalAddress.municipality = props.municipality;
    });
  }),
  on(setSelectedStreet, (state: AddressFormFieldState, props: { street: string }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.selectedStreet = props.street;
    });
  }),
  on(setSelectedStreetAddressUnit, (state: AddressFormFieldState, props: { streetAddressUnit: AddressUnit }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.selectedStreetAddressUnit = props.streetAddressUnit;
    });
  }),
  on(setSelectedHouseNumber, (state: AddressFormFieldState, props: { houseNumber: string }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.selectedHouseNumber = props.houseNumber;
    });
  }),
  on(setSelectedSubHouseNumber, (state: AddressFormFieldState, props: { subHouseNumber: string }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.selectedSubHouseNumber = props.subHouseNumber;
    });
  }),
  on(setSelectedBoxNumber, (state: AddressFormFieldState, props: { boxNumber: string }) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.selectedBoxNumber = props.boxNumber;
    });
  }),
  on(clearAvailableMunicipalities, (state: AddressFormFieldState) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableMunicipalities = [];
    });
  }),
  on(clearAvailableHouseNumbers, (state: AddressFormFieldState) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableHouseNumbers = [];
    });
  }),
  on(clearAvailableSubHouseNumbers, (state: AddressFormFieldState) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableSubHouseNumbers = [];
    });
  }),
  on(clearAvailableBoxes, (state: AddressFormFieldState) => {
    return produce(state, (draft: AddressFormFieldState) => {
      draft.availableBoxes = [];
    });
  })
);

export function AddressFormFieldReducer(
  state: AddressFormFieldState = defaultState,
  action: Action
): AddressFormFieldState {
  return reducer(state, action);
}

export const addressFormFieldFeature = createFeature({
  name: stateFeatureName,
  reducer: AddressFormFieldReducer,
});
