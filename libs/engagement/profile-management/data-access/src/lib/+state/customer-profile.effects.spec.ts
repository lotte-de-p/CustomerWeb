import { Actions } from '@ngrx/effects';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { provideMockActions } from '@ngrx/effects/testing';
import { CustomerProfileEffects } from './customer-profile.effects';
import { CustomerProfileService } from '../infrastructure/customer-profile.service';
import { of, throwError } from 'rxjs';
import {
  getAuthenticatorsErrorAction,
  getAuthenticatorsSuccessAction,
  getProfileDetailsErrorAction,
  getProfileDetailsSuccessAction,
  getProfileOverview,
  getProfileOverviewErrorAction,
  getProfileOverviewSuccessAction,
  getSocialLoginsErrorAction,
  getSocialLoginsSuccessAction,
  unenrollFactorErrorAction,
  unenrollFactorSuccessAction,
  unlinkSocialLoginErrorAction,
  update2faStatusErrorAction,
  update2faStatusSuccessAction,
} from './customer-profile.actions';
import { ProfileDetails } from '../models/profile-details.model';
import { ProfileOverview } from '../models/profile.overview.model';

describe('CustomerProfileEffects', () => {
  let actions$: Actions;
  let effects: CustomerProfileEffects;
  let service: CustomerProfileService;

  const PROFILE_DETAILS = new ProfileDetails();
  PROFILE_DETAILS.pid = '12345';

  const PROFILE_OVERVIEW = new ProfileOverview();
  PROFILE_OVERVIEW.customerNumber = '12345';

  const SOCIAL_LOGINS = {
    isLinkedToItsme: false,
  };

  const AUTHENTICATORS = { authenticators: [{ type: 'itsme', enabled: true }], '2fa': { enabled: false } };
  const SUCCESS_RESPONSE = false;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerProfileEffects,
        MockProvider(CustomerProfileService),
        provideMockActions(() => actions$),
        { provide: 'Window', useValue: {} },
      ],
    });
    effects = TestBed.inject(CustomerProfileEffects);
    service = TestBed.inject(CustomerProfileService);
  });

  describe('profileDetails', () => {
    it('should trigger getProfileDetailsSuccessAction', (done) => {
      jest.spyOn(service, 'getProfileDetailsByIdentityId').mockReturnValue(of(PROFILE_DETAILS));
      actions$ = of({ type: '[profile-management - customer-profile] get profileDetails' });
      effects.profileDetails$.subscribe((action) => {
        expect(action).toEqual(getProfileDetailsSuccessAction({ profileDetails: PROFILE_DETAILS }));
        done();
      });
    });

    it('should dispatch getErrorAction in getProfileDetails', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getProfileDetailsByIdentityId').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[profile-management - customer-profile] get profileDetails' });
      effects.profileDetails$.subscribe((action) => {
        expect(action).toEqual(getProfileDetailsErrorAction({ error }));
        done();
      });
    });
  });

  describe('profileOverview', () => {
    it('should return getProfileOverviewSuccessAction when service returns valid data', (done) => {
      const mockProfileOverview = new ProfileOverview();
      jest.spyOn(service, 'getProfileOverview').mockReturnValue(of(mockProfileOverview));

      actions$ = of(getProfileOverview({ identityId: '12345' }));
      effects.profileOverview$.subscribe((action) => {
        expect(action).toEqual(getProfileOverviewSuccessAction({ profileOverview: mockProfileOverview }));
        done();
      });
    });

    it('should return getProfileOverviewErrorAction when service throws an error', (done) => {
      const error = 'Error';
      jest.spyOn(service, 'getProfileOverview').mockReturnValue(throwError(error));

      actions$ = of(getProfileOverview({ identityId: '12345' }));
      effects.profileOverview$.subscribe((action) => {
        expect(action).toEqual(getProfileOverviewErrorAction({ error }));
        done();
      });
    });
  });

  describe('socialLogins', () => {
    it('should trigger getSocialLoginsSuccessAction', (done) => {
      jest.spyOn(service, 'getSocialLogins').mockReturnValue(of(SOCIAL_LOGINS));
      actions$ = of({ type: '[profile-management - customer-profile] get socialLogins' });
      effects.socialLogins$.subscribe((action) => {
        expect(action).toEqual(getSocialLoginsSuccessAction({ socialLogins: SOCIAL_LOGINS }));
        done();
      });
    });

    it('should dispatch getErrorAction in getSocialLogins', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getSocialLogins').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[profile-management - customer-profile] get socialLogins' });
      effects.socialLogins$.subscribe((action) => {
        expect(action).toEqual(getSocialLoginsErrorAction({ error }));
        done();
      });
    });
  });

  describe('unlinkSocialLogin', () => {
    it('should dispatch getErrorAction in unlinkSocialLogin', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'unlinkSocialLogin').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[profile-management - customer-profile] unlink socialLogin' });
      effects.unlinkSocialLogin$.subscribe((action) => {
        expect(action).toEqual(unlinkSocialLoginErrorAction({ error }));
        done();
      });
    });
  });

  describe('authenticators', () => {
    it('should trigger getAuthenticatorsSuccessAction', (done) => {
      jest.spyOn(service, 'getAuthenticators').mockReturnValue(of(AUTHENTICATORS));
      actions$ = of({ type: '[profile-management - manage-authenticators] get authenticators' });
      effects.authenticators$.subscribe((action) => {
        expect(action).toEqual(getAuthenticatorsSuccessAction({ authenticators: AUTHENTICATORS }));
        done();
      });
    });

    it('should dispatch getErrorAction in getAuthenticators', (done) => {
      const error = 'Error';
      jest.spyOn(service, 'getAuthenticators').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[profile-management - manage-authenticators] get authenticators' });
      effects.authenticators$.subscribe((action) => {
        expect(action).toEqual(getAuthenticatorsErrorAction({ error }));
        done();
      });
    });
  });

  describe('update2faStatus', () => {
    it('should trigger update2faStatusSuccessAction', (done) => {
      jest.spyOn(service, 'update2faStatus').mockReturnValue(of(SUCCESS_RESPONSE));
      actions$ = of({ type: '[profile-management - manage-authenticators] update 2FA status' });
      effects.update2faStatus$.subscribe((action) => {
        expect(action).toEqual(update2faStatusSuccessAction({ successResponse: SUCCESS_RESPONSE }));
        done();
      });
    });

    it('should dispatch getErrorAction in update2faStatus', (done) => {
      const error = 'Error';
      jest.spyOn(service, 'update2faStatus').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[profile-management - manage-authenticators] update 2FA status' });
      effects.update2faStatus$.subscribe((action) => {
        expect(action).toEqual(update2faStatusErrorAction({ error }));
        done();
      });
    });
  });

  describe('unenrollFactor', () => {
    it('should trigger unenrollFactorSuccessAction', (done) => {
      jest.spyOn(service, 'unenrollFactor').mockReturnValue(of(SUCCESS_RESPONSE));
      actions$ = of({ type: '[profile-management - manage-authenticators] unenroll factor' });
      effects.unenrollFactor$.subscribe((action) => {
        expect(action).toEqual(unenrollFactorSuccessAction({ successResponse: SUCCESS_RESPONSE }));
        done();
      });
    });

    it('should dispatch getErrorAction in unenrollFactor', (done) => {
      const error = 'Error';
      jest.spyOn(service, 'unenrollFactor').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[profile-management - manage-authenticators] unenroll factor' });
      effects.unenrollFactor$.subscribe((action) => {
        expect(action).toEqual(unenrollFactorErrorAction({ error }));
        done();
      });
    });
  });
});
