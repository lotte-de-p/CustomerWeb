import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { MediaQueryDetector } from '../../../../assets/shared/scripts/media-query-detector';
import { mainNavEventEmitterDetails } from '../main-navigation/models/main-navigation.types';

@Component({
  tag: 'wink-flyout',
  styleUrls: {
    telenet: 'styles/brands/flyout.telenet.scss',
    base: 'styles/brands/flyout.base.scss',
  },
  shadow: true,
})
export class Flyout implements ComponentInterface {
  @Element() host!: HTMLWinkFlyoutElement;

  @Prop() flyoutId: number | undefined = undefined;

  @State() activeId: number | undefined = undefined;
  @State() backLabel: string | undefined = undefined;
  @State() isFlyoutOpen = false;
  @State() focusableElements: any[] = [];
  @State() focusedElementTracker = 0;

  @Event() flyoutBackLinkClicked: EventEmitter<{ eventType: 'mouse' | 'keyboard' }> | undefined;

  @Listen('mainNavigationItemClicked', { target: 'document' })
  handleMainNavigationItemClicked(event: CustomEvent<mainNavEventEmitterDetails>) {
    this.activeId = event.detail.index;
    this.backLabel = event.detail.name;
    this.isFlyoutOpen = this.flyoutId === this.activeId;

    if (event.detail.eventType === 'mouse') {
      return;
    }

    if (this.shouldFetchFocusableElements()) {
      this.getAllFocusableElements();
    } else {
      this.resetFocusableElements();
    }

    this.focusOnElement();
  }

  private shouldFetchFocusableElements() {
    return (
      !this.focusableElements.length &&
      MediaQueryDetector.isFromMdHeader &&
      this.isFlyoutOpen &&
      !this.host.getAttribute('slot')?.includes('mobile')
    );
  }

  private resetFocusableElements() {
    this.focusableElements = [];
    this.focusedElementTracker = 0;
  }

  private focusOnElement() {
    if (this.focusableElements.length) {
      this.focusableElements[this.focusedElementTracker].focus();
    }
  }

  private getAllFocusableElements() {
    const focusableQuery = 'a, button, [tabindex]:not([tabindex="-1"])';

    this.host.querySelectorAll('wink-navigation-list')?.forEach((list: any) => {
      list.shadowRoot.querySelectorAll('wink-navigation-list-item').forEach((item: any) => {
        this.focusableElements.push(item.shadowRoot.querySelector(focusableQuery));
      });
    });
  }

  @Listen('keydown', {})
  handleKeyDown(e: KeyboardEvent) {
    const { code, shiftKey } = e;
    const { length } = this.focusableElements;

    if (code === 'Escape') {
      this.closeFlyout();
      this.resetFlyout();
    }

    if (code === 'ArrowDown' || code === 'ArrowUp' || code === 'Tab') {
      e.preventDefault();
      this.focusedElementTracker += code === 'ArrowDown' || (code === 'Tab' && !shiftKey) ? 1 : -1;
      this.focusedElementTracker = (this.focusedElementTracker + length) % length;
      (this.focusableElements[this.focusedElementTracker] as HTMLElement).focus();
    }
  }

  private resetFlyout() {
    this.activeId = undefined;
    this.isFlyoutOpen = false;
    this.focusableElements = [];
    this.focusedElementTracker = 0;
  }

  private closeFlyout() {
    this.resetFlyout();
    this.flyoutBackLinkClicked?.emit({ eventType: 'keyboard' });
  }

  private handleFlyoutMouseLeave() {
    if (MediaQueryDetector.isUntilMdHeader) {
      return;
    }

    this.resetFlyout();
    this.flyoutBackLinkClicked?.emit({ eventType: 'mouse' });
  }

  render() {
    return (
      <Host
        id={`flyout-${this.flyoutId}`}
        tabindex="-1"
        aria-label={this.flyoutId === this.activeId ? this.backLabel : ' '}
        onMouseLeave={this.handleFlyoutMouseLeave.bind(this)}
        {...{ open: this.isFlyoutOpen }}>
        <div class="container">
          <div class="content">
            <wink-link
              onClick={this.closeFlyout.bind(this)}
              appearance="menu-back"
              icon="arrow-left"
              size="caption-bold"
              icon-position="left"
              icon-appearance="default"
              is-disabled="false"
              href="#">
              <wink-icon
                slot="link-icon"
                appearance="default"
                icon="arrow-left"
                size="md"
                exportparts="icon, icon-arrow-left"
              />
              {this.backLabel}
            </wink-link>

            {Array.from({ length: 4 }).map((_, index) => (
              <slot name={`col-${index + 1}`} />
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
