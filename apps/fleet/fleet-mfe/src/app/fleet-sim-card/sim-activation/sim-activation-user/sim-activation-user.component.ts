import { Component, Input, OnInit } from '@angular/core';

import { AbstractBaseComponent, LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';

import { NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimActivationUserConstants } from './constants/sim-activation-user.constants';
import { SimActivationService } from './services/sim-activation.service';
import { defaultSimActivationViewModel, SimActivationViewModel } from './model/sim-activation.view-model';
import { SimCardNumberValidator } from './validators/sim-card-number-validator';
import { takeUntil } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass } from '@angular/common';
import { TgFormsModule } from '@telenet/ng-lib-form';

@Component({
  selector: 'tg-sim-activation-user',
  templateUrl: './sim-activation-user.component.html',
  standalone: true,
  imports: [LoaderModule, NgIf, TgFormsModule, ReactiveFormsModule, FormsModule, NgClass, TranslateModule],
})
export class SimActivationUserComponent extends AbstractBaseComponent implements OnInit {
  readonly SIM_CARD_NUMBER_PREFIX = SimActivationUserConstants.SIM_CARD_NUMBER_PREFIX;
  @Input() confirmationPageLink: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  vm: SimActivationViewModel = defaultSimActivationViewModel;
  showSimCardImg = false;

  constructor(
    private readonly urlService: UrlService,
    private readonly simActivationService: SimActivationService,
    private readonly loaderService: LoaderService
  ) {
    super();
  }

  ngOnInit(): void {
    this.fillInFormFieldsFromUrl();
    this.checkSimActivationStatus();
  }

  validateSimCardNumber(): void {
    const isSimCardNumberInvalid = this.isSimCardNumberInvalid();
    this.vm.isSimCardNumberFormatInvalid = isSimCardNumberInvalid;
    this.vm.disableActivateButton = isSimCardNumberInvalid;
    this.vm.showWrongSimCardNumberError = false;
  }

  activateSim(): void {
    this.loaderService.start();
    this.obs(this.simActivationService.activateSim(this.vm))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.loaderService.stop();
          this.redirectToConfirmationPage();
        },
        error: (error: unknown) => {
          if (error === SimActivationUserConstants.ERROR_WRONG_SIM_CARD_NUMBER) {
            this.vm.showWrongSimCardNumberError = true;
          } else {
            this.vm.showDefaultError = true;
          }
          this.loaderService.stop();
        },
      });
  }

  showSimCardNumberInvalidFormatError(simCardNumberInput: NgModel): boolean {
    return simCardNumberInput.dirty! && this.vm.isSimCardNumberFormatInvalid;
  }

  toggleShowSimCardImg(): void {
    this.showSimCardImg = !this.showSimCardImg;
  }

  showSimCardNumberInputRedBorder(simCardNumberInput: NgModel): boolean {
    return this.showSimCardNumberInvalidFormatError(simCardNumberInput) || this.vm.showWrongSimCardNumberError;
  }

  private checkSimActivationStatus(): void {
    this.loaderService.start();
    this.obs(this.simActivationService.getSimActivationStatus(this.vm.msisdn, this.vm.orderNumber))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (status) => {
          if (status === SimActivationUserConstants.SIM_ACTIVATION_STATUS_ALREADY_ACTIVATED) {
            this.showAlreadyActivatedErrorAndHideForm();
          } else if (status !== SimActivationUserConstants.SIM_ACTIVATION_STATUS_READY_TO_ACTIVATE) {
            this.showSimActivationNotPossibleErrorAndHideForm();
          }
          this.loaderService.stop();
        },
        error: (error: unknown) => {
          if ((error as string) === SimActivationUserConstants.ERROR_SIM_ACTIVATION_NOT_POSSIBLE) {
            this.showSimActivationNotPossibleErrorAndHideForm();
          } else {
            this.showDefaultErrorAndHideForm();
          }
          this.loaderService.stop();
        },
      });
  }

  private fillInFormFieldsFromUrl(): void {
    this.vm.orderNumber = this.urlService.getParameterByName(SimActivationUserConstants.ORDER_NUMBER_PARAM_KEY)!;
    this.vm.msisdn = this.urlService.getParameterByName(SimActivationUserConstants.MSISDN_PARAM_KEY)!;
  }

  private isSimCardNumberInvalid(): boolean {
    return (
      this.vm.simCardNumber.length !== 13 ||
      !SimCardNumberValidator.isValidICCIDNumber(
        SimActivationUserConstants.SIM_CARD_NUMBER_PREFIX + this.vm.simCardNumber
      )
    );
  }

  private showDefaultErrorAndHideForm(): void {
    this.vm.showDefaultError = true;
    this.vm.hideForm = true;
  }

  private showAlreadyActivatedErrorAndHideForm(): void {
    this.vm.showSimCardAlreadyActivatedError = true;
    this.vm.hideForm = true;
  }

  private showSimActivationNotPossibleErrorAndHideForm(): void {
    this.vm.showSimActivationNotPossibleError = true;
    this.vm.hideForm = true;
  }

  private redirectToConfirmationPage(): void {
    if (this.confirmationPageLink) {
      this.urlService.redirectTo(this.confirmationPageLink);
    }
  }
}
