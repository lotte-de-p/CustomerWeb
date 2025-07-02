import { Component, h, Host, Prop } from '@stencil/core';
import { ICON_SIZES } from '../icon/models/icon.types';

@Component({
  tag: 'wink-accordion',
  styleUrls: {
    telenet: 'styles/brands/accordion.telenet.scss',
    base: 'styles/brands/accordion.base.scss',
  },
  shadow: true,
})
export class Accordion {
  @Prop() heading = '';
  @Prop() icon = '';
  @Prop({ reflect: true, mutable: true }) isExpanded = false;

  componentDidLoad(): void {
    if (!this.isExpanded) this.activeContentPanel.style.setProperty('display', 'none');
  }

  private activeContentPanel!: HTMLDivElement;

  private get dynamicIdBasedOnTitle() {
    return this.heading.replace(/\s/g, '-').substring(0, 7);
  }

  private readonly onButtonClick = (): void => {
    this.isExpanded = !this.isExpanded;
  };

  private readonly panelTransitionStart = () => {
    if (this.isExpanded) {
      this.activeContentPanel.style.removeProperty('display');
    }
  };

  private readonly panelTransitionEnd = () => {
    if (!this.isExpanded) {
      this.activeContentPanel.style.setProperty('display', 'none');
    }
  };

  render() {
    return (
      <Host>
        <div id="accordion" class="accordion">
          <div role="heading" aria-level="5">
            <button
              class="accordion-trigger"
              onClick={this.onButtonClick}
              type="button"
              aria-expanded={`${this.isExpanded}`}
              aria-controls={`section-${this.dynamicIdBasedOnTitle}`}
              id="accordion1id">
              <div class="accordion-title">
                {!!this.icon && <wink-icon appearance="default" icon={this.icon} size={ICON_SIZES.md}></wink-icon>}
                {this.heading}
              </div>
              <wink-icon
                class="accordion-icon"
                appearance="default"
                icon="chevron-down"
                size={ICON_SIZES.md}></wink-icon>
            </button>
          </div>

          <div
            id={`section-${this.dynamicIdBasedOnTitle}`}
            class="accordion-panel"
            role="region"
            aria-labelledby="accordion1id"
            aria-hidden={`${this.isExpanded}`}
            hidden={!this.isExpanded}
            onTransitionEnd={this.panelTransitionEnd}
            onTransitionStart={this.panelTransitionStart}>
            <div
              id="content"
              class={`${this.icon ? 'with-icon' : ''}`}
              ref={(el) => (this.activeContentPanel = el as HTMLDivElement)}>
              <slot />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
