import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Authenticator, CustomerProfileFacade } from '@profile-management/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ManageAuthenticatorsManageComponent } from './manage-authenticators-manage.component';
import { expect, jest } from '@jest/globals';
import { Observable } from 'rxjs';

describe('ManageAuthenticatorsManageComponent', () => {
  let component: ManageAuthenticatorsManageComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsManageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ManageAuthenticatorsManageComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [CustomerProfileFacade, { provide: 'Window', useValue: {} }],
    });

    fixture = TestBed.createComponent(ManageAuthenticatorsManageComponent);
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

  describe('manage', () => {
    it('when authenticator type is sms, should redirect to profile settings url', () => {
      const authenticator = { type: 'sms', enabled: true };
      const successPageUrl = 'https://www.int.telenet.be/residential/nl/mytelenet/profiel/';
      component.selectedAuthenticator = authenticator;
      component.successPageUrl = successPageUrl;

      Object.defineProperty(window, 'location', {
        writable: true,
        value: { href: jest.fn() },
      });

      component.manage();

      expect(window.location.href).toBe(successPageUrl);

      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: 'local',
      });
    });

    it('2FA should trigger update2faStatus on facade', () => {
      const facade = TestBed.inject(CustomerProfileFacade);
      jest.spyOn(facade, 'update2faStatus');

      component.selectedAuthenticator = {
        type: '2FA',
        enabled: true,
      } as Authenticator;

      component.deactivate2FA();

      expect(facade.update2faStatus).toHaveBeenCalledWith(false);
    });
  });

  describe('cancel', () => {
    it('on cancel should disable manage component', () => {
      component.cancel();

      expect(component.showManage).toBe(true);
    });
  });
});
