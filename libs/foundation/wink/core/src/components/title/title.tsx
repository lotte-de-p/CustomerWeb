import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';
import { TITLE_SIZES, TitleSize, TITLE_SPACINGS_Y, TitleSpacingY } from './models/title.types';

@Component({
  tag: 'wink-title',
  styleUrls: {
    telenet: 'styles/brands/title.telenet.scss',
    base: 'styles/brands/title.base.scss',
  },
  shadow: true,
})
export class Title implements ComponentInterface {
  @Prop() htmlTag: TitleSize = TITLE_SIZES.h2;
  @Prop() noSeo = false;
  @Prop() text = '';
  @Prop() spacingY: TitleSpacingY = TITLE_SPACINGS_Y.default;

  @State() _HtmlTag: TitleSize = this.htmlTag;

  componentWillRender(): void {
    this._HtmlTag = this.noSeo ? ('div' as TitleSize) : this.htmlTag;
  }

  render() {
    return (
      <Host class={this.spacingY !== 'default' ? `spacing-${this.spacingY}` : ''}>
        <this._HtmlTag class={{ [this.htmlTag]: this.noSeo }}>{this.text}</this._HtmlTag>
      </Host>
    );
  }
}
