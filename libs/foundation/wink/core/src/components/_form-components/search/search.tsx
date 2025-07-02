import { Component, h, Host, Prop } from '@stencil/core';
import { InputEnterkeyhint, INPUT_ENTERKEYHINTS } from '../input/models/input.types';

@Component({
  tag: 'wink-search',
  styleUrls: {
    telenet: 'styles/brands/search.telenet.scss',
    base: 'styles/brands/search.base.scss',
  },
  scoped: true,
})
export class Search {
  @Prop({ reflect: true }) value = '';
  @Prop() inputId!: string;
  @Prop() name!: string;
  @Prop() placeholder = '';
  @Prop() enterkeyhintOption: InputEnterkeyhint = INPUT_ENTERKEYHINTS.none;
  @Prop() tooltip?: string;

  render() {
    return (
      <Host>
        <wink-input
          appearance="search"
          icon-left="search"
          icon-right="backspace"
          input-mode-option="text"
          type="text"
          value={this.value}
          placeholder={this.placeholder}
          inputId={this.inputId}
          enterkeyhint-option={this.enterkeyhintOption}
          name={this.name}
          tooltip={this.tooltip}></wink-input>
      </Host>
    );
  }
}
