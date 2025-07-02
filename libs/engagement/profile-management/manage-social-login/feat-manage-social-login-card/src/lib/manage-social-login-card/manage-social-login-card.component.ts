import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcInterceptorDirective } from '@profile-management/util';

@Component({
  selector: 'tg-pm-manage-social-login-card',
  standalone: true,
  imports: [TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './manage-social-login-card.component.html',
})
export class ManageSocialLoginCardComponent {
  itsmeIcon = '/assets/logo_itsme.svg';
}
