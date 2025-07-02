import { Component, Input } from '@angular/core';
import { DatePipe, NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'tg-billing-unpaid-status-notification',
  template: `
    <div class="display--flex align-items--center" data-testid="billing-overview-invoice-status-notification">
      <div class="mr--xs">
        <i class="icon-md" [ngClass]="[icon, textClass]" size="md"></i>
      </div>
      <div [ngClass]="textClass" class="billing-overview-invoice-status-notification">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  imports: [DatePipe, NgClass, NgIf],
  styleUrl: 'billing-overview-unpaid-status-notification.component.scss',
})
export class UnpaidStatusNotificationComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() textClass!: string;
}
