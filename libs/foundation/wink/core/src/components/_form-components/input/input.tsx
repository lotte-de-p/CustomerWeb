import { Component, Fragment, Host, h, Prop, Event, EventEmitter, State, Method, Element } from '@stencil/core';
import {
  INPUT_APPEARANCES,
  INPUT_AUTOCOMPLETES,
  INPUT_ENTERKEYHINTS,
  INPUT_MODES,
  INPUT_SIZES,
  INPUT_TYPES,
  InputAppearance,
  InputAutocomplete,
  InputEnterkeyhint,
  InputMode,
  InputSize,
  InputType,
} from './models/input.types';
import { UUId } from '../../../utils/utils';

@Component({
  tag: 'wink-input',
  styleUrls: {
    telenet: 'styles/brands/input.telenet.scss',
    base: 'styles/brands/input.base.scss',
  },
  formAssociated: true,
  scoped: true,
})
export class Input {
  @Element() host!: HTMLWinkInputElement;

  @Prop({ reflect: true }) appearance: InputAppearance = INPUT_APPEARANCES.default;
  @Prop({ mutable: true, reflect: true }) value = '';
  @Prop() inputId!: string;
  @Prop() name!: string;
  @Prop() type: InputType = INPUT_TYPES.text;
  @Prop() placeholder = '';
  @Prop() isRequired = false;
  @Prop() inputModeOption: InputMode = INPUT_MODES.text;
  @Prop() autocomplete: InputAutocomplete = INPUT_AUTOCOMPLETES.off;
  @Prop() enterkeyhintOption: InputEnterkeyhint = INPUT_ENTERKEYHINTS.none;
  @Prop() isReadonly = false;
  @Prop() isDisabled = false;
  @Prop() isAutofocused = false;
  @Prop() step?: number;
  @Prop() minValue?: number | string;
  @Prop() maxValue?: number | string;
  @Prop({ reflect: true, mutable: true }) error?: string;

  @Prop() prefixValue = '';
  @Prop() postfixValue = '';

  @Prop() iconLeft = '';
  @Prop() iconRight = '';
  @State() showIconRight = true;
  @State() inputWidth = 0;

  @Prop() label = '';
  @Prop() helper = '';
  @Prop() optionalText = 'Optional';
  @Prop() labelHref?: string;
  @Prop() labelLinkText?: string;
  @Prop() tooltip?: string;

  @Prop({ reflect: true }) size: InputSize = INPUT_SIZES.md;

  @Event() valueChanged: EventEmitter<string> | undefined;

  @Method()
  async setValidation(errorMsg?: string) {
    if (errorMsg) {
      this.error = errorMsg;
    } else {
      this.error = '';
    }
  }

  private getLabelId() {
    return this.inputId + ':Label';
  }
  private getHelperId() {
    return this.inputId + ':Helper';
  }
  private getErrorMsgId() {
    return this.inputId + ':Error';
  }

  private getAriaDescribedby() {
    return [this.label && this.getLabelId(), this.helper && this.getHelperId(), this.error && this.getErrorMsgId()]
      .filter((item) => typeof item === 'string' && item.trim().length > 0)
      .join(' ');
  }

  private get getLabel() {
    if (this.label) {
      return (
        <Fragment>
          <label
            htmlFor={this.inputId}
            id={this.getLabelId()}
            class={{ label: true, 'label-disabled': this.isDisabled }}>
            <wink-form-label
              label={this.label}
              helper={this.helper}
              helper-id={this.getHelperId()}
              show-optional={!this.isRequired}
              optional-text={this.optionalText}
              href={this.labelHref}
              link-text={this.labelLinkText}
              tooltip={this.tooltip}
            />
          </label>
        </Fragment>
      );
    }
  }
  private get getPrefix() {
    if (this.prefixValue && !this.iconLeft) {
      return (
        <Fragment>
          <div
            class={{
              'input-affix input-affix-prefix': true,
              'input-affix-disabled': this.isDisabled,
              'input-affix-readonly': this.isReadonly,
            }}>
            {this.prefixValue}
          </div>
        </Fragment>
      );
    }
  }

