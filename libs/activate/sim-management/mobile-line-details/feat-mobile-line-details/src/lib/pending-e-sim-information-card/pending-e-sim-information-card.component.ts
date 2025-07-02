import { UntilDestroy } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { MobileLine, SimManagementFacade } from '@sim-management/data-access';
import { ReactiveFormsModule } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-mobile-line-details-pending-e-sim-information-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './pending-e-sim-information-card.component.html',
  styleUrls: ['./pending-e-sim-information-card.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingESimInformationCardComponent {
  @Input() mobileLine: MobileLine;

  private readonly facade = inject(SimManagementFacade);

  isESimSwapReadyForActivation$: Observable<boolean | undefined> = this.facade.isESimSwapReadyForActivation$;
  isESimSwapInProgress$: Observable<boolean | undefined> = this.facade.isESimSwapInProgress$;
}
