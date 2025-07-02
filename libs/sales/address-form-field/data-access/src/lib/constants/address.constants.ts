export const fieldConstant = {
  COUNTRY: 'country',
  MUNICIPALITY: 'municipality',
  STREET: 'street',
  GEOGRAPHICAL_ADDRESS: 'geographical_address',
  HOUSE_NUMBER: 'housenumber',
  SUB_HOUSE_NUMBER: 'subhousenumber',
  BOX: 'box',
};

export const fieldDependencies = [
  {
    weight: 1,
    key: fieldConstant.MUNICIPALITY,
    enableAndReset: [fieldConstant.STREET],
    disableAndReset: [],
    clear: [fieldConstant.STREET, fieldConstant.GEOGRAPHICAL_ADDRESS],
  },
  {
    weight: 1,
    key: fieldConstant.STREET,
    enableAndReset: [fieldConstant.GEOGRAPHICAL_ADDRESS],
    disableAndReset: [],
    clear: [fieldConstant.GEOGRAPHICAL_ADDRESS],
  },
];

export const geographicalAddressFieldDependencies = [
  {
    weight: 1,
    key: fieldConstant.STREET,
    enableAndReset: [fieldConstant.HOUSE_NUMBER],
    disableAndReset: [fieldConstant.SUB_HOUSE_NUMBER, fieldConstant.BOX],
  },
  {
    weight: 1,
    key: fieldConstant.HOUSE_NUMBER,
    enableAndReset: [fieldConstant.SUB_HOUSE_NUMBER, fieldConstant.BOX],
    disableAndReset: [],
  },
  {
    weight: 2,
    key: fieldConstant.SUB_HOUSE_NUMBER,
    enableAndReset: [],
    disableAndReset: [],
  },
  {
    weight: 3,
    key: fieldConstant.BOX,
    enableAndReset: [],
    disableAndReset: [],
  },
];

export const boxPattern = /^$|^[A-Za-z0-9]+(?:\/[A-Za-z0-9]{1,4}){0,6}$/;
