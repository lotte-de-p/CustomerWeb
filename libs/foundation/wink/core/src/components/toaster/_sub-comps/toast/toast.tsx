import { Component, h, Host, Prop, Listen, Watch } from '@stencil/core';
import { ToastType, TOAST_TYPES } from './models/toast.types';
import { Target, TARGETS } from '../../../../models/targets.types';
import { ICON_SIZES } from '../../../icon/models/icon.types';

@Component({
  tag: 'wink-toast',
  styleUrls: {
    telenet: 'styles/brands/toast.telenet.scss',
    base: 'styles/brands/toast.base.scss',
  },
  shadow: true,
})
export class Toast {
  @Prop() appearance: ToastType = TOAST_TYPES.actionable;
  @Prop() text = '';
  @Prop() linkText?: string = 'Open Link';
  @Prop() href?: string = '';
  @Prop() target?: Target = TARGETS.self;
  @Prop() duration? = 6000;
  @Prop({ reflect: true, mutable: true }) isOpen = false;
  @Prop({ reflect: true, mutable: true }) theme = 'telenet-light-theme';
  @Prop({ reflect: true }) currentTheme = 'telenet-light-theme';

  private timer: ReturnType<typeof setTimeout> | null = null;

  private readonly iconsNamesMap = new Map([
    [TOAST_TYPES.negative, 'cross-circle-filled'],
    [TOAST_TYPES.positive, 'check-shape-filled'],
  ]);

  @Watch('isOpen')
  watchOpenPropHandler(newValue: boolean, oldValue: boolean) {
    if (newValue && !oldValue) {
      this.closeToastAfterTimeout();
    }
  }

  @Watch('currentTheme')
  watchThemePropHandler(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.changeTheme(newValue);
    }
  }

  @Listen('keydown', {
    passive: true,
  })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.closeToast();
    }
  }

  componentDidLoad() {
    const currentTheme = localStorage.getItem('currentTheme') || 'telenet-light';
    this.changeTheme(currentTheme + '-theme');
    this.closeToastAfterTimeout();
  }

  private changeTheme(newValue: string) {
    this.theme = newValue.includes('dark') ? newValue.replace('dark', 'light') : newValue.replace('light', 'dark');
  }

  private closeToast() {
    this.isOpen = false;
  }

  private closeToastAfterTimeout() {
    if (this.appearance !== TOAST_TYPES.actionable && this.duration && this.duration > 0) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.closeToast();
      }, Number(this.duration));
    }
  }

  render() {
    return (
      <Host theme={this.theme} aria-hidden={this.isOpen ? 'false' : 'true'} role="alert">
        {(this.appearance === TOAST_TYPES.positive || this.appearance === TOAST_TYPES.negative) && (
          <wink-icon
            class={`toast-icon toast-icon-${this.appearance}`}
            size={ICON_SIZES.md}
            icon={this.iconsNamesMap.get(this.appearance)}></wink-icon>
        )}

        {this.text && <p class="toast-text">{this.text}</p>}

        {this.appearance === TOAST_TYPES.actionable && this.href && (
          <wink-link
            appearance="default"
            icon=""
            size="inherit"
            is-disabled="false"
            class="toast-link"
            target={this.target}
            href={this.href}>
            {this.linkText}
          </wink-link>
        )}

        <wink-button
          element="button"
          type="button"
          appearance="tertiary"
          size="sm"
          width="none"
          status="none"
          icon="cross"
          icon-position="center"
          exportparts="icon, icon-cross"
          class="hydrated toast-close"
          icon-button-aria-label="close toast"
          onClick={this.closeToast.bind(this)}></wink-button>
      </Host>
    );
  }
}
