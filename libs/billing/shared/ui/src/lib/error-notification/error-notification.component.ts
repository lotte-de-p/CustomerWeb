import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-error-notification',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'error-notification.component.html',
})
export class ErrorNotificationComponent {
  @Input({ required: true }) label: string | undefined;
  @Input({ required: true }) description: string | undefined;
}
