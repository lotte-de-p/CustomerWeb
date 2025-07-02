import {
  selectedAddressLine,
  selectedDevicesList,
  selectReturnDeviceAddressLines,
  selectReturnDevices,
  selectReturnDevicesFailure,
  selectReturnLabel,
} from './return-devices.selectors';

describe('selectors', () => {
  const initialState = {
    devices: require('../mock/return-devices-mock.json'),
    addressId: 'test-1234567',
    returnLabel: 'return-1234567',
    addressLines: require('../mock/return-devices-address-selector-mock.json'),
    selectedAddressLine: require('../mock/return-devices-address-selector-mock.json')[0],
    selectedDevicesList: require('../mock/return-devices-mock.json')[0],
    error: { message: 'error', name: 'name' },
    deviceDetailsLoaded: false,
  };

  it('should select return devices from Store', () => {
    const result = selectReturnDevices.projector(initialState);

    expect(result).toEqual(initialState.devices);
  });

  it('should select return label from Store', () => {
    const result = selectReturnLabel.projector(initialState);

    expect(result).toEqual(initialState.returnLabel);
  });

  it('should select error from Store', () => {
    const result = selectReturnDevicesFailure.projector(initialState);

    expect(result).toEqual(initialState.error);
  });

  it('should select address lines from Store', () => {
    const result = selectReturnDeviceAddressLines.projector(initialState);

    expect(result).toEqual(initialState.addressLines);
  });

  it('should select selected address lines from Store', () => {
    const result = selectedAddressLine.projector(initialState);

    expect(result).toEqual(initialState.selectedAddressLine);
  });

  it('should select selected devices list from Store', () => {
    const result = selectedDevicesList.projector(initialState);

    expect(result).toEqual(initialState.selectedDevicesList);
  });
});
