import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'care-billing-mobile-usage-limits-out-of-bundle-limits-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'out-of-bundle-limits-header.component.html',
})
export class OutOfBundleLimitsHeaderComponent {
  @Input({ transform: booleanAttribute }) isMember: boolean;
}
