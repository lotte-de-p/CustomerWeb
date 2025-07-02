import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-notifications',
  templateUrl: './product-notifications.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class ProductNotificationsComponent {
  @Input() showSuspendedPlanNotificationMessage: boolean;
  @Input() showMoveNotificationMessage: boolean;
}
