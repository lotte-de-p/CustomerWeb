import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeColor } from '@general/data-access-search';

@Component({
  selector: 'tg-foundation-general-search-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cmp-badge pr--xxs">
      <div class="display--inline-flex" [ngClass]="['search__badge-' + color]">
        <p class="font--caption-bold text-weight--xl">
          <ng-content></ng-content>
        </p>
      </div>
    </div>
  `,
})
export class BadgeComponent {
  @Input() color: BadgeColor = 'info';
}
