import { Component, h, Host, Prop, State } from '@stencil/core';
import { ICON_SIZES, ICON_TYPES, IconColors, IconSize, IconType } from './models/icon.types';

@Component({
  tag: 'wink-icon',
  styleUrls: {
    telenet: 'styles/brands/icon.telenet.scss',
    base: 'styles/brands/icon.base.scss',
  },
  shadow: true,
})
export class Icon {
  @Prop() appearance: IconType = ICON_TYPES.default;
  @Prop() size: IconSize = ICON_SIZES.md;
  @Prop() icon = 'bell';
  @Prop() iconColor?: IconColors;

  @State() hasBackdrop = false;

  componentWillRender(): void {
    this.hasBackdrop = this.appearance !== 'default' && Object.values(ICON_TYPES).includes(this.appearance);
  }

  render() {
    return (
      <Host exportparts={`icon, icon-${this.icon}`}>
        <i
          class={{
            [this.size]: true,
            [this.appearance]: true,
            ['backdrop']: this.hasBackdrop,
            ['color--' + this.iconColor]: this.appearance === ICON_TYPES.default && this.iconColor !== undefined,
          }}
          part={`icon icon-${this.icon}`}
          aria-hidden="true"
        />
      </Host>
    );
  }
}
