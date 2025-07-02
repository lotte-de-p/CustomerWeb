import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, take } from 'rxjs';
import {
  ActivationStep,
  Message,
  ActivationParams,
  SimManagementFacade,
  SimManagementNgrxModule,
  ActivationType,
  SimManagementConstants,
  ImageSrcInterceptorDirective,
  SimManagementComponentId,
} from '@sim-management/data-access';
import { SimManagementSkeletonComponent, SimManagementNotificationComponent } from '@sim-management/ui';
import { SimManagementStepContainerComponent } from '@sim-management/activation/ui';
import { CustomerBrandEnum, PathCategorisationService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-sim-management-sim-activation-terms-and-conditions-step',
  templateUrl: './terms-and-conditions-step.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SimManagementNgrxModule,
    SimManagementSkeletonComponent,
    SimManagementNotificationComponent,
    SimManagementStepContainerComponent,
    ImageSrcInterceptorDirective,
  ],
})
export class SimManagementTermsAndConditionsStepComponent implements OnInit {
  @Input() imagePath: string;
  @Input() activationParams: ActivationParams;

  actionResultMessage$: Observable<Message | undefined>;
  isTelenetCustomer: boolean;

  constructor(
    private readonly facade: SimManagementFacade,
    private readonly pathCategorisationService: PathCategorisationService
  ) {}

  get ActivationType(): typeof ActivationType {
    return ActivationType;
  }

  get SimManagementComponentId() {
    return SimManagementComponentId;
  }

  ngOnInit() {
    this.actionResultMessage$ = this.facade.actionResultMessage$;
    this.isTelenetCustomer = this.pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_TELENET);
  }

  onSubmitClick(): void {
    this.facade.activateSim(this.activationParams);
  }

  onBackClick(): void {
    if (this.activationParams.type === ActivationType.E_SIM) {
      this.facade.setActivationStep(ActivationStep.PORTING);
    } else {
      this.facade.orderType$.pipe(take(1)).subscribe((orderType) => {
        if (orderType === SimManagementConstants.ORDER_TYPE_PORTING) {
          this.facade.setActivationStep(ActivationStep.PORTING);
        } else {
          this.facade.setActivationStep(ActivationStep.VALIDATION);
        }
      });
    }
  }
}
