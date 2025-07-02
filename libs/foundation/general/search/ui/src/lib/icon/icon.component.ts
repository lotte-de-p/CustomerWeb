import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconType = 'search' | 'backspace' | 'close' | 'cancel';

@Component({
  selector: 'tg-foundation-general-search-icon',
  standalone: true,
  imports: [CommonModule],
  template: ` <i class="icon" aria-hidden="true" [ngClass]="['icon-' + type, mobile ? 'display--block' : '']"> </i> `,
})
export class IconComponent {
  @Input() type: IconType | undefined;
  @Input() mobile = false;
}
