import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryInfo, SummaryNotification } from '@sales/summary/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, NotificationComponent],
  selector: 'tg-sales-summary-delivery-info',
  templateUrl: './delivery-info.component.html',
})
export class DeliverInfoComponent {
  @Input() deliveryInfo: DeliveryInfo | undefined | null;
  @Input() notifications: SummaryNotification[] | undefined | null;
}
