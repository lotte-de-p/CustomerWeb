import { createAction, props } from '@ngrx/store';
import { AddressUnit, Municipality } from '@sales/shared/address/data-access';

// Municipality Actions
export const setAvailableMunicipalities = createAction(
  '[Address Form Field] Set Available Municipalities',
  props<{ municipalities: Municipality[] }>()
);

export const clearAvailableMunicipalities = createAction('[Address Form Field] Clear Available Municipalities');

// Street Actions
export const setAvailableStreets = createAction(
  '[Address Form Field] Set Available Streets',
  props<{ streets: string[] }>()
);

export const clearAvailableStreets = createAction('[Address Form Field] Clear Available Streets');

// House Number Actions
export const setAvailableHouseNumbers = createAction(
  '[Address Form Field] Set Available House Numbers',
  props<{ houseNumberAddressUnits: AddressUnit[] }>()
);

export const clearAvailableHouseNumbers = createAction('[Address Form Field] Clear Available House Numbers');

// Sub House Number Actions
export const setAvailableSubHouseNumbers = createAction(
  '[Address Form Field] Set Available Sub House Numbers',
  props<{ subHouseNumbers: AddressUnit[] }>()
);

export const clearAvailableSubHouseNumbers = createAction('[Address Form Field] Clear Available Sub House Numbers');

// Box Actions
export const setAvailableBoxes = createAction(
  '[Address Form Field] Set Available Boxes',
  props<{ boxes: AddressUnit[] }>()
);

export const clearAvailableBoxes = createAction('[Address Form Field] Clear Available Boxes');

// Selected Fields Actions
export const setSelectedMunicipality = createAction(
  '[Address Form Field] Set Selected Municipality',
  props<{ municipality: Municipality }>()
);

export const setSelectedStreet = createAction('[Address Form Field] Set Selected Street', props<{ street: string }>());

export const setSelectedHouseNumber = createAction(
  '[Address Form Field] Set Selected House Number',
  props<{ houseNumber: string }>()
);

export const setSelectedSubHouseNumber = createAction(
  '[Address Form Field] Set Selected Sub House Number',
  props<{ subHouseNumber: string }>()
);

export const setSelectedBoxNumber = createAction(
  '[Address Form Field] Set Selected Box Number',
  props<{ boxNumber: string }>()
);

export const setSelectedStreetAddressUnit = createAction(
  '[Address Form Field] Set Selected Street Address Unit',
  props<{ streetAddressUnit: AddressUnit }>()
);
