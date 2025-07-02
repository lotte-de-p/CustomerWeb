import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { MobileLine } from '@sim-management/data-access';

@Component({
  selector: 'tg-sim-management-mobile-line-details-port-e-sim-action-card',
  templateUrl: './port-e-sim-action-card.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class PortESimActionCardComponent {
  @Input() mobileLine: MobileLine;
  @Input() portingUrl: string;

  constructor(private readonly urlService: UrlService) {}

  onPortESimClick(): void {
    this.urlService.redirectTo(
      `${this.portingUrl}&msisdn=${this.mobileLine.msisdn}&iccid=${this.mobileLine.mainSimCard?.iccid}`
    );
  }
}
