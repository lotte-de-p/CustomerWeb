import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileFormComponent } from './user-profile-form.component';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { InputOption } from '@telenet/ng-lib-form';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { SalutationInputOptionService } from '../../services/salutation-input-option.service';
import { LanguageInputOptionService } from '../../services/language-input-option.service';
import { expect, jest } from '@jest/globals';

describe('UserProfileFormComponent', () => {
  let component: UserProfileFormComponent;
  let fixture: ComponentFixture<UserProfileFormComponent>;
  let salutationInputOptionService: SalutationInputOptionService;
  let phoneNumberTransformService: PhoneNumberTransformService;
  let languageInputOptionService: LanguageInputOptionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormBuilder, { provide: 'Window', useValue: {} }],
      imports: [
        FormsModule,
        UserProfileFormComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    salutationInputOptionService = TestBed.inject(SalutationInputOptionService);
    phoneNumberTransformService = TestBed.inject(PhoneNumberTransformService);
    languageInputOptionService = TestBed.inject(LanguageInputOptionService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup<unknown>({
      description: new FormControl(),
      salutation: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormGroup({ id: new FormControl(), emailValue: new FormControl() }),
      phoneNumber: new FormGroup({ id: new FormControl(), phoneNumberValue: new FormControl() }),
      language: new FormControl(),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    const salutationOptions = [
      new InputOption('salutation-value-1', 'label-1'),
      new InputOption('salutation-value-2', 'label-2'),
    ];
    const languageOptions = [
      new InputOption('language-value-1', 'label-1'),
      new InputOption('language-value-2', 'label-2'),
    ];

    it('should load option input lists', () => {
      jest.spyOn(salutationInputOptionService, 'getSalutationOptions').mockReturnValue(salutationOptions);
      jest.spyOn(languageInputOptionService, 'getLanguageOptions').mockReturnValue(languageOptions);

      component.ngOnInit();

      expect(component.salutationOptionList).toEqual(salutationOptions);
      expect(component.languages).toEqual(languageOptions);
    });
  });

  describe('autoFormatPhoneNumber', () => {
    it('should not call auto format phone number if phone number value is empty', () => {
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber');
      component.form = createMockForm();

      component.autoFormatPhoneNumber();
      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toBe('');
      expect(phoneNumberTransformService.autoFormatPhoneNumber).not.toHaveBeenCalled();
    });

    it('should not call auto format phone number if phone number value is valid', () => {
      const expectedResult = '0457956895';
      component.form = createMockForm();
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber');
      component.form.get(['phoneNumber', 'phoneNumberValue'])?.setValue(expectedResult);

      component.autoFormatPhoneNumber();

      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toBe(expectedResult);
      expect(phoneNumberTransformService.autoFormatPhoneNumber).not.toHaveBeenCalled();
    });

    it('should call auto format phone number if phone number is invalid', () => {
      component.form = createMockForm();
      component.form.get(['phoneNumber', 'phoneNumberValue'])?.setValue('32457956895');
      const expectedPhoneNumber = '0457956895';
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber').mockReturnValue(expectedPhoneNumber);

      component.autoFormatPhoneNumber();

      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toBe(expectedPhoneNumber);
    });
  });

  it('should return label key for correct message group', () => {
    const expectedResult = 'ng.create-fleet-line.button-label.lbl';
    component.messageGroupName = 'create-fleet-line';
    const actualResult = component.getLabel('button-label');
    expect(actualResult).toBe(expectedResult);
  });

  describe('isContactDetailsNotEditable', () => {
    it('should return false if isContactDetailsEditable value is set to true', () => {
      component.isContactDetailsEditable = true;
      expect(component.isContactDetailsNotEditable).toBe(false);
    });

    it('should return true if isContactDetailsEditable value is set to false', () => {
      component.isContactDetailsEditable = false;
      expect(component.isContactDetailsNotEditable).toBe(true);
    });
  });

  function createMockForm(): FormGroup {
    return new FormGroup({
      description: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormGroup({
        id: new FormControl(''),
        emailValue: new FormControl(''),
      }),
      phoneNumber: new FormGroup({
        id: new FormControl(''),
        phoneNumberValue: new FormControl(''),
      }),
      language: new FormControl(),
      salutation: new FormControl(),
    });
  }
});