  private get getPostfix() {
    if (this.postfixValue && !this.iconRight) {
      return (
        <Fragment>
          <div
            class={{
              'input-affix input-affix-postfix': true,
              'input-affix-disabled': this.isDisabled,
              'input-affix-readonly': this.isReadonly,
            }}>
            {this.postfixValue}
          </div>
        </Fragment>
      );
    }
  }
  private getReadOnlyLength(value: string) {
    if (this.isReadonly && value.length > 0) {
      this.inputWidth = this.type === INPUT_TYPES.date ? value.length + 4 : value.length;
    } else {
      this.inputWidth = 0;
    }
  }

  private showSearchBackSpaceIcon(value: string) {
    if (value.length === 0 && this.appearance === INPUT_APPEARANCES.search) {
      this.showIconRight = false;
    } else {
      this.showIconRight = true;
    }
  }

  private handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.showSearchBackSpaceIcon(this.value);
    this.getReadOnlyLength(this.value);

    if (this.valueChanged) {
      this.valueChanged.emit(this.value);
    }
  }

  private handleRightIconClick() {
    const inputEl = this.host?.querySelector('input');
    if (inputEl?.classList.contains('input-password')) {
      const rightIconEl = this.host?.querySelector('.input-icon-button-right wink-icon');
      if (inputEl?.type === 'password') {
        inputEl.type = 'text';
        rightIconEl?.setAttribute('icon', 'eye-off');
      } else {
        inputEl.type = 'password';
        rightIconEl?.setAttribute('icon', 'eye');
      }
    }
  }

  private getAttributes() {
    return {
      ...{ id: this.inputId },
      ...{ name: this.name },
      ...{ type: this.type },
      ...{ value: this.value },
      ...(this.placeholder && { placeholder: this.placeholder }),
      ...{ 'input-mode': this.inputModeOption },
      ...{ autocomplete: this.autocomplete },
      ...(this.isAutofocused && { autofocus: this.isAutofocused }),
      ...{ enterkeyhint: this.enterkeyhintOption },
      ...(this.isRequired && { required: this.isRequired }),
      ...(this.isDisabled && { disabled: this.isDisabled }),
      ...(this.isReadonly && { readonly: this.isReadonly }),
      'aria-describedby': this.getAriaDescribedby(),
      'aria-invalid': !!this.error,
      ...(this.minValue !== undefined && { min: this.minValue }),
      ...(this.maxValue !== undefined && { max: this.maxValue }),
      ...(this.step && { step: this.step }),
    };
  }

  componentDidRender() {
    this.showSearchBackSpaceIcon(this.value);
    this.getReadOnlyLength(this.value);
    this.inputId = this.inputId?.length > 0 ? this.inputId : UUId();
  }

  render() {
    return (
      <Host>
        {this.getLabel}

        <div
          class={{
            'input-wrapper': true,
            'input-with-icon-button input-with-icon-button-left': this.iconLeft?.length > 0,
            'input-with-icon-button input-with-icon-button-right': this.iconRight?.length > 0,
            'input-wrapper-date': this.type === 'date',
          }}>
          {this.getPrefix}

          {this.iconLeft?.length > 0 && (
            <div class="input-icon-button input-icon-button-left">
              <button type="button" aria-label={this.iconLeft} class="input-icon-button-button">
                <wink-icon appearance="default" icon={this.iconLeft} size={this.size}></wink-icon>
              </button>
            </div>
          )}

          <input
            onInput={(e) => this.handleChange(e)}
            {...this.getAttributes()}
            class={{
              input: true,
              invalid: !!this.error,
              'input-password': this.type === INPUT_TYPES.password,
            }}
            style={{
              width: this.isReadonly && this.inputWidth > 0 ? `${this.inputWidth}ch` : '',
            }}
          />

          {this.type === INPUT_TYPES.date && !this.isReadonly && (
            <wink-icon class={{ disabled: this.isDisabled }} icon="calendar" appearance="transparent" />
          )}

          {this.iconRight?.length > 0 && this.showIconRight && (
            <div class="input-icon-button input-icon-button-right">
              <button
                type="button"
                aria-label={this.iconRight}
                class="input-icon-button-button"
                onClick={() => this.handleRightIconClick()}>
                <wink-icon appearance="default" icon={this.iconRight} size={this.size}></wink-icon>
              </button>
            </div>
          )}

          {this.getPostfix}
        </div>

        {this.error && (
          <div id={this.getErrorMsgId()} class="error-msg">
            <wink-validation-message message={this.error} />
          </div>
        )}
      </Host>
    );
  }
}
