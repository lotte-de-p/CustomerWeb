import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ConfigService } from '@telenet/ng-lib-config';
import { LoaderModule, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { LoginDetails, LoginModule, LoginService, OcapiService } from '@telenet/ng-lib-ocapi';
import { ManageSocialLoginComponent } from './manage-social-login.component';
import {
  CustomerProfileFacade,
  CustomerProfileService,
  ProfileDetailsMapper,
  SocialLoginsMapper,
} from '@profile-management/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { expect } from '@jest/globals';
import { of } from 'rxjs';

describe('ManageSocialLoginComponent', () => {
  let component: ManageSocialLoginComponent;
  let fixture: ComponentFixture<ManageSocialLoginComponent>;
  let loginDetails: LoginDetails;
  let loginService: LoginService;
  let customerProfileFacade: CustomerProfileFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginModule,
        LoaderModule,
        MatDialogModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
      providers: [
        CustomerProfileService,
        ProfileDetailsMapper,
        SocialLoginsMapper,
        LoginService,
        UrlService,
        ConfigService,
        MatDialog,
        OcapiService,
        PathCategorisationService,
        {
          provide: 'Window',
          useValue: {
            location: { href: 'redirecturl' },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageSocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginService = TestBed.inject(LoginService);
    customerProfileFacade = TestBed.inject(CustomerProfileFacade);

    loginDetails = new LoginDetails(200);
    loginDetails.identityId = '12345';
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('ngOnInit', () => {
    it('should load user details after user logged in', () => {
      jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(loginDetails));
      component.initAfterLoggedIn();
      component.ngOnInit();
      expect(component.loggedIn).toBe(true);
      expect(loginService.getLoginDetails).toHaveBeenCalled();
    });

    it('should return social logins based on identity', () => {
      jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(loginDetails));
      jest.spyOn(customerProfileFacade, 'loadSocialLogins').mockReturnValue();
      component.ngOnInit();
      expect(customerProfileFacade.loadSocialLogins).toHaveBeenCalledWith();
    });
  });
});
