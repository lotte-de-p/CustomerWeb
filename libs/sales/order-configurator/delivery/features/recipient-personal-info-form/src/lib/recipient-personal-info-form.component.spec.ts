import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RecipientPersonalInfoFormComponent } from './recipient-personal-info-form.component';

describe('RecipientPersonalInfoFormComponent', () => {
  let component: RecipientPersonalInfoFormComponent;
  let fixture: ComponentFixture<RecipientPersonalInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        RecipientPersonalInfoFormComponent, // Import the standalone component
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipientPersonalInfoFormComponent);
    component = fixture.componentInstance;

    component.personalInfo = {
      firstname: 'John',
      lastname: 'Doe',
      mobile: '123456789',
      email: 'john.doe1@example.com',
    };

    component.writeValue(component.personalInfo);
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls with default values', () => {
    component.personalInfo = {
      firstname: 'John',
      lastname: 'Doe',
      mobile: '123456789',
      email: 'john.doe@example.com',
    };

    component.writeValue(component.personalInfo);

    fixture.detectChanges();

    expect(component.personalInfoForm.get('firstname')?.value).toEqual('John');
    expect(component.personalInfoForm.get('lastname')?.value).toEqual('Doe');
    expect(component.personalInfoForm.get('mobile')?.value).toEqual('123456789');
    expect(component.personalInfoForm.get('email')?.value).toEqual('john.doe@example.com');
  });

  it('should call onFieldChanged when a form field value changes', () => {
    const onFieldChangedSpy = jest.spyOn(component, 'onFieldChanged');

    component.personalInfoForm.get('firstname')?.setValue('Jane');
    fixture.detectChanges();

    expect(onFieldChangedSpy).toHaveBeenCalled();
  });

  it('should mark the form as invalid when required fields are empty', () => {
    component.personalInfoForm.get('firstname')?.setValue('');
    component.personalInfoForm.get('lastname')?.setValue('');
    component.personalInfoForm.get('mobile')?.setValue('');
    component.personalInfoForm.get('email')?.setValue('');

    expect(component.personalInfoForm.valid).toBe(false);
    expect(component.personalInfoForm.get('firstname')?.hasError('required')).toBe(true);
    expect(component.personalInfoForm.get('lastname')?.hasError('required')).toBe(true);
    expect(component.personalInfoForm.get('mobile')?.hasError('required')).toBe(true);
    expect(component.personalInfoForm.get('email')?.hasError('required')).toBe(true);
  });

  it('should invalidate incorrect email formats', () => {
    component.personalInfoForm.get('email')?.setValue('invalidemail');

    expect(component.personalInfoForm.get('email')?.valid).toBe(false);
    expect(component.personalInfoForm.get('email')?.hasError('email')).toBe(true);
  });

  it('should validate phone numbers using the SalesPhoneNumberValidator', () => {
    const validPhoneNumber = '003211234567';
    const invalidPhoneNumber = 'abcd1234';

    component.personalInfoForm.get('mobile')?.setValue(validPhoneNumber);
    expect(component.personalInfoForm.get('mobile')?.valid).toBe(true);

    component.personalInfoForm.get('mobile')?.setValue(invalidPhoneNumber);
    expect(component.personalInfoForm.get('mobile')?.errors).toEqual({ format: true });
  });

  it('should register onTouch callback', () => {
    const onTouchMock = jest.fn();
    component.registerOnTouched(onTouchMock);

    component.onTouch();
    expect(onTouchMock).toHaveBeenCalled();
  });
});
