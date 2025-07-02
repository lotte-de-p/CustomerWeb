import { Component, h, Prop } from '@stencil/core';
import { AUTOCOMPLETE_OPTIONS, AutocompleteOptions } from './models/textarea.types';
import { InputEnterkeyhint, INPUT_ENTERKEYHINTS } from '../input/models/input.types';
import { UUId } from '../../../utils/utils';

@Component({
  tag: 'wink-textarea',
  styleUrls: {
    telenet: 'styles/brands/textarea.telenet.scss',
    base: 'styles/brands/textarea.base.scss',
  },
  scoped: true,
})
export class TextArea {
  @Prop() isDisabled = false;
  @Prop() isRequired = false;
  @Prop() autocomplete: AutocompleteOptions = AUTOCOMPLETE_OPTIONS.off;
  @Prop() enterkeyhintOption: InputEnterkeyhint = INPUT_ENTERKEYHINTS.none;

  @Prop() textareaId!: string;
  @Prop() label?: string;
  @Prop() helper?: string;
  @Prop() name?: string;
  @Prop() placeholder?: string;
  @Prop() error?: string;
  @Prop() minlength?: number;
  @Prop() maxlength?: number;
  @Prop() rows?: number;
  @Prop() tooltip?: string;

  private getAttributes() {
    return {
      ...(this.textareaId && { id: this.textareaId }),
      ...(this.name && { name: this.name }),
      ...(this.autocomplete && { autocomplete: this.autocomplete }),
      ...(this.minlength && { minlength: this.minlength }),
      ...(this.maxlength && { maxlength: this.maxlength }),
      ...(this.placeholder && { placeholder: this.placeholder }),
      ...(this.rows && { rows: this.rows }),
      ...(this.enterkeyhintOption && { enterkeyhint: this.enterkeyhintOption }),
      'aria-invalid': !!this.error,
      required: this.isRequired,
      disabled: this.isDisabled,
    };
  }

  componentDidRender() {
    this.textareaId = this.textareaId?.length > 0 ? this.textareaId : UUId();
  }

  render() {
    return (
      <label>
        <wink-form-label
          label={this.label}
          helper={this.helper}
          showOptional={!this.isRequired}
          is-disabled={this.isDisabled}
          tooltip={this.tooltip}></wink-form-label>
        <textarea {...this.getAttributes()}></textarea>
        {!!this.error && <wink-validation-message message={this.error} type="error" />}
      </label>
    );
  }
}
