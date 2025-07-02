import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'care-billing-mobile-usage-limits-premium-services-description',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'premium-services-description.component.html',
})
export class PremiumServicesDescriptionComponent {
  @Input({ transform: booleanAttribute }) isMember: boolean;
}
