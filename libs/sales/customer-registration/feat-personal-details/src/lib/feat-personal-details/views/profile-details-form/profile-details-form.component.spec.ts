import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileDetailsFormComponent } from './profile-details-form.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorService } from '@telenet/ng-lib-form';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import {
  customerRegistrationFactory,
  PersonalDetailsFacade,
  Salutation,
} from '@sales/customer-registration/data-access';

export class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

describe('ProfileDetailsFormComponent', () => {
  let component: ProfileDetailsFormComponent;
  let fixture: ComponentFixture<ProfileDetailsFormComponent>;
  let facade: PersonalDetailsFacade;

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
        provideMockStore(),
        FormBuilder,
        FormErrorService,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
        PersonalDetailsFacade,
        {
          provide: ElementRef,
          useValue: MockElementRef,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    mockWindow.location.assign = jest.fn();
    facade = TestBed.inject(PersonalDetailsFacade);
    fixture = TestBed.createComponent(ProfileDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init personal view and add controls to form with values available from input', () => {
      component.personalDetails = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'bruce.wayne@gmail.com',
        phoneNumber: '+32478456745',
        salutation: Salutation.DHR,
      };
      jest.spyOn(facade, 'getRequestParams').mockReturnValue({});
      facade.dateOfBirth$ = of(new Date('12/12/2024'));
      component.category = 'business';

      component.ngOnInit();

      expect(component.profileDetailsForm.controls['salutationField'].value).toBe('Mr.');
      expect(component.profileDetailsForm.controls['firstNameField']).toBeDefined();
      expect(component.profileDetailsForm.controls['firstNameField'].value).toBe('Bruce');
      expect(component.profileDetailsForm.controls['lastNameField']).toBeDefined();
      expect(component.profileDetailsForm.controls['lastNameField'].value).toBe('Wayne');
      expect(component.profileDetailsForm.controls['emailField']).toBeDefined();
      expect(component.profileDetailsForm.controls['emailField'].value).toBe('bruce.wayne@gmail.com');
      expect(component.profileDetailsForm.controls['phoneNumberField']).toBeDefined();
      expect(component.profileDetailsForm.controls['phoneNumberField'].value).toBe('+32478456745');
      expect(component.profileDetailsForm.controls['day'].value).toBe('12');
      expect(component.profileDetailsForm.controls['selectedMonth'].value).toBe('12');
      expect(component.profileDetailsForm.controls['year'].value).toBe('2024');
      expect(component.profileDetailsForm.controls['day'].hasValidator(Validators.required)).toBeTruthy();
      expect(component.profileDetailsForm.controls['selectedMonth'].hasValidator(Validators.required)).toBeTruthy();
      expect(component.profileDetailsForm.controls['year'].hasValidator(Validators.required)).toBeTruthy();
    });

    it('should init personal view and add controls to form with default values if not available in state and has no url parameters', () => {
      jest.spyOn(facade, 'getRequestParams').mockReturnValue({});
      jest.spyOn(component.profileDetailsForm, 'addControl');

      component.ngOnInit();

      expect(component.profileDetailsForm.controls['salutationField'].value).toBe('Mr.');
      expect(component.profileDetailsForm.controls['firstNameField']).toBeDefined();
      expect(component.profileDetailsForm.controls['lastNameField']).toBeDefined();
      expect(component.profileDetailsForm.controls['emailField']).toBeDefined();
      expect(component.profileDetailsForm.controls['phoneNumberField']).toBeDefined();
    });
  });

  const phoneNumber = '0456 74 56 78';
  describe('formatPhoneNumber', () => {
    it('should format phone number and update phoneNumberFiled with this formatted value and update state', () => {
      component.profileDetailsForm.controls['phoneNumberField'].setValue('+32456745678');
      component.profileDetailsForm.controls['salutationField'].setValue('Mrs.');
      component.profileDetailsForm.controls['firstNameField'].setValue('Tom');
      component.profileDetailsForm.controls['lastNameField'].setValue('Hanks');
      component.profileDetailsForm.controls['emailField'].setValue('tom.hanks@gmail.com');

      jest.spyOn(facade, 'formatPhoneNumber').mockReturnValue(phoneNumber);
      component.formatPhoneNumber();

      expect(component.profileDetailsForm.controls['phoneNumberField'].value).toBe(phoneNumber);
    });
  });
  describe('validateForm', () => {
    const email = 'violet.evergarden@gmail.com';
    it('should validate form and return true if all the inputs are valid', () => {
      component.profileDetailsForm.controls['salutationField'].setValue('Mrs.');
      component.profileDetailsForm.controls['firstNameField'].setValue('Violet');
      component.profileDetailsForm.controls['lastNameField'].setValue('Evergarden');
      component.profileDetailsForm.controls['emailField'].setValue(email);
      component.profileDetailsForm.controls['phoneNumberField'].setValue(phoneNumber);
      const valid = component.validateForm();
      expect(valid).toBe(true);
    });
    it('should validate form and return false if there are invalid inputs', () => {
      component.profileDetailsForm.controls['salutationField'].setValue('Mrs.');
      component.profileDetailsForm.controls['firstNameField'].setValue('Violet');
      component.profileDetailsForm.controls['lastNameField'].setValue('Evergarden');
      component.profileDetailsForm.controls['emailField'].setValue('violet.evergarden');
      component.profileDetailsForm.controls['phoneNumberField'].setValue('');
      const valid = component.validateForm();
      expect(valid).toBe(false);
    });
  });
  describe('getUserInputPayload', () => {
    it('should return the form values in an personal details interface', () => {
      component.profileDetailsForm.controls['phoneNumberField'].setValue('+32456745678');
      component.profileDetailsForm.controls['salutationField'].setValue('Mr.');
      component.profileDetailsForm.controls['firstNameField'].setValue('Paul');
      component.profileDetailsForm.controls['lastNameField'].setValue('Atreides');
      component.profileDetailsForm.controls['emailField'].setValue('kwisatzhaderach@gmail.com');

      const userInputPayload = component.getUserInputPayload();
      expect(userInputPayload.email).toEqual('kwisatzhaderach@gmail.com');
      expect(userInputPayload.firstName).toEqual('Paul');
      expect(userInputPayload.lastName).toEqual('Atreides');
      expect(userInputPayload.salutation).toEqual(Salutation.DHR);
      expect(userInputPayload.phoneNumber).toEqual('+32456745678');
    });

    it('should return MVR salutation given mrs. in the formcontrol', () => {
      component.profileDetailsForm.controls['salutationField'].setValue('Mrs.');
      const userInputPayload = component.getUserInputPayload();

      expect(userInputPayload.salutation).toEqual(Salutation.MVR);
    });
  });

  describe('populateFormFieldsFromItsMe', () => {
    it('should populate form fields from itsMeDetails', () => {
      const initialState = customerRegistrationFactory.build();
      component.itsMeDetails = initialState.itsMeResult;

      component.ngOnInit();

      expect(component.profileDetailsForm.controls['firstNameField'].value).toBe('JANE');
      expect(component.profileDetailsForm.controls['lastNameField'].value).toBe('FONDA');
      expect(component.profileDetailsForm.controls['emailField'].value).toBe('jane.fonda@telenet.be');
      expect(component.profileDetailsForm.controls['phoneNumberField'].value).toBe('0412345678');
    });

    it('should not populate form fields if itsMeDetails is null or undefined', () => {
      component.itsMeDetails = null;
      component.ngOnInit();

      expect(component.profileDetailsForm.controls['firstNameField'].value).toBe('');
      expect(component.profileDetailsForm.controls['phoneNumberField'].value).toBe('');
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
