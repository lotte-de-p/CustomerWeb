import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExtractDobUtil, NameValidator, SalesPhoneNumberValidator } from '@sales/shared/util';
import { TgFormsModule } from '@telenet/ng-lib-form';
import {
  ItsMeResponseInterface,
  PersonalDetails,
  PersonalDetailsFacade,
  Salutation,
} from '@sales/customer-registration/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'tg-sales-profile-details-form',
  templateUrl: './profile-details-form.component.html',
  imports: [TranslateModule, TgFormsModule, ReactiveFormsModule, NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailsFormComponent implements OnInit {
  profileDetailsForm: FormGroup;
  isValidNumber = false;
  @Input()
  customerBrand: string | null | undefined;
  @Input()
  category: string | null | undefined;
  @Input()
  isPidEnabled: boolean | null | undefined;
  @Input()
  personalDetails: PersonalDetails | null | undefined;
  @Input() set itsMeDetails(value: ItsMeResponseInterface | null) {
    this._itsMeDetails = value;
    this.populatePersonalDetailsFromItsMe();
  }
  _itsMeDetails: ItsMeResponseInterface | null | undefined;

  constructor(
    private readonly personalDetailsFacade: PersonalDetailsFacade,
    private readonly _element: ElementRef,
    private readonly formBuilder: FormBuilder,
    private readonly cdref: ChangeDetectorRef
  ) {
    const nameValidation = [Validators.required, Validators.minLength(1), NameValidator.validName];
    this.profileDetailsForm = this.formBuilder.group({
      firstNameField: ['', nameValidation],
      lastNameField: ['', nameValidation],
      salutationField: ['Mr.', Validators.required],
      emailField: ['', [Validators.required, Validators.email, Validators.maxLength(80)]],
      phoneNumberField: ['', [Validators.required, SalesPhoneNumberValidator.validNumber]],
      day: [''],
      selectedMonth: [''],
      year: [''],
    });
  }
  ngOnInit(): void {
    this.populateDetailsFromInput();
  }

  private populateDetailsFromInput() {
    if (
      this.personalDetails !== undefined &&
      this.personalDetails !== null &&
      this.personalDetails.firstName.length > 0
    ) {
      this.profileDetailsForm.patchValue({
        firstNameField: this.personalDetails.firstName,
        lastNameField: this.personalDetails.lastName,
        emailField: this.personalDetails.email,
        phoneNumberField: this.personalDetails.phoneNumber,
        salutationField: this.personalDetails.salutation === Salutation.DHR ? 'Mr.' : 'Mrs.',
      });
    }
    if (this.category === 'business') {
      this.profileDetailsForm.controls['day'].setValidators([Validators.required]);
      this.profileDetailsForm.controls['year'].setValidators([Validators.required]);
      this.profileDetailsForm.controls['selectedMonth'].setValidators([Validators.required]);
      this.personalDetailsFacade.dateOfBirth$
        .pipe(
          untilDestroyed(this),
          filter((dob) => !!dob),
          map((dob) => {
            return {
              day: dob?.getDate() + '',
              selectedMonth: ExtractDobUtil.getMonthAsString(new Date(dob + '')),
              year: dob?.getFullYear() + '',
            };
          })
        )
        .subscribe((patchToForm) => {
          this.profileDetailsForm.patchValue(patchToForm);
        });
    }
  }

  private populatePersonalDetailsFromItsMe() {
    if (this._itsMeDetails !== undefined && this._itsMeDetails !== null) {
      this.profileDetailsForm.patchValue({
        firstNameField: this._itsMeDetails.firstName,
        lastNameField: this._itsMeDetails.lastName,
        emailField: this._itsMeDetails.email,
        phoneNumberField: this._itsMeDetails.phoneNumber,
      });
    }
  }

  formatPhoneNumber() {
    this.isValidNumber = true;
    let phone = this.profileDetailsForm.controls['phoneNumberField'].value;
    phone = this.personalDetailsFacade.formatPhoneNumber(phone);
    this.profileDetailsForm.controls['phoneNumberField'].setValue(phone);
  }

  private setFocusOnFirstErrorField(): void {
    const invalidControl = this._element.nativeElement.querySelectorAll('.ng-invalid');
    invalidControl[0]?.focus();
  }

  getUserInputPayload(): PersonalDetails {
    return {
      salutation: this.profileDetailsForm.controls['salutationField'].value === 'Mr.' ? Salutation.DHR : Salutation.MVR,
      firstName: this.profileDetailsForm.controls['firstNameField'].value,
      lastName: this.profileDetailsForm.controls['lastNameField'].value,
      email: this.profileDetailsForm.controls['emailField'].value,
      phoneNumber: this.profileDetailsForm.controls['phoneNumberField'].value,
    };
  }

  getDOB(): Date {
    return ExtractDobUtil.parseDateOfBirth(
      this.profileDetailsForm.controls['day'].value,
      this.profileDetailsForm.controls['selectedMonth'].value,
      this.profileDetailsForm.controls['year'].value
    );
  }

  validateForm(): boolean {
    const valid = this.profileDetailsForm.valid;
    if (!valid) {
      this.profileDetailsForm.markAllAsTouched();
      this.profileDetailsForm.markAsDirty();
      this.cdref.markForCheck();
      this.setFocusOnFirstErrorField();
    }
    return valid;
  }
}
