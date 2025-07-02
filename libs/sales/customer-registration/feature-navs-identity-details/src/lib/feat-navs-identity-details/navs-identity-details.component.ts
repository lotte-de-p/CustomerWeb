import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextButtonLabelEnum, StepComponent, StepFacade } from '@sales/shared/data-access';
import { Observable, debounceTime, distinctUntilChanged, filter, map, of, take, tap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExtractDobUtil, NameValidator } from '@sales/shared/util';
import {
  NavsIdentityDetailsFacade,
  Municipality,
  AddressRequestInterface,
  Address,
  NavsResult,
} from '@sales/customer-registration/data-access';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavsOverlayComponent, AddressFormComponent, ErrorMessageComponent } from '@sales/customer-registration/ui';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AddressFormComponent,
    TgFormsModule,
    ReactiveFormsModule,
    NavsOverlayComponent,
    ErrorMessageComponent,
  ],
  selector: 'tg-sales-customer-registration-navs-identity-details',
  templateUrl: './navs-identity-details.component.html',
})
@UntilDestroy()
export class NavsIdentityDetailsComponent implements StepComponent, OnInit {
  navsIdentityDetailsForm: FormGroup;
  @ViewChild('legalAddress') addressFormComponent: AddressFormComponent | undefined;

  locationSuggestion$: Observable<Municipality[]>;
  streetSuggestion$: Observable<string[]> = of([]);
  addresses$ = this.navsIdentityDetailsFacade.addresses$;
  subHouseNoSuggestions$ = this.navsIdentityDetailsFacade.subHouseNumbers$;
  boxNoSuggestions$ = this.navsIdentityDetailsFacade.boxNumbers$;
  navsResult$ = this.navsIdentityDetailsFacade.navsResult$;
  userInput$ = this.navsIdentityDetailsFacade.userInputs$;
  address$ = this.navsIdentityDetailsFacade.address$;
  showNavsOverlay = false;
  pointOfSalesUrl$ = this.navsIdentityDetailsFacade.pointOfSalesUrl$;
  requestHelpUrl$ = this.navsIdentityDetailsFacade.requestHelpUrl$;
  error$ = this.navsIdentityDetailsFacade.error$;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly _element: ElementRef,
    private readonly navsIdentityDetailsFacade: NavsIdentityDetailsFacade,
    private readonly cdref: ChangeDetectorRef,
    private readonly stepFacade: StepFacade
  ) {
    const nameValidation = [Validators.required, Validators.minLength(1), NameValidator.validName];
    this.navsIdentityDetailsForm = this.formBuilder.group({
      firstNameField: ['', nameValidation],
      lastNameField: ['', nameValidation],
      day: [''],
      selectedMonth: [''],
      year: [''],
    });
    this.locationSuggestion$ = this.navsIdentityDetailsFacade.getMunicipalities().pipe(take(1));
  }
  ngOnInit(): void {
    this.stepFacade.setNextButtonLabel(NextButtonLabelEnum.CONTINUE);
    this.stepFacade.hideBackButton();
    this.userInput$
      .pipe(
        untilDestroyed(this),
        filter((userInput) => !!userInput),
        map((userInput) => {
          return {
            firstNameField: userInput.personalDetails.firstName,
            lastNameField: userInput.personalDetails.lastName,
            day: userInput.identityDetails.dateOfBirth?.getDate() + '',
            selectedMonth: ExtractDobUtil.getMonthAsString(new Date(userInput.identityDetails.dateOfBirth + '')),
            year: userInput.identityDetails.dateOfBirth?.getFullYear() + '',
          };
        })
      )
      .subscribe((patchInput) => {
        this.navsIdentityDetailsForm.patchValue(patchInput);
      });
  }
  onNextStep(): Observable<boolean> {
    this.saveUserDetails();
    const isValidLegalAddress = this.addressFormComponent?.validateForm();
    if (this.validateForm() && isValidLegalAddress) {
      this.navsIdentityDetailsFacade.performResidentialNavsCheck();
      this.navsIdentityDetailsFacade.navsResult$.pipe(debounceTime(1000), untilDestroyed(this)).subscribe((result) => {
        this.blockCustomerBasedOnNavsStatus(result);
        if (result.navsStatus === 'ALLOWED') {
          this.navsIdentityDetailsFacade.searchCustomer();
          this.navsIdentityDetailsFacade.finalizeFlow();
        }
      });
    }
    return of(false);
  }
  private blockCustomerBasedOnNavsStatus(result: NavsResult) {
    this.showNavsOverlay = result.navsStatus !== 'ALLOWED';
    if (this.showNavsOverlay) this.stepFacade.hideNavigationBar();
  }

  updateStreets(postalCode: string) {
    this.streetSuggestion$ = this.navsIdentityDetailsFacade.getStreets(postalCode);
  }
  saveUserDetails(): void {
    this.userInput$
      .pipe(
        take(1),
        tap((userInput) => {
          this.navsIdentityDetailsFacade.savePersonalDetails({
            salutation: userInput.personalDetails.salutation,
            firstName: this.navsIdentityDetailsForm.controls['firstNameField'].value,
            lastName: this.navsIdentityDetailsForm.controls['lastNameField'].value,
            phoneNumber: userInput.personalDetails.phoneNumber,
            email: userInput.personalDetails.email,
          });
          this.navsIdentityDetailsFacade.saveIdentityDetails({
            belgianIdentityCardNumber: userInput.identityDetails.belgianIdentityCardNumber,
            nationalRegistrationNumber: userInput.identityDetails.nationalRegistrationNumber,
            foreignIdentityCardNumber: userInput.identityDetails.foreignIdentityCardNumber,
            isBelgianIdentity: userInput.identityDetails.isBelgianIdentity,
            dateOfBirth: ExtractDobUtil.parseDateOfBirth(
              this.navsIdentityDetailsForm.controls['day'].value,
              this.navsIdentityDetailsForm.controls['selectedMonth'].value,
              this.navsIdentityDetailsForm.controls['year'].value
            ),
          });
        })
      )
      .subscribe();
  }

  saveAddressToState(address: AddressRequestInterface) {
    this.navsIdentityDetailsFacade.loadAddress(address);
    this.navsIdentityDetailsFacade.searchCustomer();
    this.addresses$
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((addresses: Address[]) => {
        this.navsIdentityDetailsFacade.saveMatchedAddress(addresses, address);
      });
  }
  updateSubHouse() {
    this.addresses$.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (addresses.length > 0) {
        this.navsIdentityDetailsFacade.getSubHouseNumbers(addresses);
      }
    });
  }
  updateBox() {
    this.addresses$.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (addresses.length > 0) {
        this.navsIdentityDetailsFacade.getBoxNumbers(addresses);
      }
    });
  }
  validateForm(): boolean {
    const valid = this.navsIdentityDetailsForm.valid;
    if (!valid) {
      this.navsIdentityDetailsForm.markAllAsTouched();
      this.navsIdentityDetailsForm.markAsDirty();
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
