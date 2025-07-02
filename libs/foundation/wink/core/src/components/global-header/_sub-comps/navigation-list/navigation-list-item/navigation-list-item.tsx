import { Component, h, Host, Prop } from '@stencil/core';
import { TARGETS, Target } from '../../../../../models/targets.types';
@Component({
  tag: 'wink-navigation-list-item',
  styleUrls: {
    telenet: 'styles/brands/navigation-list-item.telenet.scss',
    base: 'styles/brands/navigation-list-item.base.scss',
  },
  shadow: true,
})
export class NavigationListItem {
  @Prop() href = '';
  @Prop() target: Target = TARGETS.self;

  render() {
    return (
      <Host>
        <a class="navigation-list-item" href={this.href} target={this.target}>
          <slot />
        </a>
      </Host>
    );
  }
}
