import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {
  ActivationStep,
  Message,
  ActivationParams,
  SimManagementFacade,
  SimManagementNgrxModule,
  AccountType,
  ImageSrcInterceptorDirective,
  SimManagementComponentId,
} from '@sim-management/data-access';
import { SimManagementSkeletonComponent, SimManagementNotificationComponent } from '@sim-management/ui';
import {
  SimManagementStepContainerComponent,
  SimManagementSubscriptionOptionComponent,
} from '@sim-management/activation/ui';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-sim-activation-porting-step',
  templateUrl: './porting-step.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    SimManagementNgrxModule,
    SimManagementSkeletonComponent,
    SimManagementNotificationComponent,
    SimManagementSubscriptionOptionComponent,
    SimManagementStepContainerComponent,
    ReactiveFormsModule,
    ImageSrcInterceptorDirective,
  ],
})
export class SimManagementPortingStepComponent implements OnInit {
  @Input() imagePath: string;
  @Input() activationParams: ActivationParams;

  get AccountType() {
    return AccountType;
  }

  get SimManagementComponentId() {
    return SimManagementComponentId;
  }

  actionResultMessage$: Observable<Message | undefined>;
  portingForm: FormGroup;
  isSubmitted: boolean;

  constructor(private readonly facade: SimManagementFacade) {}

  ngOnInit() {
    this.actionResultMessage$ = this.facade.actionResultMessage$;

    this.portingForm = new FormGroup({
      accountType: new FormControl(this.activationParams?.accountType, [Validators.required]),
      iccid: new FormControl(this.activationParams?.iccidThirdParty),
      accountNumber: new FormControl(this.activationParams?.accountNumberThirdParty),
    });

    this.portingForm
      .get('accountType')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.portingForm.get('iccid')?.clearValidators();
        this.portingForm.get('accountNumber')?.clearValidators();

        if (value === AccountType.PREPAID || value === AccountType.SUBSCRIPTION) {
          this.portingForm.get('iccid')?.addValidators(Validators.required);
          this.portingForm.get('iccid')?.addValidators(Validators.pattern(/^\d{13}$/));
        } else {
          this.portingForm.get('accountNumber')?.addValidators(Validators.required);
        }

        this.portingForm.get('iccid')?.updateValueAndValidity();
        this.portingForm.get('accountNumber')?.updateValueAndValidity();
      });
  }

  onSubmitClick(): void {
    this.isSubmitted = true;

    if (this.portingForm.invalid) {
      return;
    }

    this.activationParams.accountType = this.portingForm.get('accountType')?.value;

    if (
      this.activationParams.accountType === AccountType.PREPAID ||
      this.activationParams.accountType === AccountType.SUBSCRIPTION
    ) {
      this.activationParams.iccidThirdParty = this.portingForm.get('iccid')?.value;
    } else {
      this.activationParams.accountNumberThirdParty = this.portingForm.get('accountNumber')?.value;
    }

    this.facade.setActivationStep(ActivationStep.TERMS_AND_CONDITIONS);
  }

  onBackClick(): void {
    this.facade.setActivationStep(ActivationStep.VALIDATION);
  }
}
