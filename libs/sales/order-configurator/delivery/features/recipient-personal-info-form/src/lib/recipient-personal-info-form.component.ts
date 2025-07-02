import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
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
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { SalesPhoneNumberValidator } from '@sales/shared/util';

@Component({
  standalone: true,
  imports: [NgClass, CommonModule, ReactiveFormsModule, TranslateModule],
  selector: 'tg-order-configurator-delivery-feat-recipient-personal-info-form',
  templateUrl: './recipient-personal-info-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecipientPersonalInfoFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RecipientPersonalInfoFormComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class RecipientPersonalInfoFormComponent implements ControlValueAccessor, Validator {
  @Input() validateOnInit = false;

  personalInfoForm: FormGroup = new FormGroup({});
  personalInfo: PersonalInfo | undefined;
  onChange: ((personalInfo: PersonalInfo) => void) | undefined;

  constructor(private readonly formBuilder: FormBuilder) {}

  onTouch: () => void = () => {
    // empty implementation
  };

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

    this.personalInfoForm.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      this.onFieldChanged();
    });

    if (this.validateOnInit) {
      this.personalInfoForm.markAllAsTouched();
    }
  }
}
