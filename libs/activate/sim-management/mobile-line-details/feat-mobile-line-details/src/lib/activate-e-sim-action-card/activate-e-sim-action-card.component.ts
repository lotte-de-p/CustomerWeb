import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { MobileLine } from '@sim-management/data-access';

@Component({
  selector: 'tg-sim-management-mobile-line-details-activate-e-sim-action-card',
  templateUrl: './activate-e-sim-action-card.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class ActivateESimActionCardComponent {
  @Input() mobileLine: MobileLine;
  @Input() eSimActivationUrl: string;

  constructor(private readonly urlService: UrlService) {}

  onActivateESimClick(): void {
    const simCard = this.mobileLine.pendingSimCard;

    if (simCard?.eSimProfileData && simCard?.pin && simCard?.puk) {
      this.urlService.redirectTo(
        `${this.eSimActivationUrl}?eSimProfileData=${simCard.eSimProfileData}&pin=${simCard.pin}&puk=${simCard.puk}`
      );
    }
  }
}
