import { Component, inject, OnInit } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateFleetProfileConstants } from '../../../shared/common/constants/profile/create-fleet-profile-constants';
import { NavigationService } from '../services/navigation.service';
import { takeUntil } from 'rxjs/operators';
import { isEmpty } from 'lodash-es';
import { FleetProfileMapper } from '../../../shared/common/mappers/profile/fleet-profile-mapper';
import { ProductsService } from '../../../shared/common/services/products/products.service';
import { FleetProfile } from '../../../shared/common/interfaces/profile/fleet-profile.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { SettingsService } from '../services/settings.service';
import { Store } from '@ngrx/store';
import { AccountSlice, selectNextPage, setPhoneNumber } from '@fleet/account/data-access';
import { BehaviorSubject } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  standalone: true,
  imports: [TranslateModule, CommonModule, ReactiveFormsModule, InlineSVGModule],
  selector: 'tg-mobile-number',
  templateUrl: './mobile-number.component.html',
})
export class MobileNumberComponent extends AbstractBaseComponent implements OnInit {
  private readonly settingsService = inject(SettingsService);
  profileImagePath: string;
  isInvitationSent: boolean;
  invalidFleetNumberError: boolean;
  accountAlreadyExistsError: boolean;
  activeAccountValidationError: boolean;
  privacyLink: string = this.settingsService.privacyLink;
  phoneNumberValid = new BehaviorSubject<boolean>(false);

  phoneNumber = new FormControl('', [Validators.required, Validators.pattern(CreateFleetProfileConstants.PHONE_REGEX)]);

  constructor(
    private readonly navigationService: NavigationService,
    private readonly productsService: ProductsService,
    private readonly store: Store<AccountSlice>
  ) {
    super();
    this.profileImagePath = '';
  }

  ngOnInit(): void {
    const selectNextPageObs$ = this.store.select(selectNextPage);
    this.obs(selectNextPageObs$).subscribe((nextPage) => {
      if (!isEmpty(nextPage)) {
        this.submitForm();
      }
    });

    this.obs(this.phoneNumber.statusChanges).subscribe((formStatus) => {
      this.store.dispatch(setPhoneNumber({ phoneNumber: this.phoneNumber.value }));
      if (formStatus === 'VALID') {
        this.navigationService.updateCanSubmit(true);
      }
    });
  }

  submitForm(): void {
    this.validatePhoneNumber();
    this.phoneNumberValid.pipe(takeUntil(this.unsubscribe$)).subscribe((valid) => {
      if (valid) {
        this.navigationService.goToNextPage();
      }
    });
  }

  validatePhoneNumber() {
    const fleetProfileObs$ = this.productsService.validateFleetProfileIdentifier(
      this.phoneNumber.value,
      CreateFleetProfileConstants.MESSAGE_GROUP,
      new FleetProfileMapper()
    );
    this.obs(fleetProfileObs$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (profile: FleetProfile) => {
          if (profile.status) {
            this.checkErrors(profile.status);
          }
          this.handleHasError(this.hasAnyError());
        },
        error: (response) => {
          this.handleErrorValidation(response);
          this.handleHasError(this.hasAnyError());
        },
      });
  }

  private checkErrors(status: string): void {
    this.invalidFleetNumberError = status === CreateFleetProfileConstants.INVALID_FLEET_NUMBER_ERROR_CODE;
    this.accountAlreadyExistsError = status === CreateFleetProfileConstants.IDENTITY_STATUS_VALIDATED;
    this.activeAccountValidationError =
      CreateFleetProfileConstants.IDENTITY_STATUS_INVITED === status ||
      CreateFleetProfileConstants.IDENTITY_STATUS_PENDING_VALIDATION === status;
  }

  hasAnyError(): boolean {
    return !(
      this.phoneNumber.valid &&
      !this.invalidFleetNumberError &&
      !this.accountAlreadyExistsError &&
      !this.activeAccountValidationError
    );
  }

  private handleHasError(hasError: boolean): void {
    if (hasError) {
      this.navigationService.updateCanSubmit(false);
      this.phoneNumber.setErrors({ hasApiError: true });
      this.phoneNumberValid.next(false);
    } else {
      this.navigationService.updateCanSubmit(true);
      this.phoneNumberValid.next(true);
    }
  }

  private handleErrorValidation(response: HttpErrorResponse): void {
    this.checkErrors(response.error.code);
  }
}
