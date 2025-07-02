import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'care-billing-mobile-usage-limits-premium-services-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'premium-services-header.component.html',
})
export class PremiumServicesHeaderComponent {
  @Input({ transform: booleanAttribute }) isMember: boolean;
}
