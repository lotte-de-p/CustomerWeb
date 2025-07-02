import { AttachInternals, Component, Element, h, Host, Prop } from '@stencil/core';
import { FORM_LABEL_RENDITION } from '../form-label/models/form-label.types';
import { UUId } from '../../../utils/utils';

@Component({
  tag: 'wink-select',
  styleUrls: {
    telenet: 'styles/brands/select.telenet.scss',
    base: 'styles/brands/select.base.scss',
  },
  scoped: true,
})
export class Select {
  @AttachInternals() internals!: ElementInternals;

  @Element() host!: HTMLWinkSelectElement;

  @Prop() label?: string;
  @Prop() helper?: string;
  @Prop() isRequired = false;
  @Prop() selectId = '';
  @Prop() selectName?: string;
  @Prop() error?: string;
  @Prop() isDisabled = false;
  @Prop() value?: string;
  @Prop() placeholder?: string;
  @Prop() tooltip?: string;

  componentDidRender() {
    const selectEl = this.host.querySelector('select');
    if (selectEl?.value === '') {
      selectEl.classList.add('placeholder');
    }
    this.selectId = this.selectId.length > 0 ? this.selectId : UUId();
  }

  private handleChange(e: Event) {
    this.value = (e.target as HTMLSelectElement).value;
    if (this.value === '') {
      (e.target as HTMLSelectElement).classList.add('placeholder');
    } else {
      (e.target as HTMLSelectElement).classList.remove('placeholder');
    }
  }

  render() {
    return (
      <Host>
        <label class={{ 'label-disabled': this.isDisabled }} htmlFor={this.selectId}>
          <wink-form-label
            label={this.label}
            helper={this.helper}
            rendition={FORM_LABEL_RENDITION.default}
            show-optional={!this.isRequired}
            tooltip={this.tooltip}
          />
        </label>
        <div class="select-wrapper">
          <select
            id={this.selectId}
            name={this.selectName}
            aria-invalid={!!this.error}
            onChange={(e) => this.handleChange(e)}
            disabled={!!this.isDisabled}
            class={{
              invalid: !!this.error,
            }}>
            {this.placeholder && (
              <option value="" selected disabled>
                {this.placeholder}
              </option>
            )}
            <slot />
          </select>
          <wink-icon icon="chevron-down" appearance="transparent" icon-color="default" />
        </div>
        {this.error && <wink-validation-message message={this.error} />}
      </Host>
    );
  }
}
