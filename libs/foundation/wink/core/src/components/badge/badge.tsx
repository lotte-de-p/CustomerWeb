import { Component, h, Host, Prop } from '@stencil/core';
import { BADGE_COLORS, BADGE_SIZES, BadgeColor, BadgeSize } from './models/badge.types';

@Component({
  tag: 'wink-badge',
  styleUrls: {
    telenet: 'styles/brands/badge.telenet.scss',
    base: 'styles/brands/badge.base.scss',
  },
  shadow: true,
})
export class Badge {
  @Prop() text = '';
  @Prop() size: BadgeSize = BADGE_SIZES.md;
  @Prop() background: BadgeColor = BADGE_COLORS.default;
  @Prop() isBold = true;

  render() {
    return <Host>{this.text}</Host>;
  }
}
