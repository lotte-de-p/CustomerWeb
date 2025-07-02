import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Hidden = 'telenet' | 'base';

@Component({
  selector: 'tg-foundation-general-search-accessibility-span',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="visuallyhidden" [ngClass]="[hide !== undefined ? 'hide-' + hide : '']">
      <ng-content></ng-content>
    </span>
  `,
})
export class AccessibilitySpanComponent {
  @Input() hide: Hidden | undefined;
}
