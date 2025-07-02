import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { MobileUsageLimitsDatalayerEffects } from './mobile-usage-limits-datalayer.effects';
import { MobileUsageLimitsDatalayerService } from '../services/datalayer/mobile-usage-limits-datalayer.service';
import {
  updateMobileUsageDataLayerEvent,
  updateMobileUsageLimits,
  updateMobileUsageLimitsSuccess,
} from './mobile-usage-limits.actions';
import { MockProvider } from 'ng-mocks';
import { UpdateUsageLimitsRequest } from '../entities/usage-limits/update-usage-limits-request.model';
import { UsageLimits } from '../entities/usage-limits/usage-limits.model';

describe('MobileUsageLimitsDatalayerEffects', () => {
  let effects: MobileUsageLimitsDatalayerEffects;
  let actions$: Observable<unknown>;
  let dataLayerServiceSpy: MobileUsageLimitsDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MobileUsageLimitsDatalayerEffects,
        MockProvider(MobileUsageLimitsDatalayerService),
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });

    effects = TestBed.inject(MobileUsageLimitsDatalayerEffects);
    dataLayerServiceSpy = TestBed.inject(MobileUsageLimitsDatalayerService);
    jest.spyOn(dataLayerServiceSpy, 'sendDataLayerEventWithAttributes');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should send data layer event when usage limits are updated successfully', (done) => {
    const usageLimitsRequest: UpdateUsageLimitsRequest = {
      premiumServiceLimit: { value: 30 },
      outOfBundleLimit: { enabled: true, value: 50 },
    };
    const usageLimitsResponse: UsageLimits = {
      premiumService: {
        limit: { value: 50, enabled: false },
        currentUsage: 130,
      },
      outOfBundle: { currentUsage: 50, limit: { value: 50, enabled: true } },
    };
    const updatedDataLayerAttributes = { limitAlreadyExceeded: false, updateDeclined: false };
    const mobileLine = { name: '', msisdn: '', isDataOnly: false };

    actions$ = of(
      updateMobileUsageLimits({ updateUsageLimitsRequest: usageLimitsRequest, mobileLine: mobileLine }),
      updateMobileUsageLimitsSuccess({ usageLimits: usageLimitsResponse }),
      updateMobileUsageDataLayerEvent(updatedDataLayerAttributes)
    );

    effects.updateLimitsSuccess$.subscribe(() => {
      expect(dataLayerServiceSpy.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(
        false,
        false,
        '30',
        'Third-party Services'
      );
      done();
    });
  });

  it('should send data layer event when out of bundle limits are updated successfully', (done) => {
    const usageLimitsRequest: UpdateUsageLimitsRequest = {
      outOfBundleLimit: { enabled: true, value: 50 },
    };
    const usageLimitsResponse: UsageLimits = {
      premiumService: {
        limit: { value: 50, enabled: false },
        currentUsage: 130,
      },
      outOfBundle: { currentUsage: 50, limit: { value: 50, enabled: true } },
    };
    const updatedDataLayerAttributes = { limitAlreadyExceeded: false, updateDeclined: false };
    const mobileLine = { name: '', msisdn: '', isDataOnly: false };

    actions$ = of(
      updateMobileUsageLimits({ updateUsageLimitsRequest: usageLimitsRequest, mobileLine: mobileLine }),
      updateMobileUsageLimitsSuccess({ usageLimits: usageLimitsResponse }),
      updateMobileUsageDataLayerEvent(updatedDataLayerAttributes)
    );

    effects.updateLimitsSuccess$.subscribe(() => {
      expect(dataLayerServiceSpy.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(
        false,
        false,
        '50',
        'Out of Bundle'
      );
      done();
    });
  });

  it('should send data layer event when only third party services are updated successfully', (done) => {
    const usageLimitsRequest: UpdateUsageLimitsRequest = {
      premiumServiceLimit: { value: 30 },
    };
    const usageLimitsResponse: UsageLimits = {
      premiumService: {
        limit: { value: 30, enabled: false },
        currentUsage: 130,
      },
      outOfBundle: { currentUsage: 50, limit: { value: 50, enabled: true } },
    };
    const updatedDataLayerAttributes = { limitAlreadyExceeded: false, updateDeclined: false };
    const mobileLine = { name: '', msisdn: '', isDataOnly: false };

    actions$ = of(
      updateMobileUsageLimits({ updateUsageLimitsRequest: usageLimitsRequest, mobileLine: mobileLine }),
      updateMobileUsageLimitsSuccess({ usageLimits: usageLimitsResponse }),
      updateMobileUsageDataLayerEvent(updatedDataLayerAttributes)
    );

    effects.updateLimitsSuccess$.subscribe(() => {
      expect(dataLayerServiceSpy.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(
        false,
        false,
        '30',
        'Third-party Services'
      );
      done();
    });
  });

  it('should cancel update limit on warning', (done) => {
    const updatedDataLayerAttributes = { limitAlreadyExceeded: false, updateDeclined: false, cancelledLimit: '30' };

    actions$ = of(updateMobileUsageDataLayerEvent(updatedDataLayerAttributes));

    effects.cancelUpdateLimitOnWarning$.subscribe(() => {
      expect(dataLayerServiceSpy.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(false, false, '30', undefined);
      done();
    });
  });
});
