import { Component, h, Host, Prop } from '@stencil/core';
import { FORM_LABEL_RENDITION, FormLabelRendition } from './models/form-label.types';

@Component({
  tag: 'wink-form-label',
  styleUrls: {
    telenet: 'styles/brands/form-label.telenet.scss',
    base: 'styles/brands/form-label.base.scss',
  },
  scoped: true,
})
export class FormLabel {
  @Prop() label = '';
  @Prop() helper?: string;
  @Prop() labelId?: string;
  @Prop() helperId?: string;
  @Prop() rendition: FormLabelRendition = FORM_LABEL_RENDITION.default;
  @Prop() optionalText = 'Optioneel';
  @Prop() showOptional = false;
  @Prop() isDisabled = false;
  @Prop() href?: string;
  @Prop() linkText?: string;
  @Prop() tooltip?: string;

  render() {
    return (
      <Host class={`${this.isDisabled ? 'label--disabled' : ''} label--${this.rendition}`.toLocaleLowerCase()}>
        <span class="label--content-wrapper">
          <span class="label--text">
            {this.label}
            {this.tooltip && <wink-tooltip>{this.tooltip}</wink-tooltip>}
          </span>
          {this.helper && (
            <span class="label--helper" id={this.helperId}>
              {this.helper}
            </span>
          )}
        </span>

        {(this.href || this.showOptional) && (
          <div class="label--optional">
            {this.showOptional && this.optionalText && <p>{this.optionalText}</p>}

            {this.href && (
              <wink-link
                appearance="default"
                icon=""
                size="inherit"
                is-disabled="false"
                class="toast-link"
                href={this.href}>
                {this.linkText}
              </wink-link>
            )}
          </div>
        )}
      </Host>
    );
  }
}
