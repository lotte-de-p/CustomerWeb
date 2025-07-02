import { Component, Input } from '@angular/core';
import { TranslateHelperService } from '../../service/translate-helper.service';
import { NotificationTypeEnum } from '../../model/notification.model';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tg-marketing-cafe-error-notification',
  templateUrl: './error-notification.component.html',
  standalone: true,
  imports: [NgClass, TranslateModule],
})
export class ErrorNotificationComponent {
  @Input() labelKey: string;
  @Input() type: NotificationTypeEnum;

  constructor(public translateHelperService: TranslateHelperService) {}

  getClass(): string {
    switch (this.type) {
      case NotificationTypeEnum.ERROR:
        return 'notification--errorfield';
      case NotificationTypeEnum.WARNING:
        return 'notification--warning';
      case NotificationTypeEnum.INFO:
        return 'notification--info';
    }
  }

  getIconClass(): string {
    switch (this.type) {
      case NotificationTypeEnum.ERROR:
        return 'icon-error-shape errorfield';
      case NotificationTypeEnum.WARNING:
        return 'icon-alert-shape warning';
      case NotificationTypeEnum.INFO:
        return 'icon-information-shape info';
    }
  }
}
