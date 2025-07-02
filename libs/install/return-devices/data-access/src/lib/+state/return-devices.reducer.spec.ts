import { returnDevicesReducer } from './return-devices.reducer';
import { defaultReturnDevicesState } from './return-devices.state';
import {
  getReturnDevicesAndAddressLineDetailsFailure,
  getReturnDevicesAndAddressLineDetailsSuccess,
  getReturnLabelFailure,
  getReturnLabelSuccess,
  toggleDevice,
} from './return-devices.actions';

describe('Return devices reducer', () => {
  let initialState = defaultReturnDevicesState;

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = returnDevicesReducer(initialState, action);

      expect(state).toBe(initialState);
      expect(state.devices).toHaveLength(0);
    });
  });

  it('should set devices and addressId on successful return devices call', () => {
    const devices = initialState.devices || [];
    expect(devices).toHaveLength(0);

    const actualDevices = require('../mock/return-devices-mock.json');
    const addressSelector = require('../mock/return-devices-address-selector-mock.json');
    const actualState = returnDevicesReducer(
      initialState,
      getReturnDevicesAndAddressLineDetailsSuccess({ addressLines: addressSelector, devices: actualDevices })
    );

    expect(actualState.error).toBeFalsy();
    expect(actualState.devices).toHaveLength(2);
  });

  it('should set error on failure during return devices call', () => {
    expect(initialState.error).toBeFalsy();

    const actualState = returnDevicesReducer(
      initialState,
      getReturnDevicesAndAddressLineDetailsFailure({ error: new Error('error') })
    );

    expect(actualState.devices).toHaveLength(0);
    expect(actualState.error).toBeTruthy();
    expect(actualState.error?.message).toEqual('error');
  });

  it('should set return label on successful return label call', () => {
    const returnLabel = initialState.returnLabel;
    expect(returnLabel).toBeFalsy();

    const actualReturnLabel = { label: 'returnLabel' };
    const actualState = returnDevicesReducer(initialState, getReturnLabelSuccess({ returnLabel: actualReturnLabel }));

    expect(actualState.error).toBeFalsy();
    expect(actualReturnLabel).toBeTruthy();
    expect(actualReturnLabel.label).toEqual('returnLabel');
  });

  it('should set error on failure during return label call', () => {
    expect(initialState.error).toBeFalsy();
    const actualState = returnDevicesReducer(initialState, getReturnLabelFailure({ error: new Error('error') }));

    expect(actualState.returnLabel).toBeFalsy();
    expect(actualState.error).toBeTruthy();
    expect(actualState.error?.message).toEqual('error');
  });

  it('should set isToggled on true on toggled device and put isToggled false on all other devices', () => {
    expect(initialState.error).toBeFalsy();
    const actualDevices = require('../mock/return-devices-mock.json');
    initialState = { ...defaultReturnDevicesState, selectedDevicesList: [actualDevices[0], actualDevices[1]] };
    const action = toggleDevice({ device: actualDevices[0] });

    const newState = returnDevicesReducer(initialState, action);

    expect(newState.error).toBeFalsy();
    expect(newState.selectedDevicesList[0].isToggled).toEqual(true);
    expect(newState.selectedDevicesList[1].isToggled).toEqual(false);
  });
});
