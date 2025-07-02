import { Component, Element, h, State, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'wink-sheet',
  styleUrls: {
    telenet: 'styles/brands/sheet.telenet.scss',
    base: 'styles/brands/sheet.base.scss',
  },
  shadow: true,
})
export class Sheet {
  @Element() host!: HTMLWinkSheetElement;

  @Prop() dashboard = false;
  @Prop() multipage = false;
  @Prop({ reflect: true, mutable: true }) isVisible = false;

  @State() isOpen = false;
  @State() hasStickyFooter = false;
  @State() firstPage = true;

  @Watch('isVisible')
  onIsVisibleChange() {
    if (this.isVisible && !this.isOpen) {
      this.openModal();
    }
    if (!this.isVisible && this.isOpen) {
      this.closeModal();
    }
  }

  @Method()
  async open() {
    this.openModal();
  }

  @Method()
  async close() {
    this.closeModal();
  }

  @Method()
  async nextPage() {
    this.goForward();
  }

  componentWillLoad() {
    if (this.isVisible && !this.isOpen) {
      this.openModal();
    }

    const stickyElements = this.host?.querySelectorAll('[slot*="footer"]');
    if (stickyElements.length > 0) {
      this.hasStickyFooter = true;
    }
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  private readonly handleOutsideClick = (event: MouseEvent) => {
    if (this.isOpen && !this.host.contains(event.target as Node)) {
      this.closeModal();
    }
  };

  private readonly handleButtonClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'wink-button') {
      if (target.classList.contains('wink-button-forward')) {
        this.goForward();
      }

      if (target.classList.contains('wink-button-back')) {
        this.goBack();
      }

      if (target.classList.contains('wink-button-close')) {
        this.close();
      }
    }
  };

  private openModal() {
    if (this.isOpen) return;

    this.isVisible = true;
    this.isOpen = true;

    setTimeout(() => {
      const dialog = this.host.shadowRoot?.querySelector('dialog');
      if (dialog) {
        dialog.showModal();
      }
    }, 0);
  }

  private closeModal() {
    if (!this.isOpen) return;

    this.isVisible = false;
    this.isOpen = false;
    const dialog = this.host.shadowRoot?.querySelector('dialog');
    if (dialog) {
      dialog.close();
    }
  }

  private goBack() {
    this.firstPage = true;
  }

  private goForward() {
    this.firstPage = false;
  }

  private renderFooter() {
    if (!this.hasStickyFooter) return;
    if (this.multipage) {
      return (
        <div class="sheet-footer">
          <div class={`sheet-footer-sub ${this.firstPage ? 'sheet-footer-visible' : ''}`}>
            <slot name="footer" />
          </div>
          <div class={`sheet-footer-sub ${!this.firstPage ? 'sheet-footer-visible' : ''}`}>
            <slot name="footer-second" />
          </div>
        </div>
      );
    }

    return (
      <div class="sheet-footer">
        <slot name="footer" />
      </div>
    );
  }

  render() {
    return (
      <dialog
        onClick={this.handleButtonClick}
        class={`sheet ${this.isOpen ? 'sheet-visible' : ''} ${this.hasStickyFooter ? 'sheet-margin-bottom' : ''} ${this.dashboard ? 'sheet-darker' : ''}`}
        aria-live="assertive">
        {!this.firstPage && (
          <wink-button
            appearance="tertiary"
            size="md"
            icon="chevron-left"
            icon-position="center"
            class="sheet-icon sheet-icon-back"
            icon-button-aria-label="Terug"
            onClick={this.goBack.bind(this)}></wink-button>
        )}

        <wink-button
          appearance="tertiary"
          size="md"
          icon="cross"
          icon-position="center"
          class="sheet-icon sheet-icon-close"
          icon-button-aria-label="Sluiten"
          onClick={this.closeModal.bind(this)}></wink-button>

        <div class="sheet-content">
          {this.multipage ? (
            <div class="sheet-content-scroll">
              <div
                class={`sheet-content-page sheet-content-page-first ${this.firstPage ? 'sheet-content-page-visible' : ''}`}>
                <slot name="page-first" />
              </div>
              <div
                class={`sheet-content-page sheet-content-page-second ${!this.firstPage ? 'sheet-content-page-visible' : ''} `}>
                <slot name="page-second" />
              </div>
              <slot />
            </div>
          ) : (
            <div class="sheet-content-scroll">
              <slot />
            </div>
          )}

          {this.renderFooter()}
        </div>
      </dialog>
    );
  }
}
