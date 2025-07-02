import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Factors } from '@profile-management/data-access';

@Component({
  standalone: true,
  selector: 'tg-pm-manage-authenticators-icon',
  imports: [CommonModule],
  templateUrl: './manage-authenticators-icon.component.html',
})
export class ManageAuthenticatorsIconComponent {
  @Input() type: string | undefined;
  @Input() size: string;

  getIcon(type: string): string {
    switch (type) {
      case Factors.ITSME:
        return 'itsme';
      case Factors.PASSKEY:
        return 'icon-user-key';
      case Factors.AUTHENTICATOR:
        return 'icon-qr-code-scan';
      case Factors.SMS:
        return 'icon-message-dots';
      default:
        return 'icon-others';
    }
  }
}
