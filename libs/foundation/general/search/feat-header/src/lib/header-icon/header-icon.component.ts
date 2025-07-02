import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilitySpanComponent, IconComponent, IconType } from '@general/ui-search';

@Component({
  selector: 'tg-foundation-general-search-header-icon',
  standalone: true,
  imports: [CommonModule, AccessibilitySpanComponent, IconComponent],
  template: `
    <tg-foundation-general-search-icon [attr.data-testid]="'general-search-icon'" [type]="type" [mobile]="mobile">
    </tg-foundation-general-search-icon>
    <tg-foundation-general-search-accessibility-span
      [attr.data-testid]="'accessibility-span-search'"
      *ngIf="type === 'search'">
      {{ 'ng.search-header.open-search-bar' }}
    </tg-foundation-general-search-accessibility-span>
    <tg-foundation-general-search-accessibility-span
      [attr.data-testid]="'accessibility-span-clear'"
      *ngIf="type === 'backspace'">
      {{ 'ng.search-header.clear-search-bar' }}
    </tg-foundation-general-search-accessibility-span>
    <tg-foundation-general-search-accessibility-span
      [attr.data-testid]="'accessibility-span-close-cancel'"
      *ngIf="type === 'close' || type === 'cancel'">
      {{ 'ng.search-header.close-search-bar' }}
    </tg-foundation-general-search-accessibility-span>
  `,
})
export class HeaderIconComponent {
  @Input() type: IconType | undefined;
  @Input() mobile = false;
}
