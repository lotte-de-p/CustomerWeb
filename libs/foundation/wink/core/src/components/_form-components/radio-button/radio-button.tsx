import { AttachInternals, Component, Element, h, Prop } from '@stencil/core';
import { FORM_LABEL_RENDITION } from '../form-label/models/form-label.types';

@Component({
  tag: 'wink-radio-button',
  styleUrls: {
    telenet: 'styles/brands/radio-button.telenet.scss',
    base: 'styles/brands/radio-button.base.scss',
  },
  scoped: true,
})
export class RadioButton {
  @AttachInternals() internals!: ElementInternals;

  @Element() host!: HTMLWinkRadioButtonElement;

  @Prop() label = '';
  @Prop() helper = '';
  @Prop() radioButtonId = '';
  @Prop() name = '';
  @Prop({ reflect: true }) checked = false;
  @Prop() disabled = false;
  @Prop() error = false;

  private readonly handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      this.host?.querySelector('input')?.click();
    }
  };

  render() {
    return (
      <label>
        <input
          type="radio"
          id={this.radioButtonId}
          name={this.name}
          value={this.label}
          checked={this.checked}
          disabled={this.disabled}
          aria-invalid={this.error}
          onKeyDown={this.handleKeyDown}
        />
        <wink-form-label label={this.label} helper={this.helper} rendition={FORM_LABEL_RENDITION.subComponent} />
      </label>
    );
  }
}
