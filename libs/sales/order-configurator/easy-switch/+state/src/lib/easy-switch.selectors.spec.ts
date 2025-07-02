// easy-switch.selectors.spec.ts

import { selectEasySwitchChoice, selectEasySwitchError, selectEasySwitchLoading } from './easy-switch.selectors';
import { EasySwitchState } from './easy-switch.state';
import { easySwitchStateFactory } from './easy-switch.state.testfactory';

describe('EasySwitch Selectors', () => {
  const initialState: EasySwitchState = easySwitchStateFactory.build();

  it('should select the easySwitchWanted state', () => {
    const result = selectEasySwitchChoice.projector(initialState);
    expect(result).toBe(undefined);
  });

  it('should select the loading state', () => {
    const result = selectEasySwitchLoading.projector(initialState);
    expect(result).toBe(false);
  });

  it('should select the error state', () => {
    const result = selectEasySwitchError.projector(initialState);
    expect(result).toBeNull();
  });

  it('should select the updated easySwitchWanted state when it is true', () => {
    const updatedState: EasySwitchState = {
      ...initialState,
      easySwitchWanted: true,
    };
    const result = selectEasySwitchChoice.projector(updatedState);
    expect(result).toBe(true);
  });

  it('should select the updated loading state when it is true', () => {
    const updatedState: EasySwitchState = {
      ...initialState,
      loading: true,
    };
    const result = selectEasySwitchLoading.projector(updatedState);
    expect(result).toBe(true);
  });
});
