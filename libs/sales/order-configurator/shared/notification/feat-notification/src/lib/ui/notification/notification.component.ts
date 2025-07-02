import { Component, Input } from '@angular/core';
import { Notification } from '@sales/order-configurator/shared/domain-notification';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [TranslateModule],
  selector: 'tg-sales-ui-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() notification: Notification | undefined;
}
