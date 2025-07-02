import { Component, Element, h, Host, Listen, State } from '@stencil/core';

@Component({
  tag: 'wink-global-header',
  styleUrls: {
    telenet: 'styles/brands/global-header.telenet.scss',
    base: 'styles/brands/global-header.base.scss',
  },
  shadow: true,
})
export class GlobalHeader {
  @Element() host!: HTMLWinkGlobalHeaderElement;

  @State() hasCustomerOrientation? = false;
  @State() hasIntentBar? = false;
  @State() hasCustomerZone? = false;
  @State() hasLanguage? = false;
  @State() hasBrand? = false;
  @State() hasMainNavigation? = false;
  @State() hasSearch? = false;
  @State() hasCallToAction? = false;
  @State() hasTopNavigation = false;
  @State() hasMobileCustomerOrientation? = false;
  @State() hasMobileIntentBar? = false;
  @State() hasMobileCustomerZone? = false;
  @State() hasMobileLanguage? = false;
  @State() hasMobileBrand? = false;
  @State() hasMobileMainNavigation? = false;
  @State() hasMobileSearch? = false;
  @State() hasMobileCallToAction? = false;
  @State() IsMobileMinimal = false;
  @State() hasFlyout = false;
  @State() hasMobileFlyout = false;

  @State() isSubNavOpen = false;

  @Listen('mainNavigationItemClicked', { target: 'document' })
  handleMainNavigationItemClicked(event: CustomEvent<{ index: number; name: string }>) {
    if (this.host.querySelector(`[slot="mobile-flyout"][flyout-id="${event.detail.index}"]`)) {
      this.isSubNavOpen = true;
      return;
    }
    this.isSubNavOpen = false;
  }

  @Listen('flyoutBackLinkClicked', { target: 'document' })
  handleFlyoutBackLinkClicked() {
    this.isSubNavOpen = false;
  }

  componentWillLoad() {
    this.hasCustomerOrientation = !!this.host.querySelector('[slot="customer-orientation"]');
    this.hasIntentBar = !!this.host.querySelector('[slot="intent-bar"]');
    this.hasCustomerZone = !!this.host.querySelector('[slot="customer-zone"]');
    this.hasLanguage = !!this.host.querySelector('[slot="language"]');

    this.hasBrand = !!this.host.querySelector('[slot="brand"]');
    this.hasMainNavigation = !!this.host.querySelector('[slot="main-navigation"]');
    this.hasSearch = !!this.host.querySelector('[slot="search"]');
    this.hasCallToAction = !!this.host.querySelector('[slot="call-to-action"]');

    this.hasMobileCustomerOrientation = !!this.host.querySelector('[slot="mobile-customer-orientation"]');
    this.hasMobileIntentBar = !!this.host.querySelector('[slot="mobile-intent-bar"]');
    this.hasMobileCustomerZone = !!this.host.querySelector('[slot="mobile-customer-zone"]');
    this.hasMobileLanguage = !!this.host.querySelector('[slot="mobile-language"]');

    this.hasMobileBrand = !!this.host.querySelector('[slot="mobile-brand"]');
    this.hasMobileMainNavigation = !!this.host.querySelector('[slot="mobile-main-navigation"]');
    this.hasMobileSearch = !!this.host.querySelector('[slot="mobile-search"]');
    this.hasMobileCallToAction = !!this.host.querySelector('[slot="mobile-call-to-action"]');

    this.hasFlyout = !!this.host.querySelector('[slot="flyout"]');
    this.hasMobileFlyout = !!this.host.querySelector('[slot="mobile-flyout"]');

    this.hasTopNavigation = this.hasCustomerOrientation || this.hasIntentBar || this.hasCustomerZone;

    this.IsMobileMinimal =
      this.hasMobileLanguage &&
      !this.hasMobileCustomerOrientation &&
      !this.hasMobileIntentBar &&
      !this.hasMobileCustomerZone &&
      !this.hasMobileMainNavigation &&
      !this.hasMobileSearch &&
      !this.hasMobileCallToAction;
  }

  render() {
    return (
      <Host class={{ compact: !this.hasTopNavigation, minimal: this.IsMobileMinimal }}>
        {this.hasTopNavigation && (
          <div class="top-row">
            {this.hasCustomerOrientation && <slot name="customer-orientation" />}
            {this.hasIntentBar && <slot name="intent-bar" />}
            {this.hasCustomerZone && <slot name="customer-zone" />}
            {this.hasLanguage && <slot name="language" />}
          </div>
        )}

        {(this.hasBrand || this.hasMainNavigation || this.hasSearch || this.hasCallToAction) && (
          <div class="bottom-row">
            {this.hasBrand && <slot name="brand" />}
            {this.hasMainNavigation && <slot name="main-navigation" />}
            {this.hasSearch && <slot name="search" />}
            {this.hasCallToAction && <slot name="call-to-action" />}
            {!this.hasTopNavigation && this.hasLanguage && <slot name="language" />}
            {this.hasFlyout && (
              <div class="flyout-container">
                <slot name="flyout" />
              </div>
            )}
          </div>
        )}

        {this.hasMobileBrand && (
          <div class="mobile-row">
            {this.hasMobileBrand && <slot name="mobile-brand" />}
            <div class="mobile-row-right">
              {this.hasMobileCustomerZone && <slot name="mobile-customer-zone" />}
              {this.hasMobileSearch && <slot name="mobile-search" />}
              <div class="mobile-hamburger">
                {!this.IsMobileMinimal && <input type="checkbox" class="mobile-hamburger-button" />}
                <wink-icon
                  appearance="transparent"
                  icon="hamburger-menu"
                  size="md"
                  class="mobile-hamburger-button open"
                />
                <wink-icon appearance="secondary" icon="cross" size="md" class="mobile-hamburger-button close" />

                <div class="mobile-fly-out">
                  <div class="mobile-fly-out-top">
                    <div class="mobile-fly-out-top-main">
                      {this.hasMobileMainNavigation && <slot name="mobile-main-navigation" />}
                      {this.hasMobileCallToAction && <slot name="mobile-call-to-action" />}
                      {this.hasMobileIntentBar && <slot name="mobile-intent-bar" />}
                    </div>
                    <div class="mobile-fly-out-top-sub-nav" {...{ open: this.isSubNavOpen }}>
                      {this.hasMobileFlyout && <slot name="mobile-flyout" />}
                    </div>
                  </div>
                  <div class="mobile-fly-out-bottom">
                    {this.hasMobileCustomerOrientation && <slot name="mobile-customer-orientation" />}
                    {this.hasMobileLanguage && <slot name="mobile-language" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
