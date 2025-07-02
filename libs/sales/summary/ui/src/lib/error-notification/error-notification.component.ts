import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SummaryNotification } from '@sales/summary/data-access';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, NotificationComponent],
  selector: 'tg-sales-summary-error-notification',
  templateUrl: './error-notification.component.html',
})
export class ErrorNotificationComponent {
  @Input() notifications: SummaryNotification[] | undefined | null;
}
