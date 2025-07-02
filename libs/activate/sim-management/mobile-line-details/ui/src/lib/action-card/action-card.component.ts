import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-activate-sim-management-ui-action-card',
  templateUrl: './action-card.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimManagementActionCardComponent {
  @Input() title: string;
  @Input() description?: string;
  @Input() iconClass?: string;
  @Output() actionClick = new EventEmitter<void>();

  onActionCardClick(): void {
    this.actionClick.emit();
  }
}
