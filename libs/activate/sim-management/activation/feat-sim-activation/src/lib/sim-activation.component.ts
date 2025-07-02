import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkButton, WinkInput } from '@telenet/wink-ng';
import { UrlService } from '@telenet/ng-lib-page';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import {
  ActivationParams,
  ActivationStep,
  ActivationType,
  SimManagementConstants,
  SimManagementFacade,
  SimManagementNgrxModule,
} from '@sim-management/data-access';
import { SimManagementSkeletonComponent } from '@sim-management/activation/ui';
import { SimManagementNotificationComponent } from '@sim-management/ui';
import { SimManagementValidationStepComponent } from './steps/validation-step/validation-step.component';
import { SimManagementTermsAndConditionsStepComponent } from './steps/terms-and-conditions-step/terms-and-conditions-step.component';
import { SimManagementPortingStepComponent } from './steps/porting-step/porting-step.component';
@UntilDestroy()
@Component({
  selector: 'tg-sim-management-sim-activation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    WinkButton,
    WinkInput,
    SimManagementNgrxModule,
    SimManagementSkeletonComponent,
    SimManagementNotificationComponent,
    SimManagementValidationStepComponent,
    SimManagementTermsAndConditionsStepComponent,
    SimManagementPortingStepComponent,
  ],
  templateUrl: './sim-activation.component.html',
})
export class SimActivationComponent implements OnInit {
  @Input() thankYouPrepaidUrl: string;
  @Input() thankYouPostpaidUrl: string;
  @Input() thankYouESimPortingUrl: string;
  @Input() mobileLineDetailsUrl: string;
  @Input() imagePath: string;

  activationParams: ActivationParams;
  isAuthenticated$: Observable<boolean | undefined>;
  isLoading$: Observable<boolean | undefined>;
  activationStep$: Observable<ActivationStep | undefined>;

  get ActivationStep(): typeof ActivationStep {
    return ActivationStep;
  }

  constructor(
    private readonly facade: SimManagementFacade,
    private readonly urlService: UrlService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.facade.loadLoginDetails();

    this.activationStep$ = this.facade.activationStep$;
    this.isLoading$ = this.facade.isLoading$;

    this.initThankYouUrlRedirection();
    this.initActivationParams();
  }

  private initActivationParams() {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      this.setActivationParams(queryParams);
    });
  }

  private initThankYouUrlRedirection() {
    combineLatest({ lineType: this.facade.lineType$, step: this.activationStep$ })
      .pipe(untilDestroyed(this))
      .subscribe(({ lineType, step }) => {
        if (step === ActivationStep.DONE) {
          if (this.activationParams.type === ActivationType.E_SIM) {
            this.urlService.redirectTo(`${this.thankYouESimPortingUrl}?intent=${ActivationType.E_SIM.toLowerCase()}`);
          } else {
            if (lineType === SimManagementConstants.LINE_TYPE_PREPAID) {
              this.urlService.redirectTo(`${this.thankYouPrepaidUrl}?intent=${lineType.toLowerCase()}`);
            } else {
              this.urlService.redirectTo(`${this.thankYouPostpaidUrl}?intent=${lineType?.toLowerCase()}`);
            }
          }
        }
      });
  }

  private setActivationParams(queryParams: Params) {
    this.activationParams = {
      type: queryParams['type'],
      msisdn: queryParams['msisdn'],
      iccid: queryParams['iccid'],
      orderNumber: queryParams['orderNumber'],
      accountType: queryParams['accountType'],
      iccidThirdParty: queryParams['iccidThirdParty'],
      accountNumberThirdParty: queryParams['accountNumberThirdParty'],
    };
  }
}
