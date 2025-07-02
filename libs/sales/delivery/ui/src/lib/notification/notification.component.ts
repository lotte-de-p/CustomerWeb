import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryNotification } from '@sales/delivery/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-sales-delivery-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() notification: DeliveryNotification | undefined;
}
