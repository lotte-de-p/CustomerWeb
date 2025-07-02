import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'wink-column-count',
  styleUrls: {
    telenet: 'styles/brands/column-count.telenet.scss',
    base: 'styles/brands/column-count.base.scss',
  },
  shadow: true,
})
export class ColumnCount {
  @Prop() colsCount = 4;

  render() {
    return (
      <Host>
        <div class={{ cols: true, [`cols-count-${this.colsCount}`]: true }}>
          <slot />
        </div>
      </Host>
    );
  }
}
