import { AttachInternals, Component, h, Prop, Method } from '@stencil/core';
import { Directions, DIRECTIONS } from '../../../../../models/positions.types';

@Component({
  tag: 'wink-checkbox-group',
  styleUrls: {
    telenet: 'styles/brands/checkbox-group.telenet.scss',
    base: 'styles/brands/checkbox-group.base.scss',
  },
  scoped: true,
})
export class CheckboxGroup {
  @AttachInternals() internals!: ElementInternals;

  @Prop() label = '';
  @Prop() helper = '';
  @Prop() direction: Directions = DIRECTIONS.vertical;
  @Prop({ reflect: true, mutable: true }) error?: string;
  @Prop() isRequired = false;
  @Prop() optionalText = 'Optioneel';
  @Prop() tooltip?: string;

  @Method()
  async setValidation(errorMsg?: string) {
    if (errorMsg) {
      this.error = errorMsg;
    } else {
      this.error = '';
    }
  }

  render() {
    return (
      <fieldset>
        <legend class="checkbox-group__wrapper">
          <wink-form-label
            label={this.label}
            helper={this.helper}
            show-optional={!this.isRequired}
            optional-text={this.optionalText}
            tooltip={this.tooltip}
          />
        </legend>
        <div class={`checkbox-group--${this.direction}`}>
          <slot />
        </div>
        {this.error && <wink-validation-message message={this.error} type="error" />}
      </fieldset>
    );
  }
}
