import { Component, h, Host, Prop } from '@stencil/core';
import { Size, SIZES } from '../../../models/sizes.types';

@Component({
  tag: 'wink-spacer',
  styleUrls: {
    telenet: 'styles/brands/spacer.telenet.scss',
    base: 'styles/brands/spacer.base.scss',
  },
  shadow: true,
})
export class Spacer {
  @Prop() size: Size = SIZES.md;

  render() {
    return (
      <Host>
        <div class={`height-${this.size}`} />
      </Host>
    );
  }
}
