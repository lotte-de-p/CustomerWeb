import { AttachInternals, Component, Element, h, Host, Prop } from '@stencil/core';
import { toggleAlignment, TOGGLE_ALIGNMENT } from './models/toggle-switch.types';
import { UUId } from '../../../utils/utils';
@Component({
  tag: 'wink-toggle-switch',
  styleUrls: {
    telenet: 'styles/brands/toggle-switch.telenet.scss',
    base: 'styles/brands/toggle-switch.base.scss',
  },
  scoped: true,
})
export class ToggleSwitch {
  @AttachInternals() internals!: ElementInternals;

  @Element() host!: HTMLWinkToggleSwitchElement;

  @Prop() label = '';
  @Prop() toggleSwitchId = '';
  @Prop() toggleSwitchName = '';
  @Prop() alignment: toggleAlignment = TOGGLE_ALIGNMENT.nextTo;
  @Prop({ reflect: true }) checked = false;
  @Prop() disabled = false;

  private readonly labelOnClick = (_e: Event) => {
    this.host?.querySelector('input')?.click();
  };

  private readonly handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      this.host?.querySelector('input')?.click();
    }
  };

  componentDidRender() {
    this.toggleSwitchId = this.toggleSwitchId?.length > 0 ? this.toggleSwitchId : UUId();
  }
  render() {
    return (
      <Host class={`toggle-switch--${this.alignment.toLocaleLowerCase()}`}>
        <p
          class={`toggle-switch--label ${this.disabled ? 'toggle-switch--label--disabled' : ''}`}
          onClick={this.labelOnClick}>
          {this.label}
        </p>
        <div class="toggle-switch--wrapper">
          <input
            type="checkbox"
            id={this.toggleSwitchId}
            name={this.toggleSwitchName}
            onKeyDown={this.handleKeyDown}
            checked={this.checked}
            disabled={this.disabled}
          />
          <div class="toggle-switch--icon" onClick={this.labelOnClick}>
            <wink-icon icon="cross-small" size="sm" />
            <wink-icon icon="tick-small" size="sm" />
          </div>
          <label htmlFor={this.toggleSwitchId}></label>
        </div>
      </Host>
    );
  }
}
