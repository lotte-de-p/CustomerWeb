import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import {
  Address,
  AddressRequestInterface,
  AuthorConfigurationFacade,
  BusinessIdentityDetails,
  BusinessIdentityDetailsFacade,
  LegalEntityInterface,
  Municipality,
} from '@sales/customer-registration/data-access';
import { StepComponent, StepFacade } from '@sales/shared/data-access';
import { CompanyNameValidator, TgFormsModule, VatNumberValidator } from '@telenet/ng-lib-form';
import { NgxMaskDirective } from 'ngx-mask';
import { Observable, debounceTime, distinctUntilChanged, filter, map, of, take } from 'rxjs';
import {
  AddressFormComponent,
  AddressToggleComponent,
  CustomerRegistrationTitleComponent,
  ErrorMessageComponent,
  ErrorMessageWithLoginButtonComponent,
} from '@sales/customer-registration/ui';
import { CommonModule } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TgFormsModule,
    CustomerRegistrationTitleComponent,
    ErrorMessageComponent,
    NgxMaskDirective,
    ErrorMessageWithLoginButtonComponent,
    MatAutocompleteModule,
    AddressFormComponent,
    AddressToggleComponent,
  ],
  selector: 'tg-customer-registration-business-identity-details',
  templateUrl: './business-identity-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessIdentityDetailsComponent implements OnInit, StepComponent {
  readonly messageGroupName = 'customer-registration';
  businessIdentityDetailsForm: FormGroup;
  currentStep: Observable<string> = this.stepFacade.currentStepKey$;
  error$ = this.businessIdentityDetailsFacade.error$;
  searchCustomerResultExists$ = this.businessIdentityDetailsFacade.searchCustomerResultExists$;
  brand = this.authorConfigurationFacade.getBrand();
  legalEntities: LegalEntityInterface[] = [];
  legalFilteredEntities: LegalEntityInterface[] = [];
  isLegalEntityValid: number = 1;
  locationSuggestion$: Observable<Municipality[]>;
  streetSuggestion$: Observable<string[]> = of([]);
  showInstallationAddress = false;
  showBillingAddress = false;
  address$ = this.businessIdentityDetailsFacade.addresses$;
  subHouseNoSuggestions$ = this.businessIdentityDetailsFacade.subHouseNumbers$;
  boxNoSuggestions$ = this.businessIdentityDetailsFacade.boxNumbers$;
  checkAddressFormValidity$ = of(false);
  isInstallableProductExists$ = this.businessIdentityDetailsFacade.isInstallableProductExists$;
  @ViewChild('legalAddress') addressFormComponent: AddressFormComponent | undefined;
  @ViewChild('installationAddress') installationAddressFormComponent: AddressFormComponent | undefined;
  @ViewChild('billingAddress') billingAddressFormComponent: AddressFormComponent | undefined;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly stepFacade: StepFacade,
    private readonly businessIdentityDetailsFacade: BusinessIdentityDetailsFacade,
    private readonly authorConfigurationFacade: AuthorConfigurationFacade,
    private readonly _element: ElementRef,
    private readonly cdref: ChangeDetectorRef
  ) {
    this.businessIdentityDetailsForm = this.formBuilder.group({
      companyNameField: ['', [Validators.required, CompanyNameValidator.validCompanyName]],
      belgianEnterpriseNumberField: ['', [Validators.required, VatNumberValidator.isValidVatNumber]],
      legalEntityField: ['', [Validators.required]],
    });
    this.locationSuggestion$ = this.businessIdentityDetailsFacade.getMunicipalities().pipe(take(1));
  }
  onNextStep(): Observable<boolean> {
    const isValidIdentity = this.validateForm();
    const isValidLegalAddress = this.addressFormComponent?.validateForm();
    const isValidBillingAddress = this.showBillingAddress ? this.billingAddressFormComponent?.validateForm() : true;
    const isValidInstallationAddress = this.showInstallationAddress
      ? this.installationAddressFormComponent?.validateForm()
      : true;
    if (isValidIdentity && isValidLegalAddress && isValidBillingAddress && isValidInstallationAddress) {
      this.updateBusinessIdentityDetails();
      this.businessIdentityDetailsFacade.searchCustomer();
      this.processSearchCustomerResult();
    }
    return of(false);
  }
  ngOnInit(): void {
    this.getLegalEntityDetails();
    this.populateFormFieldsFromInput();
  }

  private populateFormFieldsFromInput() {
    this.businessIdentityDetailsFacade.businessIdentityDetails$
      .pipe(
        untilDestroyed(this),
        filter((businessIdentityDetails) => !!businessIdentityDetails),
        map((businessIdentityDetails) => {
          return {
            belgianEnterpriseNumberField: businessIdentityDetails.belgianEnterpriseNumber,
            companyNameField: businessIdentityDetails.companyName,
            legalEntityField: (this.legalEntities || []).find(
              (entity: LegalEntityInterface) => entity.id === businessIdentityDetails.legalForm
            )?.name as string,
          };
        })
      )
      .subscribe((patchToForm) => {
        this.businessIdentityDetailsForm.patchValue(patchToForm);
      });
  }

  searchCustomerWithBelgianEnterpriseNumber() {
    if (this.businessIdentityDetailsForm.controls['belgianEnterpriseNumberField'].valid) {
      this.updateBusinessIdentityDetails();
      this.businessIdentityDetailsFacade.searchCustomer();
      this.processSearchCustomerResult();
    }
  }

  private processSearchCustomerResult() {
    this.searchCustomerResultExists$.pipe(untilDestroyed(this)).subscribe((searchCustomerResultExists) => {
      searchCustomerResultExists ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
    });
  }

  private updateBusinessIdentityDetails() {
    const payLoad: BusinessIdentityDetails = {
      belgianEnterpriseNumber: this.businessIdentityDetailsForm.controls['belgianEnterpriseNumberField'].value,
      companyName: this.businessIdentityDetailsForm.controls['companyNameField'].value,
      legalForm: this.legalEntities?.find(
        (entity: LegalEntityInterface) =>
          entity.name === this.businessIdentityDetailsForm.controls['legalEntityField']?.value
      )?.id as string,
      installationAddressToggle: this.showInstallationAddress,
      billingAddressToggle: this.showBillingAddress,
    };
    this.businessIdentityDetailsFacade.saveBusinessIdentityDetails(payLoad);
  }

  doLogin() {
    this.businessIdentityDetailsFacade.login();
  }

  getLegalEntityDetails() {
    this.businessIdentityDetailsFacade.getLegalEntityDetails();
    this.businessIdentityDetailsFacade.legalEntityDetails$.pipe().subscribe((legalEntityDetails) => {
      this.legalEntities = this.legalFilteredEntities = legalEntityDetails[0]?.values;
    });
  }

  filterResults(event: any) {
    this.legalFilteredEntities = this.legalEntities.filter((val: LegalEntityInterface) =>
      val.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  validateEnitity(event: any, eventBlur: boolean) {
    const val = eventBlur ? event.target.value : event;
    this.isLegalEntityValid = this.legalEntities.filter((entity: LegalEntityInterface) => entity.name === val).length;

    if (this.isLegalEntityValid) {
      this.updateBusinessIdentityDetails();
    }
  }

  saveAddressToState(address: AddressRequestInterface) {
    this.businessIdentityDetailsFacade.loadAddress(address);
    this.address$
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((addresses: Address[]) => {
        this.businessIdentityDetailsFacade.saveMatchedAddress(addresses, address);
      });
    this.businessIdentityDetailsFacade.resetSearchCustomer();
    this.processSearchCustomerResult();
  }

  updateStreets(postalCode: string) {
    this.streetSuggestion$ = this.businessIdentityDetailsFacade.getStreets(postalCode);
  }

  toggleAddressVisibility(event: { checked: boolean; type: string }) {
    if (event.type === 'installationAddress') {
      this.showInstallationAddress = !event.checked;
    }
    if (event.type === 'billingAddress') {
      this.showBillingAddress = !event.checked;
    }
  }
  updateSubHouse() {
    this.address$.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (addresses.length > 0) {
        this.businessIdentityDetailsFacade.getSubHouseNumbers(addresses);
      }
    });
  }
  updateBox() {
    this.address$.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (addresses.length > 0) {
        this.businessIdentityDetailsFacade.getBoxNumbers(addresses);
      }
    });
  }

  validateForm(): boolean {
    const formGroup = this.businessIdentityDetailsForm;
    const valid = formGroup.valid;
    if (!formGroup.valid) {
      formGroup.markAllAsTouched();
      formGroup.markAsDirty();
      this.cdref.markForCheck();
      this.setFocusOnFirstErrorField();
    }
    return valid;
  }

  private setFocusOnFirstErrorField(): void {
    const invalidControl = this._element.nativeElement.querySelectorAll('.ng-invalid');
    invalidControl[0]?.focus();
  }
}
