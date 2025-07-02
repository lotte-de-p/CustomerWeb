import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  AuthorConfiguration,
  AuthorConfigurationFacade,
  CustomerRegistrationNgrxModule,
} from '@sales/customer-registration/data-access';
import { StepFacade, StepsNgrxModule } from '@sales/shared/data-access';
import { SalesStepperComponent } from '@sales/shared/feature-sales-stepper';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LoaderModule } from '@telenet/ng-lib-page';
import { CookieService } from 'ngx-cookie-service';
import { CustomerRegistrationConstants } from './constants/customer-registration.constants';
import { SalesStepsForBusiness, SalesStepsForResidential } from './constants/step.constants';

@UntilDestroy()
@Component({
  selector: 'tg-sales-customer-registration',
  templateUrl: './customer-registration.component.html',
  imports: [
    LoaderModule,
    MessagesModule,
    StepsNgrxModule,
    CustomerRegistrationNgrxModule,
    NgIf,
    SalesStepperComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class CustomerRegistrationComponent implements OnInit {
  @Input() isHidePageTitle: string;
  @Input() privacyPolicyUrl: string;
  @Input() marketingUrl: string;
  @Input() pointOfSalesUrl: string;
  @Input() requestHelpUrl: string;
  @Input() componentInstanceID: string;
  @Input() showSalesContactNumber: boolean;
  @Input() enablePID: boolean;
  @Input() allowAnyNavsForFixedProducts: boolean;
  @Input() enableMask: boolean;
  @Input() enableLoader: boolean;
  @Input() pageType: string;

  componentSteps = SalesStepsForResidential;
  showNavigationBar = this.stepFacade.showNavigation$;
  showBackButton = this.stepFacade.showBackButton$;

  constructor(
    private readonly authorConfigurationFacade: AuthorConfigurationFacade,
    private readonly cookieService: CookieService,
    private readonly stepFacade: StepFacade
  ) {}

  public readonly messageGroup = CustomerRegistrationConstants.MESSAGE_GROUP;

  private _loaded = false;

  protected isLoaded(): boolean {
    return this._loaded;
  }

  ngOnInit(): void {
    this.authorConfigurationFacade.setBrandFromUrl();
    this.authorConfigurationFacade.setCustomerCategory();
    const authorConfiguration = {
      privacyPolicyUrl: this.privacyPolicyUrl,
      showSalesContactNumber: this.showSalesContactNumber,
      isPIDEnabled: this.enablePID,
      marketingUrl: this.marketingUrl,
      pointOfSalesUrl: this.pointOfSalesUrl,
      requestHelpUrl: this.requestHelpUrl,
      allowAnyNavsForFixedProducts: this.allowAnyNavsForFixedProducts,
    } as AuthorConfiguration;

    this.authorConfigurationFacade.setAuthorConfiguration(authorConfiguration);
    const idpParam = this.cookieService.get(CustomerRegistrationConstants.IDP_PARAM);
    if (
      CustomerRegistrationConstants.IDP_TYPE_ITS_ME === idpParam ||
      CustomerRegistrationConstants.IDP_TYPE_EID === idpParam
    ) {
      console.log('itsme/eid flow');
    }
    this.componentSteps = this.authorConfigurationFacade.isResidential()
      ? SalesStepsForResidential
      : SalesStepsForBusiness;
    const stepKeys = this.componentSteps.map((step) => step.key);
    this.stepFacade.setStepConfig({ steps: stepKeys });
    this._loaded = true;
  }
}
