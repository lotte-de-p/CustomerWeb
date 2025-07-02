import { Component, h, Host, Prop } from '@stencil/core';
import {
  PARAGRAPH_APPEARANCES,
  ParagraphAppearance,
  PARAGRAPH_SIZES,
  ParagraphSize,
  ParagraphColors,
} from './models/paragraph.types';

@Component({
  tag: 'wink-paragraph',
  styleUrls: {
    telenet: 'styles/brands/paragraph.telenet.scss',
    base: 'styles/brands/paragraph.base.scss',
  },
  shadow: true,
})
export class Paragraph {
  @Prop() appearance: ParagraphAppearance = PARAGRAPH_APPEARANCES.body;
  @Prop() size: ParagraphSize = PARAGRAPH_SIZES.regular;
  @Prop() paragraphColor?: ParagraphColors;

  render() {
    return (
      <Host
        class={{
          ['font--' + this.appearance + '-' + this.size]: true,
          ['color--' + this.paragraphColor]: this.paragraphColor !== undefined,
        }}>
        <slot />
      </Host>
    );
  }
}
