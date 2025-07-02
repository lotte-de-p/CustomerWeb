import {
  selectedMobileUsageLimits,
  selectedMobileUsageLimitsLoaded,
  selectedOutOfBundleLimits,
  selectedOutOfBundleLimitsLoaded,
} from './mobile-usage-limits.selectors';
import { MobileUsageLimitsState } from './mobile-usage-limits.reducers';

describe('Mobile Usage Limits Selectors', () => {
  const mockState: MobileUsageLimitsState = {
    selectedMobileUsageLimits: {
      outOfBundle: { limit: { enabled: true, value: 20 }, currentUsage: 1.65 },
      premiumService: { currentUsage: 1.65, limit: { enabled: true, value: 100 } },
    },
    selectedMobileUsageLimitsLoaded: true,
    selectedOutOfBundleLimits: ['0', '10', '20', '50', 'NO LIMIT'],
    selectedOutOfBundleLimitsLoaded: true,
  };

  it('should select selected mobile usage limits', () => {
    const selected = selectedMobileUsageLimits.projector(mockState);
    expect(selected).toEqual(mockState.selectedMobileUsageLimits);
  });

  it('should select selected mobile usage limits loaded status', () => {
    const selected = selectedMobileUsageLimitsLoaded.projector(mockState);
    expect(selected).toEqual(mockState.selectedMobileUsageLimitsLoaded);
  });

  it('should select selected out-of-bundle limits', () => {
    const selected = selectedOutOfBundleLimits.projector(mockState);
    expect(selected).toEqual(mockState.selectedOutOfBundleLimits);
  });

  it('should select selected out-of-bundle limits loaded status', () => {
    const selected = selectedOutOfBundleLimitsLoaded.projector(mockState);
    expect(selected).toEqual(mockState.selectedOutOfBundleLimitsLoaded);
  });
});
