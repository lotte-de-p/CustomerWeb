import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MobileLine } from '@sim-management/data-access';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-sim-management-mobile-line-details-activate-sim-action-card',
  templateUrl: './activate-sim-action-card.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class ActivateSimActionCardComponent {
  @Input() mobileLine: MobileLine;
  @Input() simActivationUrl: string;

  constructor(private readonly urlService: UrlService) {}

  onActivateSimClick(): void {
    this.urlService.redirectTo(
      `${this.simActivationUrl}&msisdn=${this.mobileLine.msisdn}&iccid=${this.mobileLine.pendingSimCard?.iccid}`
    );
  }
}
