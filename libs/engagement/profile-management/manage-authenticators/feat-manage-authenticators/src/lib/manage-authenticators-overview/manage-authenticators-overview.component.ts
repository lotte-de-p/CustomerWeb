import { Component, inject, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ImageSrcInterceptorDirective } from '@profile-management/util';
import {
  Authenticator,
  Authenticators,
  CustomerProfileFacade,
  Factors,
  FactorSessionStorage,
} from '@profile-management/data-access';
import { map, Observable, take } from 'rxjs';
import {
  ManageAuthenticatorsIconComponent,
  ManageAuthenticatorsLoaderComponent,
} from '@profile-management/manage-authenticators/ui';
import { ManageAuthenticatorsActivateComponent } from '../manage-authenticators-activate/manage-authenticators-activate.component';
import { ManageAuthenticatorsManageComponent } from '../manage-authenticators-manage/manage-authenticators-manage.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AbstractManageAuthenticatorsComponent } from '../abstract-manage-authenticators.component';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ImageSrcInterceptorDirective,
    ManageAuthenticatorsIconComponent,
    ManageAuthenticatorsActivateComponent,
    ManageAuthenticatorsManageComponent,
    ManageAuthenticatorsLoaderComponent,
  ],
  selector: 'tg-pm-manage-authenticators-overview',
  templateUrl: './manage-authenticators-overview.component.html',
})
export class ManageAuthenticatorsOverviewComponent extends AbstractManageAuthenticatorsComponent implements OnInit {
  @Input() activationItsmeSuccessPageUrl: string;
  @Input() deactivationItsmeSuccessPageUrl: string;
  @Input() activationPasskeySuccessPageUrl: string;
  @Input() deactivationPasskeySuccessPageUrl: string;
  @Input() activationAuthenticatorSuccessPageUrl: string;
  @Input() deactivationAuthenticatorSuccessPageUrl: string;
  @Input() activation2FASuccessPageUrl: string;
  @Input() deactivation2FASuccessPageUrl: string;
  @Input() profileSettingsPageUrl: string;

  @Input() authenticators$: Observable<Authenticators | undefined>;
  @Input() selectedAuthenticator: Authenticator | undefined | null;

  private readonly customerProfileFacade = inject(CustomerProfileFacade);

  unenrollFactorSuccessResponse$ = this.customerProfileFacade.unenrollFactorSuccessResponse$;

  showOverview = true;
  showActivate = false;
  showManage = false;
  showLoader = false;
  successPageUrl = '';
  error = '';

  ngOnInit(): void {
    const factorSessionStorage = this.getFactorSessionStorage();

    if (factorSessionStorage) {
      this.unenroll(factorSessionStorage);
    }
  }

  unenroll(factor: FactorSessionStorage): void {
    this.removeFactorSessionStorage();
    this.customerProfileFacade.unenrollFactor({ type: JSON.parse(factor.type), id: JSON.parse(factor.id) });
    this.unenrollFactorSuccessResponse$.subscribe((res) => {
      if (res) {
        this.navigateToEnrollmentUrl(this.getRedirectUrl(JSON.parse(factor.successPageUrl)));
      }
    });
  }

  onSelectAuthenticator(selectedAuthenticator: Authenticator) {
    this.selectedAuthenticator = selectedAuthenticator;

    if (selectedAuthenticator.enabled) {
      this.toggleManageEvent(true);
      this.successPageUrl = this.verifySuccessPageUrl(
        this.getSuccessPageUrl(selectedAuthenticator.type, selectedAuthenticator.enabled)
      );
    } else {
      this.toggleActivateEvent(true);
      this.successPageUrl = this.verifySuccessPageUrl(
        this.getSuccessPageUrl(selectedAuthenticator.type, selectedAuthenticator.enabled)
      );
    }
  }

  onSelectMultiFactor() {
    this.authenticators$
      .pipe(
        take(1),
        map((response) => ({
          type: Factors['2FA'],
          enabled: response?.['2fa']?.enabled || false,
        })),
        untilDestroyed(this)
      )
      .subscribe((authenticator) => {
        this.onSelectAuthenticator(authenticator);
      });
  }

  toggleActivateEvent(toggleActivate: boolean) {
    this.showOverview = !toggleActivate;
    this.showActivate = toggleActivate;
    this.customerProfileFacade.toggleActivate(toggleActivate);
  }

  toggleManageEvent(toggleManage: boolean) {
    this.showOverview = !toggleManage;
    this.showManage = toggleManage;
    this.customerProfileFacade.toggleManage(toggleManage);
  }

  getSuccessPageUrl(type: string, isFactorEnabled: boolean): string {
    switch (type) {
      case Factors.ITSME:
        return isFactorEnabled ? this.deactivationItsmeSuccessPageUrl : this.activationItsmeSuccessPageUrl;
      case Factors.PASSKEY:
        return isFactorEnabled ? this.deactivationPasskeySuccessPageUrl : this.activationPasskeySuccessPageUrl;
      case Factors.AUTHENTICATOR:
        return isFactorEnabled
          ? this.deactivationAuthenticatorSuccessPageUrl
          : this.activationAuthenticatorSuccessPageUrl;
      case Factors.SMS:
        return this.profileSettingsPageUrl;
      case Factors['2FA']:
        return isFactorEnabled ? this.deactivation2FASuccessPageUrl : this.activation2FASuccessPageUrl;
      default:
        return '';
    }
  }

  verifySuccessPageUrl(successPageUrl: string): string {
    if (!successPageUrl) {
      throw Error('successPageUrl is empty');
    } else {
      return successPageUrl;
    }
  }
}
