import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Authenticator, CustomerProfileFacade } from '@profile-management/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { expect, jest } from '@jest/globals';
import { ManageAuthenticatorsActivateComponent } from './manage-authenticators-activate.component';
import { Observable } from 'rxjs';

describe('ManageAuthenticatorsActivateComponent', () => {
  let component: ManageAuthenticatorsActivateComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsActivateComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ManageAuthenticatorsActivateComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [CustomerProfileFacade, { provide: 'Window', useValue: {} }],
    });

    fixture = TestBed.createComponent(ManageAuthenticatorsActivateComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('2FA should redirect', () => {
      component.successPageUrl = 'http://success.com';
      component.update2faSuccessResponse$ = new Observable<boolean | undefined>((subscriber) => {
        subscriber.next(true);
      });

      Object.defineProperty(window, 'location', {
        writable: true,
        value: { href: jest.fn() },
      });
      const expectedUrl = `${component.successPageUrl}`;

      component.ngOnInit();

      expect(window.location.href).toBe(expectedUrl);

      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: 'local',
      });
    });
  });

  describe('activate', () => {
    it('should redirect to enrollment url', () => {
      const mockAuthenticator: Authenticator = {
        enrollmentLink: 'http://mockenrollment.com/enroll',
      } as Authenticator;

      const mockAuthenticatorsInfoUrl = 'http://mockauthenticator.com/info';
      component.selectedAuthenticator = mockAuthenticator;
      component.successPageUrl = mockAuthenticatorsInfoUrl;

      Object.defineProperty(window, 'location', {
        writable: true,
        value: { href: jest.fn() },
      });
      const expectedUrl = `${mockAuthenticator.enrollmentLink}?redirect_uri=${encodeURIComponent(mockAuthenticatorsInfoUrl)}`;

      component.activate();

      expect(window.location.href).toBe(expectedUrl);

      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: 'local',
      });
    });

    it('should redirect to enrollment url with a relative redirect uri', () => {
      const mockAuthenticator: Authenticator = {
        enrollmentLink: 'http://mockenrollment.com/enroll',
      } as Authenticator;

      const mockRelativeUrl = '/success';
      component.selectedAuthenticator = mockAuthenticator;
      component.successPageUrl = mockRelativeUrl;

      const mockOrigin = 'http://mockdomain.com';
      Object.defineProperty(window, 'location', {
        writable: true,
        value: {
          href: jest.fn(),
          origin: mockOrigin,
        },
      });

      const expectedUrl = `${mockAuthenticator.enrollmentLink}?redirect_uri=${encodeURIComponent(mockOrigin + mockRelativeUrl)}`;

      component.activate();

      expect(window.location.href).toBe(expectedUrl);

      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: 'local',
      });
    });

    it('2FA should trigger update2faStatus on facade', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'update2faStatus');

      component.selectedAuthenticator = {
        type: '2fa',
        enabled: true,
      } as Authenticator;

      component.activate();

      expect(facade.update2faStatus).toHaveBeenCalledWith(true);
    });
  });

  describe('cancel', () => {
    it('on cancel should disable activate component', () => {
      component.cancel();

      expect(component.showActivate).toBe(true);
    });
  });
});
