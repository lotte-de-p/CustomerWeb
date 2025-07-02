import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Authenticator, CustomerProfileFacade, Factors } from '@profile-management/data-access';
import { ImageSrcInterceptorDirective } from '@profile-management/util';
import {
  ManageAuthenticatorsIconComponent,
  ManageAuthenticatorsLoaderComponent,
} from '@profile-management/manage-authenticators/ui';
import { AbstractManageAuthenticatorsComponent } from '../abstract-manage-authenticators.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { LoginService } from '@telenet/ng-lib-ocapi';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ManageAuthenticatorsIconComponent,
    ImageSrcInterceptorDirective,
    ManageAuthenticatorsLoaderComponent,
  ],
  selector: 'tg-pm-manage-authenticators-manage',
  templateUrl: './manage-authenticators-manage.component.html',
})
export class ManageAuthenticatorsManageComponent extends AbstractManageAuthenticatorsComponent implements OnInit {
  @Input() selectedAuthenticator: Authenticator | undefined | null;
  @Input() successPageUrl: string;

  @Output() toggleManageEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  private readonly customerProfileFacade: CustomerProfileFacade = inject(CustomerProfileFacade);

  update2faSuccessResponse$ = this.customerProfileFacade.update2faSuccessResponse$;

  showManage = false;

  constructor(private readonly loginService: LoginService) {
    super();
  }

  ngOnInit(): void {
    this.update2faSuccessResponse$.subscribe((res) => {
      if (res) {
        this.navigateToEnrollmentUrl(this.getRedirectUrl(this.successPageUrl));
      }
    });
  }

  manage() {
    if (Factors['2FA'] === this.selectedAuthenticator?.type) {
      this.deactivate2FA();
    } else if (Factors.SMS === this.selectedAuthenticator?.type) {
      this.navigateToEnrollmentUrl(this.getRedirectUrl(this.successPageUrl));
    } else {
      this.forceStepUpAuth();
    }
  }

  deactivate2FA(): void {
    this.customerProfileFacade.update2faStatus(false);
  }

  forceStepUpAuth(): void {
    this.setFactorSessionStorage(this.selectedAuthenticator, this.successPageUrl);
    this.loginService.loginWithStepUpAuthentication(window.location.href, Factors['2FA']);
  }

  cancel() {
    this.showManage = !this.showManage;
    this.toggleManageEvent.emit(false);
  }
}
