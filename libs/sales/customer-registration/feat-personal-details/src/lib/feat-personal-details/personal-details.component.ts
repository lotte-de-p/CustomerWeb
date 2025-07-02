import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthorConfigurationFacade, PersonalDetailsFacade } from '@sales/customer-registration/data-access';
import { StepComponent, StepFacade } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { CustomerRegistrationTitleComponent, RestrictedProductComponent } from '@sales/customer-registration/ui';
import { PrivacyDisclaimerComponent, ProfileDetailsFormComponent } from './views';

@Component({
  selector: 'tg-sales-customer-registration-personal-details',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    TranslateModule,
    PrivacyDisclaimerComponent,
    ProfileDetailsFormComponent,
    RestrictedProductComponent,
    CustomerRegistrationTitleComponent,
    AsyncPipe,
  ],
  templateUrl: './personal-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsComponent implements OnInit, StepComponent {
  readonly PRIVATE = 'private';
  readonly BUSINESS = 'business';
  @ViewChild(ProfileDetailsFormComponent)
  profileDetailsFormComponent: ProfileDetailsFormComponent | undefined;
  isToggleActive = false;
  isRestrictedProductDisclaimerVisible = false;
  isResidential = false;
  currentStep = this.stepFacade.currentStepKey$;
  marketingUrl = this.authorConfigurationFacade.marketingUrl$;
  privacyPolicyUrl = this.authorConfigurationFacade.privacyPolicyUrl$;
  isPidEnabled = this.authorConfigurationFacade.isPidEnabled$;
  personalDetails = this.personalDetailsFacade.personalDetails$;
  brand = this.personalDetailsFacade.brand$;
  itsMeResponse = this.personalDetailsFacade.itsMeResponse$;

  constructor(
    private readonly stepFacade: StepFacade,
    private readonly authorConfigurationFacade: AuthorConfigurationFacade,
    private readonly personalDetailsFacade: PersonalDetailsFacade
  ) {}

  ngOnInit(): void {
    this.isResidential = this.authorConfigurationFacade.isResidential();
    this.togglePersonalView(this.isResidential ? this.PRIVATE : this.BUSINESS);
    this.personalDetailsFacade.readEncryptedUrlData();
    this.personalDetailsFacade.setLanguage();
  }

  togglePersonalView(currentTab: string) {
    this.isToggleActive = this.PRIVATE === currentTab;
    this.isRestrictedProductDisclaimerVisible = this.isToggleActive
      ? !this.authorConfigurationFacade.isResidential()
      : !this.authorConfigurationFacade.isBusiness();
    this.toggleNavigationBarDisplay();
  }

  toggleNavigationBarDisplay() {
    this.isRestrictedProductDisclaimerVisible
      ? this.stepFacade.hideNavigationBar()
      : this.stepFacade.displayNavigationBar();
  }

  onNextStep(): Observable<boolean> {
    if (this.profileDetailsFormComponent) {
      const valid = this.profileDetailsFormComponent?.validateForm();
      if (valid) {
        const userInputPayload = this.profileDetailsFormComponent.getUserInputPayload();
        this.personalDetailsFacade.savePersonalDetails(userInputPayload);
        if (!this.isResidential) this.personalDetailsFacade.saveDOB(this.profileDetailsFormComponent.getDOB());
      }
      return of(valid);
    }
    return of(false);
  }
}
