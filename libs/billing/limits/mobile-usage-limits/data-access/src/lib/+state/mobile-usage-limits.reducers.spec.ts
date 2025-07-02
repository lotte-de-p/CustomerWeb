import { Builder } from '@telenet/ng-lib-shared';
import { mobileUsageLimitsFeature, MobileUsageLimitsState } from './mobile-usage-limits.reducers';
import * as actions from './mobile-usage-limits.actions';
import { UsageLimits } from './../entities/usage-limits/usage-limits.model';
import { UpdateUsageLimitsRequest } from './../entities/usage-limits/update-usage-limits-request.model';

describe('MobileUsageLimitsReducers', () => {
  const initialState = Builder<MobileUsageLimitsState>().build();

  describe('fetchMobileUsageLimitsDetails', () => {
    it('should update selectedMobileLine and selectedMobileUsageLimitsLoaded on fetchMobileUsageLimitsDetails action', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const action = actions.fetchMobileUsageLimitsDetails({ mobileLine: mobileLine });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(false);
      expect(nextState.selectedOutOfBundleLimitsLoaded).toEqual(false);
    });

    it('should update selectedMobileUsageLimits and selectedMobileUsageLimitsLoaded on fetchMobileUsageLimitsDetailsSuccess action', () => {
      const mockUsageLimits = {
        outOfBundle: { limit: { enabled: true, value: 10 }, currentUsage: 1.65 },
        premiumService: { limit: { enabled: true, value: 100 }, currentUsage: 1.65 },
      } as UsageLimits;

      const action = actions.fetchMobileUsageLimitsDetailsSuccess({ usageLimits: mockUsageLimits });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedMobileUsageLimits).toEqual(mockUsageLimits);
      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(true);
    });

    it('should update selectedMobileUsageLimitsLoaded on fetchMobileUsageLimitsDetailsFailure action', () => {
      const action = actions.fetchMobileUsageLimitsDetailsFailure({ error: 'error message' });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(true);
      expect(nextState.selectedMobileUsageLimits).toBe(null);
    });
  });

  describe('fetchOutOfBundleLimitsSuccess', () => {
    it('should update selectedMobileLine and selectedOutOfBundleLimitsLoaded on fetchOutOfBundleLimits action', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const action = actions.fetchOutOfBundleLimits({ mobileLine: mobileLine });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedOutOfBundleLimitsLoaded).toEqual(false);
    });

    it('should update selectedOutOfBundleLimits and selectedOutOfBundleLimitsLoaded on fetchOutOfBundleLimitsSuccess action', () => {
      const mockOutOfBundleLimits = ['0', '10', '20', '50', 'NO LIMIT'];
      const action = actions.fetchOutOfBundleLimitsSuccess({ outOfBundleLimits: mockOutOfBundleLimits });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedOutOfBundleLimits).toEqual(mockOutOfBundleLimits);
      expect(nextState.selectedOutOfBundleLimitsLoaded).toEqual(true);
    });

    it('should update selectedOutOfBundleLimitsLoaded on fetchOutOfBundleLimitsFailure action', () => {
      const action = actions.fetchOutOfBundleLimitsFailure({ error: 'Some error' });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);
      expect(nextState.selectedOutOfBundleLimitsLoaded).toEqual(false);
      expect(nextState.selectedOutOfBundleLimits).toEqual([]);
    });
  });

  describe('updateMobileUsageLimitsFailure', () => {
    it('should update selectedMobileLine and selectedMobileUsageLimitsLoaded on updateMobileUsageLimits action', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const mockUpdateRequest: UpdateUsageLimitsRequest = {
        outOfBundleLimit: { value: 50, enabled: true },
        premiumServiceLimit: { value: 100 },
      };
      const action = actions.updateMobileUsageLimits({
        updateUsageLimitsRequest: mockUpdateRequest,
        mobileLine: mobileLine,
      });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(false);
    });

    it('should update selectedMobileUsageLimits and selectedMobileUsageLimitsLoaded on updateMobileUsageLimitsSuccess action', () => {
      const mockUsageLimits: UsageLimits = {
        outOfBundle: { limit: { enabled: true, value: 50 }, currentUsage: 1.65 },
        premiumService: { limit: { enabled: true, value: 50 }, currentUsage: 1.65 },
      };
      const action = actions.updateMobileUsageLimitsSuccess({ usageLimits: mockUsageLimits });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedMobileUsageLimits).toEqual(mockUsageLimits);
      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(true);
    });

    it('should update selectedMobileUsageLimitsLoaded on updateMobileUsageLimitsFailure action', () => {
      const action = actions.updateMobileUsageLimitsFailure({ error: 'Some error message' });
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(true);
    });
  });

  describe('resetMobileUsageLimits', () => {
    it('should reset mobile usage limits loaded and out of bundle loaded on resetMobileUsageLimits action', () => {
      const action = actions.resetMobileUsageLimits();
      const nextState = mobileUsageLimitsFeature.reducer(initialState, action);

      expect(nextState.selectedOutOfBundleLimitsLoaded).toEqual(false);
      expect(nextState.selectedMobileUsageLimitsLoaded).toEqual(false);
    });
  });
});
