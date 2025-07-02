import { Component, h, Host, Prop } from '@stencil/core';
import { AVATAR_SIZES, AvatarSize } from './models/avatar.types';

@Component({
  tag: 'wink-avatar',
  styleUrls: {
    telenet: 'styles/brands/avatar.telenet.scss',
    base: 'styles/brands/avatar.base.scss',
  },
  shadow: true,
})
export class Avatar {
  @Prop() src!: string;
  @Prop() size: AvatarSize = AVATAR_SIZES.md;

  render() {
    return (
      <Host>
        {this.src?.length > 0 ? (
          <img src={this.src} alt="avatar image" />
        ) : (
          <wink-icon appearance="secondary" icon="user" size={this.size}></wink-icon>
        )}
      </Host>
    );
  }
}
