import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalDetailsComponent } from './personal-details.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileDetailsFormComponent } from './views/profile-details-form/';
import { Step, StepBuilder } from '@telenet/ng-lib-step-flow';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { selectCurrentStepKey } from '@sales/shared/data-access';
import { when } from 'jest-when';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import {
  AuthorConfigurationFacade,
  PersonalDetails,
  PersonalDetailsFacade,
  Salutation,
} from '@sales/customer-registration/data-access';

@Component({
  selector: 'tg-sales-profile-details-form',
  template: '',
  providers: [
    {
      provide: ProfileDetailsFormComponent,
      useExisting: StubFormComponent,
    },
  ],
})
export class StubFormComponent {
  validateForm(): boolean {
    return true;
  }
  getUserInputPayload(): PersonalDetails {
    return {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      salutation: Salutation.DHR,
    };
  }
  getDOB(): Date {
    return new Date();
  }
}

describe('PersonalDetailsComponent', () => {
  let personalDetailsFacade: PersonalDetailsFacade;
  let authorConfigurationFacade: AuthorConfigurationFacade;
  let component: PersonalDetailsComponent;
  let fixture: ComponentFixture<PersonalDetailsComponent>;
  const customerRegistrationSteps: Step = StepBuilder.builder('profile-details').build();
  const TEST_URL = 'http://testurl.com';
  const mockWindow = {
    location: {
      href: TEST_URL,
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
    document: {
      documentElement: {
        lang: 'NL',
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectCurrentStepKey,
              value: 'personal',
            },
          ],
        }),
        FormBuilder,
        { provide: 'Window', useValue: mockWindow },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    authorConfigurationFacade = TestBed.inject(AuthorConfigurationFacade);
    personalDetailsFacade = TestBed.inject(PersonalDetailsFacade);
    customerRegistrationSteps.nextButtonCallback = jest.fn();
    fixture = TestBed.createComponent(PersonalDetailsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should init toggle active to false and restrictive product disclaimer to false if customer is registering as a business customer ', () => {
      when(jest.spyOn(authorConfigurationFacade, 'isResidential')).mockReturnValue(false);
      when(jest.spyOn(authorConfigurationFacade, 'isBusiness')).mockReturnValue(true);
      jest.spyOn(personalDetailsFacade, 'readEncryptedUrlData');
      component.ngOnInit();
      expect(component.isToggleActive).toBe(false);
      expect(component.isRestrictedProductDisclaimerVisible).toBe(false);
      expect(personalDetailsFacade.readEncryptedUrlData).toHaveBeenCalledTimes(1);
    });
    it('should init toggle active to true and restrictive product disclaimer to false if customer is registering as a residential customer ', () => {
      when(jest.spyOn(authorConfigurationFacade, 'isResidential')).mockReturnValue(true);
      when(jest.spyOn(authorConfigurationFacade, 'isBusiness')).mockReturnValue(false);
      jest.spyOn(personalDetailsFacade, 'readEncryptedUrlData');
      component.ngOnInit();
      expect(component.isToggleActive).toBe(true);
      expect(component.isRestrictedProductDisclaimerVisible).toBe(false);
      expect(personalDetailsFacade.readEncryptedUrlData).toHaveBeenCalledTimes(1);
    });
  });

  describe('onNextStep', () => {
    it('should call validate form and determine if can proceed to next step', () => {
      component.profileDetailsFormComponent = new StubFormComponent() as ProfileDetailsFormComponent;
      component.onNextStep().subscribe((value: boolean) => {
        expect(value).toBe(true);
      });
    });
    it('should return observable false if no form found', () => {
      component.profileDetailsFormComponent = undefined;
      component.onNextStep().subscribe((value: boolean) => {
        expect(value).toBe(false);
      });
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
