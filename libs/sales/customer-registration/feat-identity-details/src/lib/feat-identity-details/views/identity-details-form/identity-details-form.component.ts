import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NationalRegistryNumberValidator, TgFormsModule } from '@telenet/ng-lib-form';
import { IdentityDetails, UserInput, ItsMeResponseInterface } from '@sales/customer-registration/data-access';
import { NgxMaskDirective } from 'ngx-mask';
import { ExtractDobUtil } from '@sales/shared/util';

@Component({
  selector: 'tg-sales-identity-details-form',
  templateUrl: './identity-details-form.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule, TgFormsModule, ReactiveFormsModule, NgxMaskDirective],
})
export class IdentityDetailsFormComponent implements OnInit {
  identityDetailsForm: FormGroup;
  @Input()
  userInput: UserInput | null | undefined;
  @Input()
  prepaidOmapiProductExists: boolean | null | undefined;
  @Input()
  itsMeDetails: ItsMeResponseInterface | null | undefined;
  @Input()
  isResidential: boolean | undefined;

  @Output()
  searchCustomerEmitter: EventEmitter<string> = new EventEmitter();

  private readonly MIN_AGE_LIMIT_PREPAID = 16;
  private readonly MIN_AGE_LIMIT_POSTPAID = 18;
  minDefaultAge = this.MIN_AGE_LIMIT_POSTPAID;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly _element: ElementRef,
    private readonly cdref: ChangeDetectorRef
  ) {
    this.identityDetailsForm = this.formBuilder.group({
      nationalRegistrationNumberField: ['', [Validators.required, NationalRegistryNumberValidator.isNumberValid]],
      day: ['', [Validators.required]],
      selectedMonth: ['', [Validators.required]],
      year: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.populateIdentityDetailsFormFieldsFromItsMe();
    this.populateFormFieldsFromInput();
    this.setMinimumAgeLimit();
  }

  private populateFormFieldsFromInput(): void {
    if (this.userInput?.identityDetails?.dateOfBirth !== undefined) {
      this.identityDetailsForm.patchValue({
        nationalRegistrationNumberField: this.userInput.identityDetails.nationalRegistrationNumber,
        day: this.userInput.identityDetails.dateOfBirth.getDate() + '',
        selectedMonth: ExtractDobUtil.getMonthAsString(new Date(this.userInput?.identityDetails.dateOfBirth)),
        year: this.userInput.identityDetails.dateOfBirth.getFullYear() + '',
      });
    }
  }

  private populateIdentityDetailsFormFieldsFromItsMe(): void {
    if (this.itsMeDetails !== undefined && this.itsMeDetails !== null && this.itsMeDetails.rrn !== '') {
      this.identityDetailsForm.patchValue({
        belgianEid: this.itsMeDetails.cardIDNumber,
        nationalRegistrationNumberField: this.itsMeDetails.rrn,
      });
      this.extractDateOfBirthFromNRN();
    }
  }

  private setFocusOnFirstErrorField(): void {
    const invalidControl = this._element.nativeElement.querySelectorAll('.ng-invalid');
    invalidControl[0]?.focus();
  }

  getIdentityDetails(): IdentityDetails {
    return {
      nationalRegistrationNumber: this.identityDetailsForm.controls['nationalRegistrationNumberField'].value,
      dateOfBirth: ExtractDobUtil.parseDateOfBirth(
        this.identityDetailsForm.controls['day'].value,
        this.identityDetailsForm.controls['selectedMonth'].value,
        this.identityDetailsForm.controls['year'].value
      ),
    };
  }

  extractDateOfBirthFromNRN() {
    if (this.identityDetailsForm.controls['nationalRegistrationNumberField'].valid) {
      const DoBFromNRN = this.identityDetailsForm.controls['nationalRegistrationNumberField'].value.split('-')[0];
      const extractedDoB = ExtractDobUtil.extractDateOfBirth(DoBFromNRN);
      this.identityDetailsForm.patchValue({
        day: extractedDoB.getDate().toString(),
        selectedMonth: (extractedDoB.getMonth() + 1).toString(),
        year: extractedDoB.getFullYear().toString(),
      });
      // emit value here because the search customer api needs a date of birth
      this.searchCustomerEmitter.emit();
    }
  }

  private setMinimumAgeLimit(): void {
    this.minDefaultAge = (this.prepaidOmapiProductExists && this.MIN_AGE_LIMIT_PREPAID) || this.MIN_AGE_LIMIT_POSTPAID;
  }

  validateForm(form?: FormGroup): boolean {
    const formGroup = form ? form : this.identityDetailsForm;
    const valid = formGroup.valid;
    if (!valid) {
      formGroup.markAllAsTouched();
      formGroup.markAsDirty();
      this.cdref.markForCheck();
      this.setFocusOnFirstErrorField();
    }
    return valid;
  }
}
