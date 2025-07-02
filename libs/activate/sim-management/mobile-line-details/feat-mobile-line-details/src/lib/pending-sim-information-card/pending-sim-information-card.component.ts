import { UntilDestroy } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileLine } from '@sim-management/data-access';
import { ReactiveFormsModule } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-mobile-line-details-pending-sim-information-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './pending-sim-information-card.component.html',
  styleUrls: ['./pending-sim-information-card.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingSimInformationCardComponent {
  @Input() mobileLine: MobileLine;
}
