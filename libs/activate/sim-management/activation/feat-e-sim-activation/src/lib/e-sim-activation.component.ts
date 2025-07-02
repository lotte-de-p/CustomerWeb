import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderModule, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { QRCodeModule } from 'angularx-qrcode';
import { WinkButton } from '@telenet/wink-ng';
import { ActivatedRoute } from '@angular/router';
import { ESimActivationSecurityCodeComponent } from './e-sim-activation-security-code/e-sim-activation-security-code.component';
import { SimManagementStepContainerComponent } from '@sim-management/activation/ui';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-e-sim-activation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    LoaderModule,
    LoginModule,
    QRCodeModule,
    WinkButton,
    ESimActivationSecurityCodeComponent,
    SimManagementStepContainerComponent,
  ],
  templateUrl: './e-sim-activation.component.html',
})
export class ESimActivationComponent {
  @Input() mobileLineDetailsUrl: string;

  eSimProfileData: string | null;
  pin: string | null;
  puk: string | null;
  customerBrandSuffix = '';

  constructor(
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly urlService: UrlService,
    private readonly route: ActivatedRoute
  ) {}

  initAfterLoggedIn() {
    this.customerBrandSuffix = this.pathCategorisationService.getCustomerBrand() === 'BASE' ? 'base' : 'telenet';
    this.eSimProfileData = this.route.snapshot.queryParamMap.get('eSimProfileData');
    this.pin = this.route.snapshot.queryParamMap.get('pin');
    this.puk = this.route.snapshot.queryParamMap.get('puk');
  }

  browserBack(): void {
    window.history.back();
  }

  onReturnToSimCardsClick() {
    this.urlService.redirectTo(this.mobileLineDetailsUrl);
  }
}
