import { TestBed } from '@angular/core/testing';
import { MobileUsageLimitsFacade } from './mobile-usage-limits.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UpdateUsageLimitsRequest } from './../lib/entities/usage-limits/update-usage-limits-request.model';
import {
  fetchMobileUsageLimitsDetails,
  fetchOutOfBundleLimits,
  resetMobileUsageLimits,
  updateMobileUsageDataLayerEvent,
  updateMobileUsageLimits,
} from './+state/mobile-usage-limits.actions';
import { MobileLine } from '@billing/shared/data-access';

describe('mobileUsageLimitsFacade', () => {
  let store$: MockStore;
  let mobileUsageLimitsFacade: MobileUsageLimitsFacade;
  let mobileLine: MobileLine;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileUsageLimitsFacade, provideMockStore()],
    });
    store$ = TestBed.inject(MockStore);
    mobileUsageLimitsFacade = TestBed.inject(MobileUsageLimitsFacade);

    jest.spyOn(store$, 'select');
    jest.spyOn(store$, 'dispatch');
    mobileLine = { msisdn: '0467713962', name: 'Test customer', isDataOnly: false };
  });

  it('should dispatch fetchMobileUsageLimitsDetails action with provided mobile line', () => {
    const dispatchSpy = jest.spyOn(store$, 'dispatch');
    mobileUsageLimitsFacade.loadMobileUsageLimits({ mobileLine });
    expect(dispatchSpy).toHaveBeenCalledWith(fetchMobileUsageLimitsDetails({ mobileLine }));
  });

  it('should dispatch fetchOutOfBundleLimits action with provided mobile line', () => {
    const dispatchSpy = jest.spyOn(store$, 'dispatch');
    mobileUsageLimitsFacade.loadOutOfBundleLimits({ mobileLine });
    expect(dispatchSpy).toHaveBeenCalledWith(fetchOutOfBundleLimits({ mobileLine }));
  });

  it('should dispatch updateMobileUsageLimits action with provided parameters', () => {
    const dispatchSpy = jest.spyOn(store$, 'dispatch');
    const updateUsageLimitsRequest: UpdateUsageLimitsRequest = {
      outOfBundleLimit: { enabled: true, value: 50 },
      premiumServiceLimit: { value: 100 },
    };
    mobileUsageLimitsFacade.updateMobileUsageLimits({ updateUsageLimitsRequest, mobileLine });
    expect(dispatchSpy).toHaveBeenCalledWith(updateMobileUsageLimits({ updateUsageLimitsRequest, mobileLine }));
  });

  it('should dispatch updateMobileUsageDataLayerEvent action with provided parameters', () => {
    const dispatchSpy = jest.spyOn(store$, 'dispatch');
    const dataLayerRequest = {
      limitAlreadyExceeded: true,
      updateDeclined: false,
    };
    mobileUsageLimitsFacade.updateMobileUsageDataLayerEvent(dataLayerRequest);
    expect(dispatchSpy).toHaveBeenCalledWith(updateMobileUsageDataLayerEvent(dataLayerRequest));
  });

  it('should dispatch resetMobileUsageLimits action', () => {
    const dispatchSpy = jest.spyOn(store$, 'dispatch');
    mobileUsageLimitsFacade.resetMobileUsageLimits();
    expect(dispatchSpy).toHaveBeenCalledWith(resetMobileUsageLimits());
  });
});
