import { Component, h, Host, Prop } from '@stencil/core';
import {
  LINK_APPEARANCES,
  LINK_ICON_POSITIONS,
  LINK_SIZES,
  LinkAppearance,
  LinkPositions,
  LinkSize,
  LinkSizeSnowflake,
} from './models/link.types';
import { ICON_TYPES_BASIS, IconTypeBasis } from '../icon/models/icon.types';
import { Target, TARGETS } from '../../models/targets.types';

@Component({
  tag: 'wink-link',
  styleUrls: {
    telenet: 'styles/brands/link.telenet.scss',
    base: 'styles/brands/link.base.scss',
  },
  shadow: true,
})
export class Link {
  @Prop({ reflect: true }) appearance: LinkAppearance = LINK_APPEARANCES.default;
  @Prop() size: LinkSize | LinkSizeSnowflake = LINK_SIZES.inherit;
  @Prop() icon?: string;
  @Prop() iconPosition: LinkPositions = LINK_ICON_POSITIONS.left;
  @Prop() iconAppearance: IconTypeBasis = ICON_TYPES_BASIS.default;
  @Prop() isDisabled = false;
  @Prop() href = '';
  @Prop() target: Target = TARGETS.self;

  private getTypeClasses() {
    return this.appearance !== LINK_APPEARANCES.default ? `${this.appearance}` : '';
  }

  private hasBackdrop() {
    return (
      this.iconAppearance !== ICON_TYPES_BASIS.default && Object.values(ICON_TYPES_BASIS).includes(this.iconAppearance)
    );
  }

  render() {
    const sizeClasses = `font-${this.size}`;
    return (
      <Host>
        <a
          class={{
            link: true,
            [sizeClasses]: true,
            [this.getTypeClasses()]: true,
            [`link-with-icon link-with-icon-${this.iconPosition}`]: this.icon !== '',
            'link-with-icon-backdrop': this.hasBackdrop(),
            disabled: this.isDisabled,
          }}
          href={this.href}
          target={this.target}>
          <slot name="link-icon" />
          <div id="link-content">
            <slot />
          </div>
        </a>
      </Host>
    );
  }
}
