import { Component, Input } from '@angular/core';
import { WinkBadge } from '@telenet/wink-ng';

export type BadgeColor = 'dark' | 'brand' | 'default';

@Component({
  standalone: true,
  selector: 'tg-demo-badge',
  template: ` <wink-badge text="{{ content }}" is-bold size="md" [attr.background]="color"></wink-badge> `,
  styleUrls: ['./badge.component.scss'],
  imports: [WinkBadge],
})
export class BadgeComponent {
  @Input() color: BadgeColor = 'default';
  @Input() content = '';
}
