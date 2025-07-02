import { AttachInternals, Component, Element, h, Prop } from '@stencil/core';
import { FORM_LABEL_RENDITION } from '../form-label/models/form-label.types';

@Component({
  tag: 'wink-checkbox',
  styleUrls: {
    telenet: 'styles/brands/checkbox.telenet.scss',
    base: 'styles/brands/checkbox.base.scss',
  },
  scoped: true,
})
export class Checkbox {
  @AttachInternals() internals!: ElementInternals;

  @Element() host!: HTMLWinkCheckboxElement;

  private readonly handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      this.host?.querySelector('input')?.click();
    }
  };

  @Prop() label = '';
  @Prop() helper = '';
  @Prop() checkboxId = '';
  @Prop() name = '';
  @Prop({ reflect: true }) checked = false;
  @Prop() error = false;
  @Prop() disabled = false;

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.checked}
          disabled={this.disabled}
          aria-invalid={this.error}
          id={this.checkboxId}
          name={this.name}
          value={this.label}
          onKeyDown={this.handleKeyDown}
        />
        <wink-form-label label={this.label} helper={this.helper} rendition={FORM_LABEL_RENDITION.subComponent} />
      </label>
    );
  }
}
