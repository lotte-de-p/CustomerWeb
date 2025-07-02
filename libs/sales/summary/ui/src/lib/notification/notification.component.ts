import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SummaryNotification } from '@sales/summary/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-sales-summary-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() notification: SummaryNotification | undefined;
}
