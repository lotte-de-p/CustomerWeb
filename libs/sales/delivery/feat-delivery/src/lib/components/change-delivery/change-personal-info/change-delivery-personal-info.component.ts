import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { PersonalInfo } from '@sales/delivery/data-access';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { SalesPhoneNumberValidator } from '@sales/shared/util';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, CommonModule, ReactiveFormsModule, TranslateModule],
  selector: 'tg-sales-change-delivery-personal-info',
  templateUrl: './change-delivery-personal-info.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChangeDeliveryPersonalInfoComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ChangeDeliveryPersonalInfoComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class ChangeDeliveryPersonalInfoComponent implements ControlValueAccessor, Validator {
  @Input() validateOnInit = false;

  personalInfoForm: FormGroup = new FormGroup({});
  personalInfo: PersonalInfo | undefined;
  onChange: ((personalInfo: PersonalInfo) => void) | undefined;

  constructor(private readonly formBuilder: FormBuilder) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: () => void = () => {};

  registerOnChange(fn: (personalInfo: PersonalInfo) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(personalInfo: PersonalInfo): void {
    this.personalInfo = personalInfo;
    this.initForm();
  }

  validate(): ValidationErrors | null {
    if (this.personalInfoForm.valid) {
      return null;
    }
    return { invalidForm: { valid: false } };
  }

  onFieldChanged(): void {
    this.personalInfo = {
      firstname: this.personalInfoForm.get('firstname')?.value,
      lastname: this.personalInfoForm.get('lastname')?.value,
      mobile: this.personalInfoForm.get('mobile')?.value,
      email: this.personalInfoForm.get('email')?.value,
    };
    if (this.onChange) {
      this.onChange(this.personalInfo);
    }
  }

  private initForm() {
    this.personalInfoForm = this.formBuilder.group({});

    this.personalInfoForm.addControl('firstname', new FormControl(this.personalInfo?.firstname, [Validators.required]));
    this.personalInfoForm.addControl('lastname', new FormControl(this.personalInfo?.lastname, [Validators.required]));
    this.personalInfoForm.addControl(
      'mobile',
      new FormControl(this.personalInfo?.mobile, [Validators.required, SalesPhoneNumberValidator.validNumber])
    );
    this.personalInfoForm.addControl(
      'email',
      new FormControl(this.personalInfo?.email, [Validators.required, Validators.email])
    );

    if (this.validateOnInit) {
      this.personalInfoForm.markAllAsTouched();
    }
  }
}
