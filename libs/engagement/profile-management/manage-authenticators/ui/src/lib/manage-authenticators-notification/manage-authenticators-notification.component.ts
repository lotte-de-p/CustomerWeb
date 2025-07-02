import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './manage-authenticators-notification.component.html',
  selector: 'tg-pm-manage-authenticators-notification',
})
export class ManageAuthenticatorsNotificationComponent {
  @Input() error: string | null;
}
