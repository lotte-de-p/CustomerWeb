import { Component, Element, h, Host, Prop } from '@stencil/core';
import { UUId } from '../../../../utils/utils';
@Component({
  tag: 'wink-navigation-list',
  styleUrls: {
    telenet: 'styles/brands/navigation-list.telenet.scss',
    base: 'styles/brands/navigation-list.base.scss',
  },
  shadow: true,
})
export class NavigationList {
  @Prop() listTitle = '';
  @Prop() hasBoldLinks = false;
  @Element() host!: HTMLWinkNavigationListElement;

  render() {
    const allLinkChilds = Array.from(this.host.children).filter((node: any) => {
      return node.nodeName.toLocaleLowerCase() === 'wink-navigation-list-item';
    });
    return (
      <Host>
        {this.listTitle && (
          <wink-paragraph appearance="caption" size="bold" class="navigation-list--title">
            {this.listTitle}
          </wink-paragraph>
        )}
        <ul class="navigation-list--list">
          {allLinkChilds.map((child: any) => (
            <li key={UUId()} innerHTML={child.outerHTML} />
          ))}
        </ul>
      </Host>
    );
  }
}
