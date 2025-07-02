import { Actions } from '@ngrx/effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, throwError } from 'rxjs';
import { MobileUsageLimitsEffects } from './mobile-usage-limits.effects';
import {
  fetchMobileUsageLimitsDetails,
  fetchMobileUsageLimitsDetailsFailure,
  fetchMobileUsageLimitsDetailsSuccess,
  fetchOutOfBundleLimits,
  fetchOutOfBundleLimitsFailure,
  fetchOutOfBundleLimitsSuccess,
  updateMobileUsageLimits,
  updateMobileUsageLimitsSuccess,
} from './mobile-usage-limits.actions';
import { UsageLimitsService } from '../services/usage-limits/usage-limits.service';
import { UpdateUsageLimitsRequest } from './../entities/usage-limits/update-usage-limits-request.model';
import { UsageLimits } from './../entities/usage-limits/usage-limits.model';
import { HttpClientModule } from '@angular/common/http';
import { OutOfBundleLimitsService } from '../services/out-of-bundle-limits/out-of-bundle-limits.service';
import { ErrorMessage, MessageService, MessagesModule, SuccessMessage } from '@telenet/ng-lib-message';
import {
  MESSAGE_GROUP,
  USAGE_LIMIT_DECLINED,
  USAGE_LIMIT_UPDATED,
} from '../services/mobile-usage-limits-service.constants';

describe('MobileUsageLimitsEffects', () => {
  let actions$: Actions,
    effects: MobileUsageLimitsEffects,
    usageLimitsService: UsageLimitsService,
    outOfBundleLimitsService: OutOfBundleLimitsService,
    messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MessagesModule],
      providers: [
        MobileUsageLimitsEffects,
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    effects = TestBed.inject(MobileUsageLimitsEffects);
    usageLimitsService = TestBed.inject(UsageLimitsService);
    outOfBundleLimitsService = TestBed.inject(OutOfBundleLimitsService);
    messageService = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchMobileUsageLimitsDetails$', () => {
    it('should dispatch fetchMobileUsageLimitsDetailsSuccess with usageLimits on successful fetch', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const usageLimits = {
        outOfBundle: { limit: { enabled: true, value: 10 }, currentUsage: 1.65 },
        premiumService: { limit: { enabled: true, value: 100 }, currentUsage: 1.65 },
      } as UsageLimits;
      const action = fetchMobileUsageLimitsDetails({ mobileLine });
      const completion = fetchMobileUsageLimitsDetailsSuccess({
        usageLimits: {
          outOfBundle: {
            limit: {
              enabled: true,
              value: 10,
            },
            currentUsage: 1.65,
          },
          premiumService: { currentUsage: 1.65, limit: { enabled: true, value: 20 } },
        },
      });

      jest.spyOn(usageLimitsService, 'getUsageLimits').mockReturnValue(of(usageLimits));
      actions$ = of(action);

      effects.fetchMobileUsageLimitsDetails$.subscribe((result) => {
        expect(result).toEqual(completion);
      });
    });

    it('should dispatch fetchMobileUsageLimitsDetailsFailure on failed fetch', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const action = fetchMobileUsageLimitsDetails({ mobileLine });
      const completion = fetchMobileUsageLimitsDetailsFailure({ error: 'error' });
      jest.spyOn(usageLimitsService, 'getUsageLimits').mockReturnValue(throwError(() => 'error'));
      actions$ = of(action);

      effects.fetchMobileUsageLimitsDetails$.subscribe((result) => {
        expect(result).toEqual(completion);
      });
    });
  });

  describe('fetchOutOfBundleLimits$', () => {
    it('should dispatch fetchOutOfBundleLimitsSuccess with out of bundle limits on successful fetch', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const outOfBundleLimits = ['0', '10', '20', '50', 'NO LIMIT'];
      const action = fetchOutOfBundleLimits({ mobileLine });
      const completion = fetchOutOfBundleLimitsSuccess({
        outOfBundleLimits: ['0', '10', '20', '50', 'NO LIMIT'],
      });
      jest.spyOn(outOfBundleLimitsService, 'getOutOfBundleLimits').mockReturnValue(of(outOfBundleLimits));
      actions$ = of(action);

      effects.fetchOutOfBundleLimits$.subscribe((result) => {
        expect(result).toEqual(completion);
      });
    });

    it('should dispatch fetchOutOfBundleLimitsFailure on failed fetch', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const action = fetchOutOfBundleLimits({ mobileLine });
      const completion = fetchOutOfBundleLimitsFailure({ error: 'error' });
      jest.spyOn(outOfBundleLimitsService, 'getOutOfBundleLimits').mockReturnValue(throwError(() => 'error'));
      actions$ = of(action);

      effects.fetchOutOfBundleLimits$.subscribe((result) => {
        expect(result).toEqual(completion);
      });
    });
  });

  describe('updateMobileUsageLimits$', () => {
    it('should dispatch updateMobileUsageLimitsSuccess with updated mobile usage limits on successful fetch', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const updateUsageLimitsRequest = {
        outOfBundleLimit: { value: 20, enabled: true },
      } as UpdateUsageLimitsRequest;
      const usageLimits = {
        outOfBundle: { limit: { enabled: true, value: 50 }, currentUsage: 1.65 },
        premiumService: { currentUsage: 1.65, limit: { enabled: false, value: 100 } },
      } as UsageLimits;
      const action = updateMobileUsageLimits({ updateUsageLimitsRequest, mobileLine });
      const messageServiceSpy = jest.spyOn(messageService, 'addMessage');
      const completion = updateMobileUsageLimitsSuccess({
        usageLimits: usageLimits,
      });
      jest.spyOn(usageLimitsService, 'updateUsageLimits').mockReturnValue(of(usageLimits));
      actions$ = of(action);

      effects.updateMobileUsageLimits$.subscribe((result) => {
        expect(result).toEqual(completion);
        expect(messageServiceSpy).toHaveBeenCalledWith(
          new SuccessMessage(MESSAGE_GROUP, `${MESSAGE_GROUP}.${USAGE_LIMIT_UPDATED}`)
        );
      });
    });

    it('should dispatch updateMobileUsageLimitsFailure on failed fetch', () => {
      const mobileLine = { msisdn: '123456789', name: 'Test', isDataOnly: false };
      const action = fetchOutOfBundleLimits({ mobileLine });
      const completion = fetchOutOfBundleLimitsFailure({ error: 'error' });
      const messageServiceSpy = jest.spyOn(messageService, 'addMessage');
      jest.spyOn(usageLimitsService, 'updateUsageLimits').mockReturnValue(throwError(() => 'error'));
      actions$ = of(action);

      effects.updateMobileUsageLimits$.subscribe((result) => {
        expect(result).toEqual(completion);
        expect(messageServiceSpy).toHaveBeenCalledWith(
          new ErrorMessage(MESSAGE_GROUP, `${MESSAGE_GROUP}.${USAGE_LIMIT_DECLINED}`)
        );
      });
    });
  });
});
