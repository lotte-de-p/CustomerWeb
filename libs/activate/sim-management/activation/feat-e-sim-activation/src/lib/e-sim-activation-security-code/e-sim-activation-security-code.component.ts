import { UntilDestroy } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderModule } from '@telenet/ng-lib-page';
import { SimManagementNgrxModule } from '@sim-management/data-access';
import { QRCodeModule } from 'angularx-qrcode';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { WinkButton } from '@telenet/wink-ng';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-e-sim-activation-security-code',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    LoaderModule,
    LoginModule,
    SimManagementNgrxModule,
    QRCodeModule,
    WinkButton,
  ],
  templateUrl: './e-sim-activation-security-code.component.html',
})
export class ESimActivationSecurityCodeComponent {
  @Input() pin: string | null;
  @Input() puk: string | null;
}
