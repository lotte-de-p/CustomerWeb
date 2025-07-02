import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'care-billing-mobile-usage-limits-member-notification-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'member-notification-header.component.html',
})
export class MemberNotificationHeaderComponent {}
