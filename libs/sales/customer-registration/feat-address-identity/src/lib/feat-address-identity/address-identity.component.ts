import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  Address,
  AddressIdentityFacade,
  AddressRequestInterface,
  IdentityDetailsFacade,
  Municipality,
} from '@sales/customer-registration/data-access';
import { StepComponent, StepFacade } from '@sales/shared/data-access';
import { Observable, debounceTime, distinctUntilChanged, of, switchMap, take } from 'rxjs';
import {
  CustomerRegistrationTitleComponent,
  AddressFormComponent,
  AddressToggleComponent,
  NavsOverlayComponent,
  ErrorMessageComponent,
} from '@sales/customer-registration/ui';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayPopupComponent } from '@telenet/ng-lib-shared';

@UntilDestroy()
@Component({
  selector: 'lib-sales-customer-registration-feat-address-identity',
  standalone: true,
  imports: [
    CommonModule,
    CustomerRegistrationTitleComponent,
    AddressToggleComponent,
    AddressFormComponent,
    TranslateModule,
    OverlayPopupComponent,
    NavsOverlayComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './address-identity.component.html',
})
export class AddressIdentityComponent implements StepComponent {
  currentStep = this.stepFacade.currentStepKey$;
  locationSuggestion$: Observable<Municipality[]>;
  streetSuggestion$: Observable<string[]> = of([]);
  showInstallationAddress = false;
  showBillingAddress = false;
  showOverlay = false;
  createCustomer = false;
  searchCustomerResultExists$ = this.addressIdentityFacade.searchCustomerResultExists$;
  searchCustomerSoftMatchResultExists$ = this.addressIdentityFacade.selectSearchCustomerResultSoftMatchExists$;
  address$ = this.addressIdentityFacade.addresses$;
  subHouseNoSuggestions$ = this.addressIdentityFacade.subHouseNumbers$;
  boxNoSuggestions$ = this.addressIdentityFacade.boxNumbers$;
  @ViewChild('legalAddress') addressFormComponent: AddressFormComponent | undefined;
  @ViewChild('installationAddress') installationAddressFormComponent: AddressFormComponent | undefined;
  itsMeResponse$ = this.addressIdentityFacade.itsMeResponse$;
  isInstallableProductExists$ = this.addressIdentityFacade.isInstallableProductExists$;
  navsResult$ = this.addressIdentityFacade.navsResult$;
  showNavsOverlay = false;
  pointOfSalesUrl$ = this.addressIdentityFacade.pointOfSalesUrl$;
  requestHelpUrl$ = this.addressIdentityFacade.requestHelpUrl$;
  error$ = this.addressIdentityFacade.error$;

  constructor(
    private readonly stepFacade: StepFacade,
    private readonly addressIdentityFacade: AddressIdentityFacade,
    private readonly identityDetailsFacade: IdentityDetailsFacade
  ) {
    this.locationSuggestion$ = this.addressIdentityFacade.getMunicipalities().pipe(take(1));
  }

  onNextStep(): Observable<boolean> {
    if (!this.isAddressValid()) {
      return of(false);
    }

    this.addressIdentityFacade.performResidentialNavsCheck();

    return this.navsResult$.pipe(
      debounceTime(1000),
      untilDestroyed(this),
      switchMap((navsResult) => {
        if (navsResult.navsStatus === 'REVIEW_NEEDED') return of(true);
        else if (navsResult.navsStatus === 'DENIED') {
          this.showNavsOverlay = true;
          this.stepFacade.hideNavigationBar();
          return of(false);
        } else {
          this.addressIdentityFacade.searchCustomer();
          return this.handleCustomerSearchResult();
        }
      })
    );
  }

  private isAddressValid(): boolean | undefined {
    const isValidLegalAddress = this.addressFormComponent?.validateForm();
    const isValidInstallationAddress = this.showInstallationAddress
      ? this.installationAddressFormComponent?.validateForm()
      : true;
    return isValidLegalAddress && isValidInstallationAddress;
  }

  private handleCustomerSearchResult(): Observable<boolean> {
    return this.searchCustomerResultExists$.pipe(
      untilDestroyed(this),
      switchMap((searchCustomerResultExists) => {
        if (searchCustomerResultExists) {
          this.stepFacade.hideNavigationBar();
          return of(false);
        } else {
          if (!this.createCustomer) {
            this.showOverlay = true;
            return of(false);
          }
          this.stepFacade.displayNavigationBar();
          this.addressIdentityFacade.finalizeFlow();
          return of(false);
        }
      })
    );
  }

  toggleAddressVisibility(event: { checked: boolean; type: string }) {
    if (event.type === 'installationAddress') {
      this.showInstallationAddress = !event.checked;
    }
    if (event.type === 'billingAddress') {
      this.showBillingAddress = event.checked;
    }
  }

  updateStreets(postalCode: string) {
    this.streetSuggestion$ = this.addressIdentityFacade.getStreets(postalCode);
  }

  saveAddressToState(address: AddressRequestInterface) {
    this.addressIdentityFacade.loadAddress(address);
    this.addressIdentityFacade.searchCustomer();
    this.address$
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((addresses: Address[]) => {
        this.addressIdentityFacade.saveMatchedAddress(addresses, address);
      });
    this.searchCustomerResultExists$.pipe(untilDestroyed(this)).subscribe((searchCustomerResultExists) => {
      searchCustomerResultExists ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
    });
  }
  updateSubHouse() {
    this.address$.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (addresses.length > 0) {
        this.addressIdentityFacade.getSubHouseNumbers(addresses);
      }
    });
  }
  updateBox() {
    this.address$.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (addresses.length > 0) {
        this.addressIdentityFacade.getBoxNumbers(addresses);
      }
    });
  }

  continueRegistrationForSoftMatch() {
    this.showOverlay = false;
    this.createCustomer = true;
    this.onNextStep();
  }
  redirectToStandAloneLogin() {
    this.showOverlay = false;
    this.identityDetailsFacade.login();
  }
}
