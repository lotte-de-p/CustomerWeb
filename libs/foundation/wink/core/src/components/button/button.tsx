import { Component, h, Host, Prop, State } from '@stencil/core';
import { Target, TARGETS } from '../../models/targets.types';
import {
  BUTTON_APPEARANCES,
  BUTTON_ELEMENTS,
  BUTTON_ICON_POSITIONS,
  BUTTON_SIZES,
  BUTTON_STATUSES,
  BUTTON_WIDTHS,
  ButtonAppearance,
  ButtonElement,
  ButtonIconPosition,
  ButtonSize,
  ButtonState,
  ButtonType,
  ButtonWidth,
  TYPES,
} from './models/button.types';

@Component({
  tag: 'wink-button',
  styleUrls: {
    telenet: 'styles/brands/button.telenet.scss',
    base: 'styles/brands/button.base.scss',
  },
  shadow: true,
})
export class Button {
  @Prop() text?: string;
  @Prop() loadingText?: string;
  @Prop() element: ButtonElement = BUTTON_ELEMENTS.button;
  @Prop() appearance: ButtonAppearance = BUTTON_APPEARANCES.secondary;
  @Prop() size: ButtonSize = BUTTON_SIZES.md;
  @Prop() width: ButtonWidth = BUTTON_WIDTHS.none;
  @Prop() status: ButtonState = BUTTON_STATUSES.none;
  @Prop() href?: string;
  @Prop() target: Target = TARGETS.self;
  @Prop() type: ButtonType = TYPES.button;
  @Prop() icon?: string;
  @Prop() iconButtonAriaLabel?: string;
  @Prop() iconPosition?: ButtonIconPosition = BUTTON_ICON_POSITIONS.left;

  @State() position = this.iconPosition;

  private readonly getText = () => {
    if (this.status === BUTTON_STATUSES.loading) {
      return this.loadingText;
    }
    return this.text;
  };

  private readonly loaderSVG = (
    <svg
      version="1.1"
      id="loader-1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 40 40"
      enable-background="new 0 0 40 40"
      aria-hidden={true}>
      <path
        opacity="0.2"
        fill="#000"
        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
      <path
        fill="#000"
        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"></animateTransform>
      </path>
    </svg>
  );

  private getClasses(): { [key: string]: boolean } {
    return {
      button: true,
      [`type-${this.element}`]: this.element !== 'button',
      [`${this.appearance}`]: true,
      [`size-${this.size}`]: this.size !== BUTTON_SIZES.md,
      [`icon-${this.position}`]: typeof this.icon !== 'undefined',
      [`state-${this.status}`]: this.status !== 'none',
      ['icon-button']: !this.getText() && this.icon !== '',
    };
  }

  private getAttributes() {
    return {
      ...(this.element !== 'a' && { type: this.type }),
      ...(this.element === 'a' && { href: this.href }),
      ...(this.element === 'a' && { target: this.target }),
      ...(this.element === 'input' && { value: this.getText() }),
      disabled: (this.status === 'disable' || this.status === 'loading') && this.element !== 'a',
      ...(this.element !== 'button' && { role: 'button' }),
      ...((this.status === 'disable' || this.status === 'loading') && { ['aria-disabled']: 'true' }),
      'aria-label': this.text ? this.text : this.iconButtonAriaLabel,
    };
  }

  componentDidRender() {
    if (this.status === BUTTON_STATUSES.loading) {
      this.position = BUTTON_ICON_POSITIONS.left;
    } else {
      this.position = this.iconPosition;
    }
  }

  render() {
    return (
      <Host {...{ exportparts: this.icon && `icon, icon-${this.icon}` }}>
        <this.element class={this.getClasses()} {...this.getAttributes()}>
          {this.icon && this.status !== 'loading' && this.element !== 'input' && (
            <wink-icon appearance="default" icon={this.icon} size={this.size}></wink-icon>
          )}
          {this.status === BUTTON_STATUSES.loading && this.loaderSVG}

          {this.element !== 'input' && this.getText()}
        </this.element>
      </Host>
    );
  }
}
