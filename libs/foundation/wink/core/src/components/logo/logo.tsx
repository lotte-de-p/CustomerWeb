import { Component, h, Host, Prop, getAssetPath } from '@stencil/core';
import { logos } from './data/logo.data';
import { BREAKPOINTS } from '../../models/breakpoints.types';
import { logoVariant } from './models/logo.types';
import { TARGETS, Target } from '../../models/targets.types';

@Component({
  tag: 'wink-logo',
  styleUrls: {
    telenet: 'styles/brands/logo.telenet.scss',
    base: 'styles/brands/logo.base.scss',
  },
  shadow: true,
})
export class Logo {
  @Prop() alt = '';
  @Prop() href = '';
  @Prop() target: Target = TARGETS.self;
  @Prop() appearance?: logoVariant = 'telenet-yellow';

  private getSrcDesktop() {
    return logos[this.appearance!]['desktop'] && getAssetPath(logos[this.appearance!]['desktop']);
  }

  private getSrcMobile() {
    return logos[this.appearance!]['mobile'] && getAssetPath(logos[this.appearance!]['mobile']);
  }
  private altText() {
    return (this.alt !== 'Inspect element to check' && this.alt) || logos[this.appearance!]['alt'];
  }

  private readonly renderLogoImage = (srcDesktop: string, srcMobile: string | undefined, alt: string) => {
    return (
      <picture>
        {srcMobile && <source srcSet={srcMobile} media={BREAKPOINTS.mobile} />}
        <img src={srcDesktop} alt={alt} />
      </picture>
    );
  };

  render() {
    return (
      <Host>
        {this.href.length > 0 ? (
          <a href={this.href} target={this.target}>
            {this.renderLogoImage(this.getSrcDesktop(), this.getSrcMobile(), this.altText())}
          </a>
        ) : (
          this.renderLogoImage(this.getSrcDesktop(), this.getSrcMobile(), this.altText())
        )}
      </Host>
    );
  }
}
