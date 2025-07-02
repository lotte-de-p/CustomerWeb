import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-mobile-activation-in-progress-notification',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'mobile-activation-in-progress-notification.component.html',
})
export class MobileActivationInProgressNotificationComponent {}
