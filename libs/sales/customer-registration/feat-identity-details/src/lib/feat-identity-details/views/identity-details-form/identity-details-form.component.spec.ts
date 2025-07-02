import { IdentityDetailsFormComponent } from './identity-details-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormErrorService } from '@telenet/ng-lib-form';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

import { Salutation } from '@sales/customer-registration/data-access';

describe('IdentityDetailsFormComponent', () => {
  let component: IdentityDetailsFormComponent;
  let fixture: ComponentFixture<IdentityDetailsFormComponent>;

  const TEST_URL = 'http://testurl.be';

  const itsMeDetails = {
    cardIDNumber: '1234567890',
    rrn: '82.11.29-556.82',
    birthLocation: 'Brussels',
    email: 'jane.doe@gmail.com',
    phoneNumber: '0484098765',
    birthday: '31/12/1993',
    gender: 'female',
    nationality: 'Belgian',
    firstName: 'Jane',
    lastName: 'Doe',
    emailVerified: false,
  };

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
        IdentityDetailsFormComponent,
      ],
      providers: [
        FormBuilder,
        FormErrorService,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
      ],
    }).compileComponents();
    mockWindow.location.assign = jest.fn();
    fixture = TestBed.createComponent(IdentityDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init personal view and add controls to form with values available in state', () => {
      component.userInput = {
        personalDetails: {
          salutation: Salutation.DHR,
          firstName: 'John',
          lastName: 'Doe',
          phoneNumber: '0484098765',
          email: 'john.doe@gmail.com',
        },
        identityDetails: {
          dateOfBirth: new Date('1995/8/12'),
          nationalRegistrationNumber: '17.07.30-033.84',
        },
        businessIdentityDetails: {
          companyName: 'DoeInc',
          legalForm: 'NV',
          belgianEnterpriseNumber: '123456789',
          installationAddressToggle: false,
          billingAddressToggle: false,
        },
      };

      component.ngOnInit();

      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField']).toBeDefined();
      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe('17.07.30-033.84');
      expect(component.identityDetailsForm.controls['day']).toBeDefined();
      expect(component.identityDetailsForm.controls['day'].value).toBe('12');
      expect(component.identityDetailsForm.controls['selectedMonth']).toBeDefined();
      expect(component.identityDetailsForm.controls['selectedMonth'].value).toBe('8');
      expect(component.identityDetailsForm.controls['year']).toBeDefined();
      expect(component.identityDetailsForm.controls['year'].value).toBe('1995');
    });

    it('should init personal view and add controls to form with default values if not available in state', () => {
      component.ngOnInit();

      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBeDefined();
      expect(component.identityDetailsForm.controls['day'].value).toBeDefined();
      expect(component.identityDetailsForm.controls['selectedMonth'].value).toBeDefined();
      expect(component.identityDetailsForm.controls['year'].value).toBeDefined();
    });

    it('should populate form with default values if identityDetails is undefined', () => {
      component.userInput = {
        personalDetails: {
          salutation: Salutation.DHR,
          firstName: 'John',
          lastName: 'Doe',
          phoneNumber: '0484098765',
          email: 'john.doe@gmail.com',
        },
        identityDetails: {
          dateOfBirth: new Date(''),
          nationalRegistrationNumber: '',
        },
        businessIdentityDetails: {
          companyName: 'DoeInc',
          legalForm: 'NV',
          belgianEnterpriseNumber: '123456789',
          installationAddressToggle: false,
          billingAddressToggle: false,
        },
      };

      component.ngOnInit();

      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe('');
      expect(component.identityDetailsForm.controls['day'].value).toBe('NaN');
    });

    it('should set minDefaultAge to 16 if product category includes prepaid', () => {
      component.prepaidOmapiProductExists = true;

      component.ngOnInit();

      expect(component.minDefaultAge).toBe(16);
    });

    it('should set minDefaultAge to 18 if product category does not include prepaid', () => {
      component.prepaidOmapiProductExists = false;

      component.ngOnInit();

      expect(component.minDefaultAge).toBe(18);
    });

    it('should set minDefaultAge to 18 if omapiProducts is undefined', () => {
      component.prepaidOmapiProductExists = undefined;

      component.ngOnInit();

      expect(component.minDefaultAge).toBe(18);
    });
  });

  describe('validateForm', () => {
    it('should validate form and return true if all the inputs are valid', () => {
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setValue('54.07.30-535.39');
      component.identityDetailsForm.controls['day'].setValue('30');
      component.identityDetailsForm.controls['selectedMonth'].setValue('07');
      component.identityDetailsForm.controls['year'].setValue('1954');
      component.identityDetailsForm.controls['selectedMonth'].setValue('7');

      const isValid = component.validateForm();

      expect(isValid).toBe(true);
    });

    it('should validate form and return false if there are invalid inputs', () => {
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setValue('63102987734');
      component.identityDetailsForm.controls['day'].setValue('25');
      component.identityDetailsForm.controls['selectedMonth'].setValue('12');
      component.identityDetailsForm.controls['year'].setValue('1883');

      const isValid = component.validateForm();
      expect(isValid).toBe(false);
    });
  });

  describe('extractDateOfBirth', () => {
    it('should extract and set the date of birth correctly from NRN', () => {
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setValue(itsMeDetails.rrn);
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].markAsTouched();
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setErrors(null);
      jest.spyOn(component.searchCustomerEmitter, 'emit');

      component.extractDateOfBirthFromNRN();

      expect(component.identityDetailsForm.controls['day'].value).toBe('29');
      expect(component.identityDetailsForm.controls['selectedMonth'].value).toBe('11');
      expect(component.identityDetailsForm.controls['year'].value).toBe('1982');
      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe(itsMeDetails.rrn);
      expect(component.searchCustomerEmitter.emit).toHaveBeenCalled();
    });

    it('should handle NRN with invalid date parts 00 as 01', () => {
      const nrn = '93.00.00-123.70';
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setValue(nrn);
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].markAsTouched();
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setErrors(null);
      jest.spyOn(component.searchCustomerEmitter, 'emit');
      component.extractDateOfBirthFromNRN();
      expect(component.identityDetailsForm.controls['day'].value).toBe('1');
      expect(component.identityDetailsForm.controls['selectedMonth'].value).toBe('1');
      expect(component.identityDetailsForm.controls['year'].value).toBe('1993');
      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe(nrn);
      expect(component.searchCustomerEmitter.emit).toHaveBeenCalled();
    });

    it('should not extract DOB from NRN if it is invalid', () => {
      const invalidNRN = '95.45.92-343.69';
      component.identityDetailsForm.controls['nationalRegistrationNumberField'].setValue(invalidNRN);
      jest.spyOn(component.searchCustomerEmitter, 'emit');
      component.extractDateOfBirthFromNRN();
      expect(component.identityDetailsForm.controls['day'].value).toBe('');
      expect(component.identityDetailsForm.controls['selectedMonth'].value).toBe('');
      expect(component.identityDetailsForm.controls['year'].value).toBe('');
      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe(invalidNRN);
      expect(component.searchCustomerEmitter.emit).not.toHaveBeenCalled();
    });
  });

  describe('populateFormFieldsFromItsMe', () => {
    it('should populate form fields from itsMeDetails', () => {
      component.itsMeDetails = itsMeDetails;

      component.ngOnInit();

      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe(itsMeDetails.rrn);
      expect(component.identityDetailsForm.controls['day'].value).toBe('29');
      expect(component.identityDetailsForm.controls['selectedMonth'].value).toBe('11');
      expect(component.identityDetailsForm.controls['year'].value).toBe('1982');
    });

    it('should not populate form fields if itsMeDetails is null or undefined', () => {
      component.itsMeDetails = null;
      component.ngOnInit();

      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe('');
    });

    it('should not populate form fields if rrn is empty', () => {
      component.itsMeDetails = {
        cardIDNumber: '1234567890',
        rrn: '',
        birthLocation: 'Brussels',
        email: 'jane.doe@gmail.com',
        phoneNumber: '0484098765',
        birthday: '1993-12-31',
        gender: 'female',
        nationality: 'Belgian',
        firstName: 'Jane',
        lastName: 'Doe',
        emailVerified: false,
      };

      component.ngOnInit();

      expect(component.identityDetailsForm.controls['nationalRegistrationNumberField'].value).toBe('');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
