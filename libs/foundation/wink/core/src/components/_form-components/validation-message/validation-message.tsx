import { Component, h, Prop } from '@stencil/core';
import { VALIDATION_TYPES, ValidationTypes } from './models/validation-message.types';

@Component({
  tag: 'wink-validation-message',
  styleUrls: {
    telenet: 'styles/brands/validation-message.telenet.scss',
    base: 'styles/brands/validation-message.base.scss',
  },
  scoped: true,
})
export class ValidationMessage {
  @Prop() message?: string;
  @Prop() type: ValidationTypes = VALIDATION_TYPES.error;

  render() {
    return (
      <div class={`validation-message--${this.type}`}>
        <wink-icon icon="error-shape" />
        {this.message}
      </div>
    );
  }
}
