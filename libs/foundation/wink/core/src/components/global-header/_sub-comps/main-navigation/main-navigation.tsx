import { Component, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { mainNavEventEmitterDetails, MenuItem } from './models/main-navigation.types';
import { MediaQueryDetector } from '../../../../assets/shared/scripts/media-query-detector';

@Component({
  tag: 'wink-main-navigation',
  styleUrls: {
    telenet: 'styles/brands/main-navigation.telenet.scss',
    base: 'styles/brands/main-navigation.base.scss',
  },
  shadow: true,
})
export class MainNavigation {
  @Prop() menuItems = '';

  @State() _menuItems: MenuItem[] = [];
  @State() isOpen = false;
  @State() activeIndex: number | undefined = undefined;
  @State() ActiveLinkRef: HTMLAnchorElement | undefined = undefined;

  @Event() mainNavigationItemClicked: EventEmitter<mainNavEventEmitterDetails> | undefined;

  @Listen('flyoutBackLinkClicked', { target: 'document' })
  handleFlyoutBackLinkClicked(e: CustomEvent) {
    const { eventType } = e.detail;

    this.isOpen = false;

    if (eventType !== 'mouse') {
      this.ActiveLinkRef?.focus();
    }
  }

  componentWillLoad() {
    if (!this.menuItems) {
      return;
    }
    this._menuItems = JSON.parse(this.menuItems);
  }

  private mainNavigationItemEmitter(item: mainNavEventEmitterDetails) {
    this.mainNavigationItemClicked?.emit(item);
  }

  private handleFlyOutOpening(item: mainNavEventEmitterDetails) {
    this.isOpen = !!this._menuItems[item.index]?.hasSubNav;
    this.mainNavigationItemEmitter(item);
  }

  private handleItemClick(item: mainNavEventEmitterDetails) {
    this.activeIndex = item.index;
    this.handleFlyOutOpening(item);
  }

  private handleItemMouseOver(item: mainNavEventEmitterDetails) {
    if (item.eventType === 'mouse' && MediaQueryDetector.isUntilMdHeader) {
      return;
    }
    if (this._menuItems[item.index].hasSubNav) {
      this.handleFlyOutOpening(item);
      return;
    }
    this.isOpen = false;
    this.mainNavigationItemEmitter({ index: NaN, name: '' });
  }

  private handleKeyDownEvent(e: KeyboardEvent, index: number, name: string) {
    if (e.code === 'Space') {
      e.preventDefault();
      this.handleItemClick({ index, name });
    }
  }

  private getATagCssClasses(index: number) {
    return {
      active: this.activeIndex === index,
    };
  }

  render() {
    return (
      <nav role="navigation">
        <ul role="menu" aria-label="Main navigation menu">
          {this._menuItems.map((item: MenuItem, index: number) => (
            <li role="none">
              <a
                role="menuitem"
                aria-haspopup={(!!item.hasSubNav).toString()}
                aria-expanded={this.isOpen.toString()}
                aria-controls={item.hasSubNav ? `flyout-${index}` : undefined}
                class={this.getATagCssClasses(index)}
                href={item.url}
                onClick={() => this.handleItemClick({ index, name: item.name })}
                onMouseOver={() => this.handleItemMouseOver({ index, name: item.name, eventType: 'mouse' })}
                onKeyDown={(e) => this.handleKeyDownEvent(e, index, item.name)}
                ref={(el) => this.activeIndex === index && (this.ActiveLinkRef = el)}>
                {item.name}
                {item.hasSubNav && <wink-icon appearance="default" icon="chevron-right" size="sm" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
