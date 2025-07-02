import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, take } from 'rxjs';
import {
  Message,
  ActivationParams,
  SimManagementFacade,
  SimManagementNgrxModule,
  ActivationType,
  ActivationStep,
  ImageSrcInterceptorDirective,
  SimManagementComponentId,
} from '@sim-management/data-access';
import { SimManagementSkeletonComponent, SimManagementNotificationComponent } from '@sim-management/ui';
import { PhoneNumberValidator } from '@telenet/ng-lib-form';
import { CustomerBrandEnum, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SimManagementStepContainerComponent } from '@sim-management/activation/ui';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-sim-activation-validation-step',
  templateUrl: './validation-step.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    SimManagementNgrxModule,
    SimManagementSkeletonComponent,
    SimManagementNotificationComponent,
    SimManagementStepContainerComponent,
    ImageSrcInterceptorDirective,
    ReactiveFormsModule,
  ],
})
export class SimManagementValidationStepComponent implements OnInit {
  @Input() imagePath: string;
  @Input() activationParams: ActivationParams;
  @Input() mobileLineDetailsUrl: string;

  actionResultMessage$: Observable<Message | undefined>;
  validationForm: FormGroup;
  isAuthenticated$: Observable<boolean | undefined>;
  simNumberPrefix: string;
  toggleShowSim: boolean;
  isSubmitted: boolean;

  private isTelenetCustomer: boolean;
  private readonly SIM_NUMBER_PREFIX_BASE = '893203';
  private readonly SIM_NUMBER_PREFIX_TELENET = '893207';

  constructor(
    private readonly facade: SimManagementFacade,
    private readonly formBuilder: FormBuilder,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly urlService: UrlService
  ) {}

  get ActivationType(): typeof ActivationType {
    return ActivationType;
  }

  get SimManagementComponentId() {
    return SimManagementComponentId;
  }

  ngOnInit() {
    this.actionResultMessage$ = this.facade.actionResultMessage$;

    this.isAuthenticated$ = this.facade.isAuthenticated$;
    this.isTelenetCustomer = this.pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_TELENET);
    this.simNumberPrefix = this.isTelenetCustomer ? this.SIM_NUMBER_PREFIX_TELENET : this.SIM_NUMBER_PREFIX_BASE;

    this.initializeValidationForm();
  }

  onToggleShowSimClick(): void {
    this.toggleShowSim = !this.toggleShowSim;
  }

  onSubmitClick(): void {
    this.isSubmitted = true;

    if (this.validationForm.invalid) {
      return;
    }

    this.activationParams.msisdn = this.validationForm.get('msisdn')?.value;
    this.activationParams.iccid = this.validationForm.get('iccid')?.value;
    this.activationParams.orderNumber = this.validationForm.get('orderNumber')?.value;

    if (this.activationParams.type === ActivationType.E_SIM) {
      this.facade.setActivationStep(ActivationStep.PORTING);
      return;
    }

    if (!this.activationParams.msisdn || !this.activationParams.iccid) {
      return;
    }

    this.facade.validateSim(
      this.activationParams.orderNumber ?? '',
      this.activationParams.msisdn,
      this.activationParams.iccid
    );
  }

  onBackClick(): void {
    this.urlService.redirectTo(this.mobileLineDetailsUrl);
  }

  private initializeValidationForm() {
    this.validationForm = this.formBuilder.group({
      orderNumber: [
        { value: this.activationParams.orderNumber ?? '', disabled: !!this.activationParams.orderNumber },
        [Validators.pattern(/^\d{0,17}$/)],
      ],
      msisdn: [
        { value: this.activationParams.msisdn ?? '', disabled: !!this.activationParams.msisdn },
        [Validators.required, PhoneNumberValidator.validNumber],
      ],
      iccid: [
        {
          value: this.activationParams.iccid?.replace(this.simNumberPrefix, '') ?? '',
          disabled: !!this.activationParams.iccid,
        },
        [Validators.pattern(/^\d{13}$/)],
      ],
    });

    this.isAuthenticated$.pipe(take(1)).subscribe((isAuthenticated) => {
      if (this.activationParams.type === ActivationType.SIM) {
        this.validationForm.get('iccid')?.addValidators(Validators.required);

        if (!isAuthenticated) {
          this.validationForm.get('orderNumber')?.addValidators(Validators.required);
        }
      }
    });
  }
}
