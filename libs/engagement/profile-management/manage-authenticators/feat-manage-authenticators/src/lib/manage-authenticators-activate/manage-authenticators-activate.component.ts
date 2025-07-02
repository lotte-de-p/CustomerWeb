import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Authenticator, CustomerProfileFacade, Factors } from '@profile-management/data-access';
import { ImageSrcInterceptorDirective } from '@profile-management/util';
import {
  ManageAuthenticatorsErrorComponent,
  ManageAuthenticatorsIconComponent,
  ManageAuthenticatorsLoaderComponent,
} from '@profile-management/manage-authenticators/ui';
import { AbstractManageAuthenticatorsComponent } from '../abstract-manage-authenticators.component';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ManageAuthenticatorsIconComponent,
    ImageSrcInterceptorDirective,
    ManageAuthenticatorsErrorComponent,
    ManageAuthenticatorsLoaderComponent,
  ],
  selector: 'tg-pm-manage-authenticators-activate',
  templateUrl: './manage-authenticators-activate.component.html',
})
export class ManageAuthenticatorsActivateComponent extends AbstractManageAuthenticatorsComponent implements OnInit {
  @Input() selectedAuthenticator: Authenticator | undefined | null;
  @Input() successPageUrl: string;

  @Output() toggleActivateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  private readonly customerProfileFacade: CustomerProfileFacade = inject(CustomerProfileFacade);

  update2faSuccessResponse$ = this.customerProfileFacade.update2faSuccessResponse$;

  showActivate = false;

  ngOnInit(): void {
    this.update2faSuccessResponse$.subscribe((res) => {
      if (res) {
        this.navigateToEnrollmentUrl(this.getRedirectUrl(this.successPageUrl));
      }
    });
  }

  activate() {
    if (Factors['2FA'] === this.selectedAuthenticator?.type) {
      this.activate2FA();
    } else if (Factors.SMS === this.selectedAuthenticator?.type) {
      this.navigateToEnrollmentUrl(this.getRedirectUrl(this.successPageUrl));
    } else {
      this.activateFactor();
    }
  }

  activate2FA(): void {
    this.customerProfileFacade.update2faStatus(true);
  }

  activateFactor(): void {
    const enrollmentLink = this.selectedAuthenticator?.enrollmentLink;
    const redirectUri = encodeURIComponent(this.getRedirectUrl(this.successPageUrl));
    const enrollmentUrl = `${enrollmentLink}?redirect_uri=${redirectUri}`;
    this.navigateToEnrollmentUrl(enrollmentUrl);
  }

  cancel() {
    this.showActivate = !this.showActivate;
    this.toggleActivateEvent.emit(false);
  }
}
