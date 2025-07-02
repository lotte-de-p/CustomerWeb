import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerProfileFacade, CustomerProfileNgrxModule } from '@profile-management/data-access';
import { ManageAuthenticatorsOverviewComponent } from './manage-authenticators-overview/manage-authenticators-overview.component';
import {
  ManageAuthenticatorsErrorComponent,
  ManageAuthenticatorsLoaderComponent,
  ManageAuthenticatorsNotificationComponent,
  ManageAuthenticatorsSkeletonComponent,
} from '@profile-management/manage-authenticators/ui';
import { AbstractManageAuthenticatorsComponent } from './abstract-manage-authenticators.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LoginModule,
    TranslateModule,
    CustomerProfileNgrxModule,
    ManageAuthenticatorsOverviewComponent,
    ManageAuthenticatorsSkeletonComponent,
    ManageAuthenticatorsLoaderComponent,
    ManageAuthenticatorsErrorComponent,
    ManageAuthenticatorsNotificationComponent,
  ],
  selector: 'tg-pm-manage-authenticators',
  templateUrl: './manage-authenticators.component.html',
})
export class ManageAuthenticatorsComponent extends AbstractManageAuthenticatorsComponent {
  scopes = ['manageauthenticators'];

  @Input() activationItsmeSuccessPageUrl: string;
  @Input() deactivationItsmeSuccessPageUrl: string;
  @Input() activationPasskeySuccessPageUrl: string;
  @Input() deactivationPasskeySuccessPageUrl: string;
  @Input() activationAuthenticatorSuccessPageUrl: string;
  @Input() deactivationAuthenticatorSuccessPageUrl: string;
  @Input() activation2FASuccessPageUrl: string;
  @Input() deactivation2FASuccessPageUrl: string;
  @Input() profileSettingsPageUrl: string;
  @Input() profileOverviewPageUrl: string;

  private readonly customerProfileFacade = inject(CustomerProfileFacade);

  authenticators$ = this.customerProfileFacade.authenticators$;
  loading$ = this.customerProfileFacade.loading$;
  loadError$ = this.customerProfileFacade.loadError$;
  loadSpinner$ = this.customerProfileFacade.loadSpinner$;

  initAfterLoggedIn(): void {
    this.customerProfileFacade.loadAuthenticators();
  }

  handleErrorAction(): void {
    this.navigateToEnrollmentUrl(this.getRedirectUrl(this.profileOverviewPageUrl));
  }
}
