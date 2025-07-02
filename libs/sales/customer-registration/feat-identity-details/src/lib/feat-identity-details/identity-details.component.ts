import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { AuthorConfigurationFacade, IdentityDetailsFacade } from '@sales/customer-registration/data-access';
import { StepComponent, StepFacade } from '@sales/shared/data-access';
import { BelgianEidValidator, ForeignEidValidator, TgFormsModule } from '@telenet/ng-lib-form';
import { NgxMaskDirective } from 'ngx-mask';
import { filter, map, Observable, of } from 'rxjs';
import {
  CustomerRegistrationTitleComponent,
  ErrorMessageComponent,
  ErrorMessageWithLoginButtonComponent,
} from '@sales/customer-registration/ui';
import { IdentityDetailsFormComponent, IdentityOverlayComponent } from './views';

@UntilDestroy()
@Component({
  selector: 'tg-sales-customer-registration-identity-details',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TgFormsModule,
    IdentityDetailsFormComponent,
    IdentityOverlayComponent,
    CustomerRegistrationTitleComponent,
    ErrorMessageComponent,
    NgxMaskDirective,
    ErrorMessageWithLoginButtonComponent,
  ],
  templateUrl: './identity-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityDetailsComponent implements OnInit, StepComponent {
  readonly CUS_REG_SALES_IDENTITY_BELGIAN = 'belgian';
  readonly CUS_REG_SALES_IDENTITY_FOREIGN_FORM = 'foreignEid';
  readonly CUS_REG_SALES_IDENTITY_BELGIAN_FORM = 'belgianEid';

  @ViewChild(IdentityDetailsFormComponent)
  identityDetailsFormComponent: IdentityDetailsFormComponent | undefined;
  identityDetailsForm: FormGroup;
  isBelgianIdentity = false;
  identitySelection = 'belgian';
  showIdentityInfoOverlay = false;
  brand$ = this.identityDetailsFacade.brand$;
  currentStep$: Observable<string> = this.stepFacade.currentStepKey$;
  userInput$ = this.identityDetailsFacade.userInput$;
  searchCustomerResultExists$ = this.identityDetailsFacade.searchCustomerResultExists$;
  error$ = this.identityDetailsFacade.error$;
  prepaidOmapiProductExists$ = this.identityDetailsFacade.prepaidOmapiProductExists$;
  isResidential = true;
  itsMeResponse$ = this.identityDetailsFacade.itsMeResponse$;
  isBelgianIdentitySelected$ = this.identityDetailsFacade.isBelgianIdentitySelected$;

  constructor(
    private readonly identityDetailsFacade: IdentityDetailsFacade,
    private readonly formBuilder: FormBuilder,
    private readonly stepFacade: StepFacade,
    private readonly authorConfigurationFacade: AuthorConfigurationFacade
  ) {
    this.identityDetailsForm = this.formBuilder.group({
      belgianEid: ['', [Validators.required, BelgianEidValidator.isNumberValid]],
      foreignEid: [''],
    });
  }

  ngOnInit(): void {
    this.isBelgianIdentitySelected$.pipe(untilDestroyed(this)).subscribe((isBelgianIdentity) => {
      this.toggleIdentityView(isBelgianIdentity ? this.CUS_REG_SALES_IDENTITY_BELGIAN : '');
    });
    this.isResidential = this.authorConfigurationFacade.isResidential();
    this.populateFormFieldsFromInput();
  }

  toggleIdentityView(identityType: string) {
    this.isBelgianIdentity = identityType === this.CUS_REG_SALES_IDENTITY_BELGIAN;
    this.updateFormControl(this.isBelgianIdentity);
    this.populateBelgianEidFormFieldFromItsMe();
    this.populateFormFieldsFromInput();
  }

  private updateFormControl(isBelgianEid: boolean): void {
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_FOREIGN_FORM].clearValidators();
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_BELGIAN_FORM].clearValidators();
    this.identityDetailsForm.controls[isBelgianEid ? 'belgianEid' : 'foreignEid'].addValidators([
      Validators.required,
      isBelgianEid ? BelgianEidValidator.isNumberValid : ForeignEidValidator.isForeignEidValidWithModCheck,
    ]);
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_FOREIGN_FORM].updateValueAndValidity();
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_BELGIAN_FORM].updateValueAndValidity();
  }

  private populateFormFieldsFromInput() {
    this.userInput$
      .pipe(
        untilDestroyed(this),
        filter((userInput) => !!userInput?.identityDetails),
        map((userInput) => {
          const cardNumber = this.isBelgianIdentity
            ? userInput.identityDetails.belgianIdentityCardNumber
            : userInput.identityDetails.foreignIdentityCardNumber;
          const formControl = this.isBelgianIdentity ? 'belgianEid' : 'foreignEid';
          this.identitySelection = userInput.identityDetails.isBelgianIdentity ? 'belgian' : 'other';
          return { [formControl]: cardNumber };
        }),
        filter((formValue) => {
          const cardNumber = Object.values(formValue)[0];
          return cardNumber !== '';
        })
      )
      .subscribe((formValue) => {
        this.identityDetailsForm.patchValue(formValue);
      });
  }

  private populateBelgianEidFormFieldFromItsMe() {
    this.itsMeResponse$
      .pipe(
        untilDestroyed(this),
        filter((itsMeDetails) => !!itsMeDetails),
        map((itsMeDetails) => {
          return {
            belgianEid: itsMeDetails.cardIDNumber,
          };
        })
      )
      .subscribe((formValue) => {
        this.identityDetailsForm.patchValue(formValue);
      });
  }

  toggleIdentityInfoOverlayView(show: boolean) {
    const elementToScrollAtStart = document.querySelector('body');
    if (elementToScrollAtStart) {
      elementToScrollAtStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.showIdentityInfoOverlay = show;
  }

  searchCustomer(formControlName: string) {
    if (formControlName === 'nrn' || (formControlName && this.identityDetailsForm.controls[formControlName].valid)) {
      this.updateIdentityDetailsInState();
      this.identityDetailsFacade.searchResidentialCustomer();
      this.searchCustomerResultExists$.pipe(untilDestroyed(this)).subscribe((searchCustomerResult) => {
        searchCustomerResult ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
      });
    }
  }

  private updateIdentityDetailsInState() {
    const identityDetails = this.identityDetailsFormComponent?.getIdentityDetails();
    if (identityDetails) {
      identityDetails.belgianIdentityCardNumber = this.identityDetailsForm.get('belgianEid')?.value;
      identityDetails.foreignIdentityCardNumber = this.identityDetailsForm.get('foreignEid')?.value;
      identityDetails.isBelgianIdentity = this.isBelgianIdentity;
      this.identityDetailsFacade.saveIdentityDetails(identityDetails);
    }
  }

  doLogin() {
    this.identityDetailsFacade.login();
  }

  onNextStep(): Observable<boolean> {
    const isValidEIdNumber = this.identityDetailsFormComponent?.validateForm(this.identityDetailsForm);
    const isValidIdentityDetails = this.identityDetailsFormComponent?.validateForm();
    if (isValidEIdNumber && isValidIdentityDetails) {
      this.updateIdentityDetailsInState();
      return of(true);
    }
    return of(false);
  }
}
