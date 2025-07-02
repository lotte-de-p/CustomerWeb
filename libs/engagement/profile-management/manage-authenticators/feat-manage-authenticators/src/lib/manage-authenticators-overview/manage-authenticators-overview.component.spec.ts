import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Authenticators, CustomerProfileFacade, ManageAuthenticatorsConstants } from '@profile-management/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ManageAuthenticatorsOverviewComponent } from './manage-authenticators-overview.component';
import { Observable } from 'rxjs';
import { expect, jest } from '@jest/globals';

describe('ManageAuthenticatorsOverviewComponent', () => {
  let component: ManageAuthenticatorsOverviewComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsOverviewComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ManageAuthenticatorsOverviewComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [CustomerProfileFacade, { provide: 'Window', useValue: {} }],
    });

    fixture = TestBed.createComponent(ManageAuthenticatorsOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle', () => {
    it('should call toggleActivateEvent', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleActivate');

      component.activationItsmeSuccessPageUrl = 'testUrl';
      const authenticator = { type: 'itsme', enabled: false };

      component.onSelectAuthenticator(authenticator);
      expect(facade.toggleActivate).toHaveBeenCalledWith(true);
    });

    it('should call toggleManageEvent', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.deactivationItsmeSuccessPageUrl = 'testUrl';
      const authenticator = { type: 'itsme', enabled: true };

      component.onSelectAuthenticator(authenticator);
      expect(facade.toggleManage).toHaveBeenCalledWith(true);
    });

    it('should call toggleActivate', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleActivate');

      component.toggleActivateEvent(true);
      expect(facade.toggleActivate).toHaveBeenCalledWith(true);
    });

    it('should call toggleManage', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.toggleManageEvent(true);
      expect(facade.toggleManage).toHaveBeenCalledWith(true);
    });

    it('should call onSelectMultiFactor and toggleActivate', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleActivate');

      component.authenticators$ = new Observable<Authenticators | undefined>((subscriber) => {
        subscriber.next({ authenticators: [], '2fa': { enabled: false } });
      });
      component.activation2FASuccessPageUrl = 'testUrl';

      component.onSelectMultiFactor();
      expect(facade.toggleActivate).toHaveBeenCalledWith(true);
    });

    it('should call onSelectMultiFactor and toggleManage', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.authenticators$ = new Observable<Authenticators | undefined>((subscriber) => {
        subscriber.next({ authenticators: [], '2fa': { enabled: true } });
      });
      component.deactivation2FASuccessPageUrl = 'testUrl';

      component.onSelectMultiFactor();
      expect(facade.toggleManage).toHaveBeenCalledWith(true);
    });
  });

  describe('success url', () => {
    it('should select itsme activation success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.activationItsmeSuccessPageUrl = 'testUrl';
      const authenticator = { type: 'itsme', enabled: false };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });

    it('should select itsme deactivation success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.deactivationItsmeSuccessPageUrl = 'testUrl';
      const authenticator = { type: 'itsme', enabled: true };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });

    it('should select passkey activation success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.activationPasskeySuccessPageUrl = 'testUrl';
      const authenticator = { type: 'passkey', enabled: false };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });

    it('should select passkey deactivation success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.deactivationPasskeySuccessPageUrl = 'testUrl';
      const authenticator = { type: 'passkey', enabled: true };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });

    it('should select authenticator activation success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.activationAuthenticatorSuccessPageUrl = 'testUrl';
      const authenticator = { type: 'authenticator', enabled: false };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });

    it('should select authenticator deactivation success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.deactivationAuthenticatorSuccessPageUrl = 'testUrl';
      const authenticator = { type: 'authenticator', enabled: true };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });

    it('should select profile settings success url', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'toggleManage');

      component.profileSettingsPageUrl = 'testUrl';
      const authenticator = { type: 'sms', enabled: true };

      component.onSelectAuthenticator(authenticator);
      expect(component.successPageUrl).toEqual('testUrl');
    });
  });

  describe('onInit', () => {
    it('should trigger onInit', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'unenrollFactor');

      jest.spyOn(window.sessionStorage, 'getItem');
      window.sessionStorage.setItem(ManageAuthenticatorsConstants.FACTOR_TYPE, JSON.stringify('itsme'));
      window.sessionStorage.setItem(ManageAuthenticatorsConstants.FACTOR_ID, JSON.stringify('abc123'));
      window.sessionStorage.setItem(
        ManageAuthenticatorsConstants.SUCCESS_PAGE_URL,
        JSON.stringify('http://success.com')
      );

      component.unenrollFactorSuccessResponse$ = new Observable<boolean | undefined>((subscriber) => {
        subscriber.next(true);
      });

      Object.defineProperty(window, 'location', {
        writable: true,
        value: { href: jest.fn() },
      });

      component.ngOnInit();

      expect(facade.unenrollFactor).toHaveBeenCalledWith({ type: 'itsme', id: 'abc123' });
      expect(window.location.href).toBe('http://success.com');
    });
  });
});
